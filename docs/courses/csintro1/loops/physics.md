# Activity: Sprite Physics

Up to this point, we have generally glossed over the exact details of how sprite motion works. In this activity, students will gain a greater understanding of how exactly a sprite's velocity and acceleration actually affects their behavior in a game.

In this activity, student will be introduced to:
* ``||sprites:projectile||`` sprites
* ``||game:on game update every||``
* ``||math:pick random||``
* ``||sprites:vx||`` and ``||sprites:vy||``
* ``||sprites:ax||`` and ``||sprites:ay||``


## Velocity

Velocity is defined as the speed of something in a given direction; that is, the rate at which it's position changes, and the direction the position is changing in. In real life, you can think of this like being in a car; the speed on a highway may be 60 miles per hour, but the velocity would be 60 miles per hour going north. What this means is that, over the course of an hour at this rate, you will be 60 miles further north than you are currently.

In MakeCode Arcade, a sprite's velocity is measured in pixels per second, and stored as a sprite's ``||sprites:vx||`` and ``||sprites:vy||``. A sprite's ``||sprites:vx||`` represents the sprite's velocity on the horizontal axis - that is, how quickly the sprite's ``||sprites:x||`` value is changing in value. A sprite's ``||sprites:vy||``, on the other hand, represents the sprite's velocity in the vertical axis - how quickly the sprite's ``||sprites:y||`` changes in value.

## Example #1: Change in location vs Velocity

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Race 1")
4. Notice how the behavior for the two sprites is similar, and how it is different.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let second: Sprite = null
let first: Sprite = null
first = sprites.create(img`
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . 2 . . . . . . 
`, SpriteKind.Player)
second = sprites.create(img`
. . . . . . . . . 9 . . . . . . 
. . . . . . . . . . 9 . . . . . 
. . 9 9 9 9 9 9 9 9 9 9 . . . . 
. . . . . . . . . . 9 . . . . . 
. . . . . . . . . 9 . . . . . . 
`, SpriteKind.Player)
first.x += -80
second.x += -80
first.y += -10
second.y += 10
first.vx = 30

game.onUpdateInterval(1000, function () {
    second.x += 30
})

game.onUpdate(function () {
    first.say("x: " + Math.ceil(first.x))
    second.say("x: " + second.x)
})
```

## Acceleration

Acceleration represents the rate of change in velocity. This makes the relationship between acceleration and velocity the same as the relationship between velocity and position; velocity is the rate at which position is changing, and acceleration is the rate at which velocity is changing.

In MakeCode Arcade, a sprite's acceleration is defined in terms of pixels per second, per second.

## Example #2: Change in Velocity vs Acceleration

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Race 2")
4. Notice how the behavior for the two sprites is similar, and how it is different.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let second: Sprite = null
let first: Sprite = null
first = sprites.create(img`
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . 2 . . . . . . 
`, SpriteKind.Player)
second = sprites.create(img`
. . . . . . . . . 9 . . . . . . 
. . . . . . . . . . 9 . . . . . 
. . 9 9 9 9 9 9 9 9 9 9 . . . . 
. . . . . . . . . . 9 . . . . . 
. . . . . . . . . 9 . . . . . . 
`, SpriteKind.Player)
first.x += -80
second.x += -80
first.y += -10
second.y += 10
first.ax = 5
second.vx = -5

game.onUpdateInterval(1000, function () {
    second.vx += 5
})


game.onUpdate(function () {
    first.say("vx: " + Math.ceil(first.vx))
    second.say("vx: " + second.vx)
})
```

## Student Task #1: Water balloons

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "water balloon")
4. Currently, when the balloon collides with the block, it creates only a single drop of a splash. Use a loop in the overlap event between sprites of kind Balloon and sprites of kind Enemy to create 50 drops of kind ``||sprites:Splash||`` instead
5. **Challenge:** Set the acceleration for every splash of water emitted from the balloon to be 40, so that the splashes will accelerate downwards at the same rate the balloon did

### ~hint

In total, this loop should include 4 blocks - the generation of a random xDirection and yDirection, the creation of the projectile, and the block that sets the projectiles ghost flag to be on.

### ~

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Balloon,
    Splash
}
let projectile: Sprite = null
let yDirection = 0
let xDirection = 0
let balloon: Sprite = null
let block: Sprite = null
sprites.onOverlap(SpriteKind.Balloon, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)

    // pick a random speed between -50 and 50 for the splash to go in both directions
    xDirection = Math.randomRange(0, 100) - 50
    yDirection = Math.randomRange(0, 100) - 50
    // create the splash
    projectile = sprites.createProjectile(img`
9
`, xDirection, yDirection, SpriteKind.Splash, sprite)
    // make the splash a ghost, so that it doesn't interact with other sprites
    projectile.setFlag(SpriteFlag.Ghost, true)

    // destroy the balloon
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.vx = 40
    balloon.vy = -50
    balloon.ay = 40
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.destroy()
    balloon = sprites.create(img`
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . 8 9 8 8 9 9 8 9 8 . . . . 
. . 8 9 9 8 8 8 9 8 9 9 8 . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
`, SpriteKind.Balloon)
    balloon.x += -50
})
scene.setBackgroundColor(6)
block = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 1 2 2 1 1 2 2 2 1 2 1 1 2 1 f 
f 1 2 1 2 1 2 1 2 1 2 2 1 2 1 f 
f 1 2 1 2 1 2 2 2 1 2 1 2 2 1 f 
f 1 2 2 1 1 2 1 2 1 2 1 1 2 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 2 2 2 1 2 2 2 1 2 2 2 1 1 f 
f 1 2 1 1 1 2 1 1 1 2 1 2 1 1 f 
f 1 2 1 2 1 2 2 1 1 2 2 2 1 1 f 
f 1 2 2 2 1 2 2 2 1 2 1 1 2 1 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
block.x += 50
balloon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . 8 9 8 8 9 9 8 9 8 . . . . 
. . 8 9 9 8 8 8 9 8 9 9 8 . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Balloon)
balloon.x += -50
```

## What did we learn? ## TODO at least one more question

1. Why does making a sprite have a random velocity in both the x and y directions cause the sprite to move in a random direction? How would limiting the projectile to only positive directions change this?
2. In examples #1 and #2, you likely noticed that the values were fluctuating more quickly for ``||variables:first||`` than for ``||variables:second||``, even though they were both increasing at the same rate on a second-by-second basis. Make a hypothesis on why that is.
3. **Challenge:** Did either race (example #1 or example #2) have a clear winner? Make a hypothesis on why this might be, even if the rate of change is the same on a second-by-second basis.