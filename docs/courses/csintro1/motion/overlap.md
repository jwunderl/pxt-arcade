# Activity: Sprite Overlap Events 
Once the spites are moving, the next step is to detect when sprites interact with other objects. Overlap is a primary way sprites trigger interactions with each other.

Sprites, and other game objects, can overlap to activate event code such as scoring points, destroying an object, simulating a bump between objects, starting an animation, ending the game, and much more.

In this activity the student will work with:
* On Overlap event with SpriteKind
* Ghost on - Ghost off
* Game Reset  
* Splash message  
* Using a functions for repeated code


# Cloud Overlaps

# TODO: eric overview video


## Concept: SpriteKind Overlap Event

TODO: provide overview summary info 2 sprite overlap event using SpriteKind - short as covered in video

## Example 1: Two Sprite Overlap  
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "overlapEat")  
4. Look at the overlap event - note which sprite is named `sprite` and which is `otherSprite` 

```block  

enum SpriteKind {
    Player,
    Enemy
}
let head: Sprite = null
let food: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
food = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
`, SpriteKind.Enemy)
head = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . . 
. . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . . . . a a a 5 5 5 a a a a a a a a a . . . . . . . . 
. . . . . . . . a 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . 5 5 5 5 6 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 a a a a a a a a a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 a a a 5 5 5 5 5 a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 1 . 1 . 1 . 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . 1 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 1 . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
`, SpriteKind.Player)
food.setPosition(20, 60)
head.setPosition(120, 60)
game.onUpdate(function () {
    head.x += controller.dx()
})
```  
## Student Task: Add actions to overlap events
1. starting with example 1, or your own similar code
2. add additional code to the overlap event that has the person saying something (e.g. - "Good!")
3. Challenge: add another action to the overlap event. (Hint: can use both sprites)



```block
// :solution
enum SpriteKind {
    Player,
    Enemy
}
let head: Sprite = null
let food: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.say("help", 500)
    pause(500)
    otherSprite.destroy()
    sprite.say("Yum!", 2000)
    pause(2000)
    sprite.destroy()
})
food = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
`, SpriteKind.Enemy)
head = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . . 
. . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . . . . a a a 5 5 5 a a a a a a a a a . . . . . . . . 
. . . . . . . . a 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . 5 5 5 5 6 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 a a a a a a a a a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 a a a 5 5 5 5 5 a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 1 . 1 . 1 . 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . 1 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 1 . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
`, SpriteKind.Player)
food.setPosition(20, 60)
head.setPosition(120, 60)
game.onUpdate(function () {
    head.x += controller.dx()
})

// :end-solution
```


## Example 2: Sprite Overlap - Ghost on 
1. Review the code below
2. Create the sample code and run the code
3. Note: Ghost on is invisible to an overlap

```block
enum SpriteKind {
    Player,
    Enemy
}
let ball: Sprite = null
let block: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
scene.setBackgroundColor(6)
block = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Enemy)
ball = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
block.setPosition(20, 60)
ball.setPosition(120, 60)
block.setFlag(SpriteFlag.Ghost, true)
ball.setFlag(SpriteFlag.Ghost, true)
game.onUpdate(function () {
    ball.x += controller.dx()
})

```

## Example 2: Sprite Overlap - Ghost off  
1. Review the code below
2. Create the sample code and run the code
3. Note: Ghost off is the ame as default without using the ghost block 

```block
enum SpriteKind {
    Player,
    Enemy
}
let ball: Sprite = null
let block: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
scene.setBackgroundColor(6)
block = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Enemy)
ball = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
block.setPosition(20, 60)
ball.setPosition(120, 60)
block.setFlag(SpriteFlag.Ghost, false)
ball.setFlag(SpriteFlag.Ghost, false)
game.onUpdate(function () {
    ball.x += controller.dx()
})

```


### ~hint
**Teacher Note**

Walk through the use of SpriteKind for overlap  and how the local variables `sprite' and `otherSprite` get assigned to the overlapping items.

Also,check several students ability to create sprite motion with game pad

### ~

## Student Task: Create Overlap using 1 SpriteKind Player and multiple SpriteKind Enemy
1. starting with example1, example2 or your own similar code
2. create a few Sprite variables that will use the same SpriteKind (such as Enemy)
3. enable sprite to move anywhere on screen along x and y axises
4. Challenge: use 3 or more SpriteKind labels on sprites and have each SpriteKind so there are two types of overlap reactions.

### ~hint

/* give a hint to student */

### ~

```block
// :solution
enum SpriteKind {
    Helicopter,
    Cloud,
    Rain,
    LandingPad,
    Player,
    Enemy
}
let landing: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let mySprite: Sprite = null

