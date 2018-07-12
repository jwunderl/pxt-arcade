# Activity: Sprite Overlap & Events - Part 2

We use SpriteKind to give a label to Sprites so we can define how a "kind of sprite" will act when overlapping with another "kind of sprite." In the activity, all "Cloud" SpriteKind's respond with the same action when overlapped with a `Helicopter` SpriteKind. 

By making several cloud shaped sprites with the same SpriteKind of `Cloud`, we write code to so all SpriteKind `Cloud` interact in the same way with a SpriteKind `Helicopter` overlap event.

In this activity the student will continue to work with:
* on overlap event with a SpriteKind (e.g. - `Cloud`) applied to several identical sprites
* define multiple SpriteKind overlap events and actions
* spawn a SpriteKind
* ``||sprites:on created||`` event setting image and position when specific SpriteKind is spawned
  * ``||sprites:set image to||``
  * ``||math:pick random||`` 

# Overlaps & Events (part 2)

# TODO: eric overview video bump


## Concept: SpriteKind Overlap Event "bump" action  
Having sprites bump rather than pass over each other is useful game behavior for a SpriteKind overlap event. One way to simulate a bump is:
* move the sprite in the opposite direction after the overlap (We bump backwards).  The faster we bump, the farther we move away from the overlap object.

* Stop the sprite (set vx and vy to 0)
  * change x position by (-1)*(x-velocity)
  * change y position by (-1)*(y-velocity)
* Shake the stationary object (cloud)
  * move 1 pixel (any direction)
  * pause
  * move back

## Example 1: bump action from overlap event  
1. Review the code below 
2. Create the sample code and run the code 
3. Save the code for the task (name it "copterBump1")  
4. Look at the overlap event - note which sprite is named `sprite` and which is `otherSprite` and the how the code creates the bump behavior.

### ~hint
**Teacher Note**
The code to make a bump can be difficult to grasp for students.  Break it down for them step by step.  

Start with the behavior.  The faster the velocity the farther the bump in the opposite direction. 
* The code uses (velocity)*(-1) to change the position. The value of velocity is number (positive or negative).
* The number generated above is now the opposite sign (we multiplied by -1)
* Using the velocity value that is the opposite we can adjust the position.  

### Give an example to students  
A car going 10 meters/second bumps -10 centimeters.

Ask: what if going -100 meters/second?  [Answer] bumps +100 centimeters - always note the sign Changes (positive/negative swap)

### Reveiw the bump code  

This is the code that bumps the helicopter
```block
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
```

Ask students for the values of sprite .x and sprite.y if sprite.vx = -25 and sprite .vy = 30

### Reveiw the shake code  

This code shakes the cloud by moving it 1 pixel and then back

```block
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
```
It moves the spite 1 pixel, pauses and then moves back. 
### ~

```blocks

// https://makecode.com/_JqUREsW6cPKP

enum SpriteKind {
    Helicopter,
    Cloud,
    LandingPad,
    Player,
    Enemy
}
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let copter: Sprite = null
let landing: Sprite = null
// Control the copter with the + pad
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += -1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
game.splash("Cloud Bump", "control pad flying")
scene.setBackgroundColor(9)
copter = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . 
. . . . . f f f f . . . . . . . . . f f f f f f f . . . . . . . 
. . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . e f . . e e e . . . . . . . . . . . 
. . . . f . . . . . . . . . e . . e e f f 1 1 . . . . . . . . . 
. . f f f f f f f f . . . . e e e 2 f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . e e e 2 2 2 f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . e e e 2 2 2 2 2 2 f 1 1 1 1 1 e . . . . . . . 
. . . . . f e e e e 2 2 2 2 2 2 2 2 f f 1 1 f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . . e e 2 2 2 2 2 2 e 2 2 2 2 2 2 f f 2 e . . . . . . . 
. . . . . . . e e 2 2 2 2 2 e e 2 2 2 2 2 2 2 e e . . . . . . . 
. . . . . . . . e e e e 2 e e e 2 2 2 2 2 2 e e . . . . . . . . 
. . . . . . . . . . . f e . . . e e e e e e . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Helicopter)
copter.setFlag(SpriteFlag.StayInScreen, true)
// Create and place "clouds"  Sprites
cloud1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
cloud1.x = 20
cloud1.y = 30
cloud2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
cloud2.x = 50
cloud2.y = 65
cloud3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
cloud3.x = 100
cloud3.y = 40

landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 125

```


