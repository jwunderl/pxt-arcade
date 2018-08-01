# Activity: Sprite Physics


In this activity, student will be introduced to:
* ``||sprites:projectile||`` sprites
* ``||game:on game update every||``
* ``||math:pick random||``

## Velocity

## Example 1: Change in location vs Velocity

## Acceleration

## Example 2: Change in Velocity vs Acceleration

## Student Task 1: Water balloons
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
    for (let index = 0; index <= 50; index++) {
        xDirection = Math.randomRange(0, 100) - 50
        yDirection = Math.randomRange(0, 100) - 50
        projectile = sprites.createProjectile(img`
9
`, xDirection, yDirection, SpriteKind.Splash, sprite)
        projectile.setFlag(SpriteFlag.Ghost, true)
        projectile.ay = 40
    }
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


## What did we learn?  ## TODO at least one more question

1. Why does making a sprite have a random velocity in both the x and y directions cause the sprite to move in a random direction? How would limiting the projectile to only positive directions change this?
2. In examples #1 and #2, you likely noticed that the values were fluctuating more quickly for ``||variables:first||`` than for ``||variables:second||``, even though they were both increasing at the same rate on a second-by-second basis. Make a hypothesis on why that is.
3. **Challenge:** Did either race (example #1 or example #2) have a clear winner? Make a hypothesis on why this might be, even if the rate of change is the same on a second-by-second basis.

## TODO RUBRICS