// Control the copter with the + pad
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 1
})
game.splash("Cloud Collision", "control pad flying")
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
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
cloud1.y = 20
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
cloud2.y = 55
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
cloud3.y = 30
// Landing pad drawn on top of 32x32 image placed so
// top of Landing sprite is at bottom of screen
landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
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
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 132

// :end-solution
```


## Concept: SpriteKind applied to several Sprites

# TODO: eric short video here 

We use SpriteKind to give a "kind" label to Sprites so we can define how a "kind of sprite" will act when overlapping with another "kind of sprite." In this example all "Cloud" SpriteKind's act the same when overlapped with  "Helicopter" SpriteKind. 

## Example: simple example 2 

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it [simple name 1]) 
4. [specific comment - "look for..."]

```block  
// simple code here
```  

## Task: add [something] to the code 
1. starting with the [simple example 1] example 
2. add [something simple....]
3. add [something simple....]
4. Optional: Try adding [something that they have to infer or that might take a little longer than the simple items above]

### ~hint
 // Hint to student
### ~

```block
// :solution

/* example of a full solution that the teacher can use - good to follow on previous solution but not required
comments are good!
we need the solution / end-solution tags so we can remove this for student version
*/

// :end-solution


## What did we learn? [create 2 questions]

1. Describe how a [concept 1] makes programming easier, more powerful, reduced code, or something.... .  
2. Compare and contrast [something in the real world with coding] grocery store line or ask student to come up with a comparison.  
3. [Come up with a question of your choice]


## Rubrics


### Overlap task rubric [TODO]

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Turtle  | Made Squares with a loop & Answered Questions|  Was able to nest More than 3 squares using loops | Answered questions with clear explanations using examples and/or analogies | Completed Challenge Code  |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric [TODO review based on number of questions]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 




[TODO - incorporate this solution code]
## Steps in building Helicopter landing
# 1: base level code (TODO: have them work with parts omitted to build up solution to stop at landing pad.)
```block
// :solution
/* *********************************************************
*                    Cloud Collision v1                    *
*         https://makecode.com/_FdDRC5deUFcR               *
*  Introduces  Sprites onOverlap, ghost flag, increase by, *
*  velocity, game.splash                                   *
*                                                          *
***********************************************************/
enum SpriteKind {
    Helicopter,
    Cloud,
    Rain,
    LandingPad
}
let landing: Sprite = null
let rain: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let mySprite: Sprite = null
// Control the copter with the + pad
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 1
})

sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = 0
    game.splash("Perfect Landing!")
    sprite.y += 2
})

game.splash("Cloud Collision")
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
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
cloud1.y = 20
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
cloud2.y = 55
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
cloud3.y = 30


landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
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
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 140

// :end-solution
```

# 2: Reduce redundancy using `on created [sprite] of kind [cloud]`
```block
// :solution

enum SpriteKind {
    Helicopter,
    Cloud,
    Rain,
    LandingPad,
    Player,
    Enemy
}
let landing: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let mySprite: Sprite = null

// Control the copter with the + pad
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 1
})
game.splash("Cloud Collision", "control pad flying")
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
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
cloud1.y = 20
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
cloud2.y = 55
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
cloud3.y = 30

landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
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
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 132

// :end-solution
```

# 3: Make clouds appear in random positions
```block
// :solution
/* *********************************************************
*                    Cloud Collision v3                    *
*         https://makecode.com/_iL9fRvg2XEYd               *
*  Introduces  Sprites onOverlap, ghost flag, increase by, *
*  velocity, game.splash                                   *
*                                                          *
***********************************************************/
enum SpriteKind {
    Helicopter,
    Cloud,
    Rain,
    LandingPad
}
let rain: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let sprite: Sprite = null
sprites.onCreated(SpriteKind.Cloud, function (sprite) {
    sprite.setImage(img`
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
`)
    sprite.x = Math.randomRange(0, screen.width - 16)
    sprite.y = Math.randomRange(0, screen.height - 16)
})
// Control the copter with the + pad
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = 0
    game.splash("Perfect Landing!")
    sprite.y += 2
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 1
})

let mySprite: Sprite = null
let landing: Sprite = null
// display game play
game.splash("Cloud Collision")
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
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
// Create and place "clouds"  Sprites
cloud1 = sprites.create(null, SpriteKind.Cloud)
cloud2 = sprites.create(null, SpriteKind.Cloud)
cloud3 = sprites.create(null, SpriteKind.Cloud)

// Landing pad drawn on top of 32x32 image placed so
// top of Landing sprite is at bottom of screen
landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
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
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 140

// :end-solution
```