## Student Task #1a: Soft Landing  

There is a "T" shaped landing area at the bottom of the example.  The helicopter sprite should not go through the landing, it should land!

1. starting with the above example replace the helicopter motion with the short method using ``||controller:dx (left-right buttons)||``  
2. review the rest of the code and then add an on overlap event for when the helicopter overlaps with the landing (Note the SpriteKind of `LandingPad`)
3. the block of code in the overlap event should stop the helicopter velocity motion (both vx and vy to zero) and then change the helicopter position **up** 2 pixels so it isn't overlapping any more.
4. Challenge: Add a new sprite and SpriteKind to the Screen (e.g. - mountain, tree, or other) and set the overlap action to make the helicopter sprite have an erratic motion after an overlap. This should be 3 or more changes in position and/or velocity. Also, pauses allow the game player to see the motion changes more clearly.

### ~hint
**Teacher Note**
Continue to quiz students throughout the course on how to use the short method to give a sprite motion using ``||controller:dx (left-right buttons)||``  type controller block.

```block
game.onUpdate(function () {
    copter.vx += controller.dx()
    copter.vy += controller.dy()
})
```

### ~

### ~hint
For the landing:  to change the helicopter Y position to move up we have to change by an negative Y value.

Challenge Tip: Erratic motion can be made by changing the sprite position back and forth several times. Try changes in velocity and/or position separated by short pauses.

### ~

```blocks
// :solution
// https://makecode.com/_Ujght09RXCmJ

enum SpriteKind {
    Helicopter,
    Cloud,
    LandingPad,
    Player,
    Enemy,
    Forest
}
let landing: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let tree: Sprite = null
let copter: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = 0
    game.splash("Perfect Landing!")
    sprite.y += -2
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Forest, function (sprite, otherSprite) {
    sprite.vx = -30
    sprite.vy = -30
    sprite.x += -15
    pause(100)
    sprite.x += 17
    pause(200)
    sprite.y += 12
    pause(200)
    sprite.y += -7
    pause(200)
    sprite.y += 12
    pause(200)
    game.over()
})
game.splash("Cloud Bump", "flying with control pad")
scene.setBackgroundColor(9)
tree = sprites.create(img`
. 6 6 . . . . . . . . . 6 6 6 6 . . . . 6 6 7 6 . . . 6 6 . . . 
6 6 7 6 6 6 6 6 6 6 . 6 6 7 7 7 6 6 6 6 7 6 6 7 6 6 6 7 7 6 7 . 
7 6 6 7 7 7 7 6 7 6 6 6 7 6 6 7 6 7 7 6 7 7 7 6 7 6 6 7 7 7 7 6 
6 7 7 6 7 6 7 7 7 7 6 6 7 7 6 7 7 7 7 7 7 6 7 7 7 6 7 7 7 7 7 7 
6 7 6 7 7 7 7 7 6 7 7 6 7 7 6 7 7 7 7 6 7 7 7 7 6 6 7 7 6 7 7 6 
6 6 7 7 6 7 7 6 7 6 7 6 6 7 7 7 6 7 6 7 7 7 7 6 6 6 7 7 7 7 7 7 
. 6 7 6 7 7 6 7 7 7 7 7 6 6 7 7 7 6 7 7 7 6 7 6 6 7 7 7 6 7 7 7 
. 6 6 7 6 7 7 7 6 7 6 7 . 6 7 7 6 7 7 7 6 6 7 7 7 6 7 7 7 7 6 6 
. 6 6 6 6 7 6 7 7 7 7 7 . 6 6 7 7 7 7 7 7 7 7 7 . 6 7 7 7 6 7 7 
. . . . 6 . 7 7 7 . . . . . 6 6 e e e e 7 7 6 . . 6 6 7 7 7 7 6 
. . . . . . . e e . . . . . . . e e c e . . . . . . 6 6 6 7 6 . 
. . . . . . . . e e e . . . . e e c e e . . e e e e e 6 e . . . 
. . . . . . . . e e e e e . . e e c e e e e e e e e e e e . . . 
. . . . . . . . . e e e e e e e c c e e e e e e e e e . . . . . 
. . . . . . . . . . e e e e e e c e e e e e e e e . . . . . . . 
. . . . . . . . . . . e e c e e c e e e e e . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e e . . . . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c c . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e e e e e e e . . . . . . . . . . . . . . 
`, SpriteKind.Forest)
tree.setPosition(140, 104)
copter = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . 
. . . . . f f f f . . . . . . . . . f f f f f f f . . . . . . . 
. . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . e f . . e e e . . . . . . . . . . . 
. . . . f . . . . . . . . . e . . e e f f 1 1 . . . . . . . . . 
. . f f f f f f f f . . . . e e e 2 f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . e e e 2 2 2 f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . e e e 2 2 2 2 2 2 f 1 1 1 1 1 e . . . . . . . 
. . . . . f e e e e 2 2 2 2 2 2 2 2 f f 1 1 f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . . e e 2 2 2 2 2 2 e 2 2 2 2 2 2 f f 2 e . . . . . . . 
. . . . . . . e e 2 2 2 2 2 e e 2 2 2 2 2 2 2 e e . . . . . . . 
. . . . . . . . e e e e 2 e e e 2 2 2 2 2 2 e e . . . . . . . . 
. . . . . . . . . . . f e . . . e e e e e e . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Helicopter)
copter.setFlag(SpriteFlag.StayInScreen, true)
// Create and place "clouds"  Sprites
cloud1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
cloud1.x = 20
cloud1.y = 30
cloud2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
cloud2.x = 50
cloud2.y = 65
cloud3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
cloud3.x = 100
cloud3.y = 40
landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 125
game.onUpdate(function () {
    copter.vx += controller.dx()
    copter.vy += controller.dy()
})

// :end-solution
```