# 4: Add a mountain, and bump when you hit it.
```block
// :solution
/* *********************************************************
*                    Cloud Collision v4                    *
*         https://makecode.com/_Kdw15gdgYWz3               *
*  Introduces  Sprites onOverlap, ghost flag, increase by, *
*  velocity, game.splash                                   *
*                                                          *
***********************************************************/
enum SpriteKind {
    Helicopter,
    Cloud,
    Rain,
    LandingPad,
    Mountain,
    Player,
    Enemy
}
let mountain: Sprite = null
let landing: Sprite = null
let rain: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let mySprite: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Mountain, function (sprite, otherSprite) {
    sprite.vx = 0 - sprite.vx
    sprite.vy = 0 - sprite.vy
})
sprites.onCreated(SpriteKind.Cloud, function (sprite) {
    sprite.setImage(img`
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
`)
    sprite.x = Math.randomRange(0, screen.width - 16)
    sprite.y = Math.randomRange(0, screen.height - 16)
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = 0
    game.splash("Perfect Landing!")
    sprite.y += 2
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -1
})
otherSprite = null
// display game play
game.splash("Cloud Collision")
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
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
// Create and place "clouds"  Sprites
cloud1 = sprites.create(null, SpriteKind.Cloud)
cloud2 = sprites.create(null, SpriteKind.Cloud)
cloud3 = sprites.create(null, SpriteKind.Cloud)

// Landing pad drawn on top of 32x32 image placed so
// top of Landing sprite is at bottom of screen
landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
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
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 140
mountain = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e d 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . e d d 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . e d e e 
. . . . . . . . . . . . . . . . . . . . . . . . . . . d d e e e 
. . . . . . . . . . . . . . . . . . . . . . . . . . e d d e e e 
. . . . . . . . . . . . . . . . . . . . . . . . . e d e e e e e 
. . . . . . . . . . . . . . . . . . . . . . . . e d d e d e e e 
. . . . . . . . . . . . . . . . . . . . . . . e e d e e d e e e 
. . . . . . . . . . . . . . . . . . . . . . e e e e e e d e e e 
. . . . . . . . . . . . . . . . . . . . . e e e e e e d e e e e 
. . . . . . . . . . . . . . . . . . . . e e e e e e e d e e e e 
. . . . . . . . . . . . . . . . . . . e e e e e e e e d e e e e 
. . . . . . . . . . . . . . . . . . d e e e e e e e e d e e e e 
. . . . . . . . . . . . . . . . . d e e e e e e e e e d e e e e 
. . . . . . . . . . . . . . . . d e e e e e e e e e e d e e e e 
. . . . . . . . . . . . . . . d e e e e e e e e e e e e e e e e 
. . . . . . . . . . . . . . d e e e e e e e e e 7 e e e e e e e 
. . . . . . . . . . . . . d e e e e e e e 7 7 7 7 e e e e 7 e e 
. . . . . . . . . . . . d e e e e e e e 7 7 7 7 7 e e e e 7 e e 
. . . . . . . . . . . d e e e e e e 7 7 7 7 7 e 7 e e e 7 7 e e 
. . . . . . . . . . d e e e e e e e 7 7 7 7 e e 7 e e e 7 e e e 
. . . . . . . . . 7 e e e e e e e 7 7 7 7 7 e e e e e 7 7 7 e e 
. . . . . . . . 7 7 e e e e e e 7 7 7 7 e e e 7 e e e 7 7 7 e e 
. . . . . . . 7 7 e e e e e e 7 7 7 7 e e e 7 e e e 7 7 7 7 e e 
. . . . . . 7 7 e e e e e e e 7 7 7 e e e 7 e e e 7 7 7 7 e e e 
. . . . . 7 7 e e e e e e e e 7 e e e e 7 7 e e 7 7 7 e e e e e 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 e e e 7 e 7 e e e e e e e e e e 
. . . 7 7 e e e e e e e e e e e e e e 7 7 7 e e e e e e e e e e 
. . 7 7 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
. 7 7 e e e e e 7 7 7 7 7 7 7 e e e e e e e e e e e e e e e e e 
7 7 7 7 e 7 e 7 7 e e e e e e e e e e e e e e e e e e e e e e e 
`, SpriteKind.Mountain)
mountain.setPosition(scene.screenWidth() - mountain.width / 2, scene.screenHeight() - mountain.height / 2)

// :end-solution
```