## Student Task #1b: Add a new unique sprite with SpriteKind of "Cloud" 
1. starting with example or task #1 
2. add a new sprite that looks nothing like a cloud (e.g.- hat, tree, etc.)
3. make sure the new sprite has SpriteKind of "Cloud"  
4. position the new sprite so it is not touching any other sprite
5. Challenge: Add another Sprite that looks identical to the previous new sprite but give it a SpriteKind other than "Cloud" and make sure it has a unique overlap event action (e.g. - might say something new) 
6. **Test the overlaps on the new sprite(s)**

### ~hint
**Teacher Note**
Continue to reinforce to students that SpriteKind controls overlap events. Any and all sprites with the same SpriteKind designation will behave the same when used in an overlap event.  So for a SpriteKind of "Cloud" - regardless if using an image of a "cloud" or a "shoe" or a single pixel "dot" will result in the same code block being run for an overlap event.  In our example it results in the "bump" simulation code.

### ~



```blocks
// :solution
// https://makecode.com/_J488iW5KW2w4

enum SpriteKind {
    Helicopter,
    Cloud,
    LandingPad,
    Player,
    Enemy,
    Forest
}
let landing: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let tree: Sprite = null
let shoe: Sprite = null
let copter: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = 0
    game.splash("Perfect Landing!")
    sprite.y += -2
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Forest, function (sprite, otherSprite) {
    sprite.vx = -30
    sprite.vy = -30
    sprite.x += -15
    pause(100)
    sprite.x += 17
    pause(200)
    sprite.y += 12
    pause(200)
    sprite.y += -7
    pause(200)
    sprite.y += 12
    pause(200)
    game.over()
})
game.splash("Cloud Bump", "flying with control pad")
scene.setBackgroundColor(9)
// Create and place "clouds"  Sprites
shoe = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 9 2 2 2 2 2 . . . 2 2 2 . . . . . . . . . . . . . . . . 
. 2 2 9 2 9 2 2 2 2 . . 2 . . . 2 . . . . . . . . . . . . . . . 
. 2 2 2 9 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 9 9 2 2 2 2 2 9 9 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 9 9 9 9 2 2 2 9 9 2 2 2 2 2 2 2 2 2 . . . . . 
. . 2 2 2 2 2 2 9 9 2 2 9 9 2 9 9 2 2 2 2 2 2 2 2 2 2 2 f . . . 
. . 2 2 2 2 2 2 9 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 f f . . 
. . 2 2 2 2 2 9 9 2 2 2 2 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f . 
. . f 2 2 2 2 2 2 2 2 f f f f f f f 2 2 2 2 2 2 2 2 2 2 f f f f 
. . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
. . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
shoe.setPosition(25, 104)
tree = sprites.create(img`
. 6 6 . . . . . . . . . 6 6 6 6 . . . . 6 6 7 6 . . . 6 6 . . . 
6 6 7 6 6 6 6 6 6 6 . 6 6 7 7 7 6 6 6 6 7 6 6 7 6 6 6 7 7 6 7 . 
7 6 6 7 7 7 7 6 7 6 6 6 7 6 6 7 6 7 7 6 7 7 7 6 7 6 6 7 7 7 7 6 
6 7 7 6 7 6 7 7 7 7 6 6 7 7 6 7 7 7 7 7 7 6 7 7 7 6 7 7 7 7 7 7 
6 7 6 7 7 7 7 7 6 7 7 6 7 7 6 7 7 7 7 6 7 7 7 7 6 6 7 7 6 7 7 6 
6 6 7 7 6 7 7 6 7 6 7 6 6 7 7 7 6 7 6 7 7 7 7 6 6 6 7 7 7 7 7 7 
. 6 7 6 7 7 6 7 7 7 7 7 6 6 7 7 7 6 7 7 7 6 7 6 6 7 7 7 6 7 7 7 
. 6 6 7 6 7 7 7 6 7 6 7 . 6 7 7 6 7 7 7 6 6 7 7 7 6 7 7 7 7 6 6 
. 6 6 6 6 7 6 7 7 7 7 7 . 6 6 7 7 7 7 7 7 7 7 7 . 6 7 7 7 6 7 7 
. . . . 6 . 7 7 7 . . . . . 6 6 e e e e 7 7 6 . . 6 6 7 7 7 7 6 
. . . . . . . e e . . . . . . . e e c e . . . . . . 6 6 6 7 6 . 
. . . . . . . . e e e . . . . e e c e e . . e e e e e 6 e . . . 
. . . . . . . . e e e e e . . e e c e e e e e e e e e e e . . . 
. . . . . . . . . e e e e e e e c c e e e e e e e e e . . . . . 
. . . . . . . . . . e e e e e e c e e e e e e e e . . . . . . . 
. . . . . . . . . . . e e c e e c e e e e e . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e e . . . . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c c . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e e e e e e e . . . . . . . . . . . . . . 
`, SpriteKind.Forest)
tree.setPosition(140, 104)
copter = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . 
. . . . . f f f f . . . . . . . . . f f f f f f f . . . . . . . 
. . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . e f . . e e e . . . . . . . . . . . 
. . . . f . . . . . . . . . e . . e e f f 1 1 . . . . . . . . . 
. . f f f f f f f f . . . . e e e 2 f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . e e e 2 2 2 f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . e e e 2 2 2 2 2 2 f 1 1 1 1 1 e . . . . . . . 
. . . . . f e e e e 2 2 2 2 2 2 2 2 f f 1 1 f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . . e e 2 2 2 2 2 2 e 2 2 2 2 2 2 f f 2 e . . . . . . . 
. . . . . . . e e 2 2 2 2 2 e e 2 2 2 2 2 2 2 e e . . . . . . . 
. . . . . . . . e e e e 2 e e e 2 2 2 2 2 2 e e . . . . . . . . 
. . . . . . . . . . . f e . . . e e e e e e . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Helicopter)
copter.setFlag(SpriteFlag.StayInScreen, true)
// Create and place "clouds"  Sprites
cloud1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
cloud1.x = 20
cloud1.y = 30
cloud2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
cloud2.x = 50
cloud2.y = 65
cloud3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
cloud3.x = 100
cloud3.y = 40
landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 125
game.onUpdate(function () {
    copter.vx += controller.dx()
    copter.vy += controller.dy()
})

// :end-solution
```


## What did we learn?

1. Describe how a SpritKind makes improves the code (e.g - makes programming easier, more powerful, more efficient...).    
2. Explain why in creating a "bump" effect negative X and Y velocities are used to change the X and Y positions. 




## Rubrics


### Overlap task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Overlap & Events 2 | fully competed 1a + b tasks|  fully completed all 3 tasks | Completed all 3 tasks and at least 1 Challenge | Completed all tasks and All Challenge Code  |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanations | answered questions but parts are unclear or lack detail | Explanations address both questions fully | all answers have clear explanations | included an exceptional explanation with original example, drawing or analogy |

### Score = \_\_\_\_\_\_ /10 


### What did we learn rubric [TODO review based on number of questions]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answers for both questions | Explanations address all questions fully | all answers have clear explanations with at least 2 examples for question #1 |  used an exceptional explanation (such as a diagram) in question #2 |

### Score = \_\_\_\_\_\_ /10 