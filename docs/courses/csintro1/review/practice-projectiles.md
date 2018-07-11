# Practice 1: Shooting Stars

1. On every 500 ms game update, make a new projectile with a star sprite.  Set both its x and y velocities to be a random number from range -50 to 50.  
2. Run it! The stars should come from all 4 corners and have random speeds.

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . . 5 5 . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 . 5 5 5 5 5 . . . 
. . . 5 5 5 . . . . 5 5 5 . . . 
. . 5 5 5 . . . . . . 5 5 5 . . 
. . 5 5 . . . . . . . . 5 5 . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
}, SpriteKind.Player)
// :end-solution
```

# Practice 2: Plants vs Blocks

1. Make a sprite of some plant or flower.
2. On up button press, make a projectile (any sprite) whose vx (horizontal velocity) is 0, but vy (vertical velocity) is -50. Also make it so that this projectile starts from your plant sprite at the center of the screen. Test this out to make sure it works. 
3. On each of the remaining arrow key button presses (down, left, and right) make a projectile start from the plant in the center of our screen and shoot it in the direction of the arrow key pressed. 
4. Add a timer so the game last 30 seconds


```blocks
// :solution

enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let sprite: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, -50, 0, SpriteKind.Player, sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 50, 0, SpriteKind.Player, sprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 0, 50, SpriteKind.Player, sprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 0, -50, SpriteKind.Player, sprite)
})
sprite = sprites.create(img`
. . . 5 5 5 . . . . 5 5 . . . . 
. . . 5 5 5 5 . 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 e 5 5 5 5 5 5 . . 
. 5 5 5 5 5 e e e 5 5 5 5 5 . . 
. 5 5 5 5 e e e e e 5 5 5 5 . . 
. . . 5 5 5 e e e 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 . 7 5 5 5 5 . . . . 
. . . . . . . 7 . 5 5 5 . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . 7 7 7 7 7 . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(30)
// :end-solution
```

Challenge:
1. Make a target sprite that stays in center of a wall randomly. It should stay there for 1 second (use the 'on game update 1 sec' block) before figuring out the next wall to randomly jump to.  
2. When projectiles overlap with the target, change the score by one. You will want ``||Sprites:on sprite of kind overlaps||`` blocks. This means you must make the projectiles of a certain type and your target sprite of another type. Don't forget to destroy the target. 

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy,
    fireball
}
let target: Sprite = null
let side = 0
let projectile: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.fireball, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 50, 0, SpriteKind.fireball, sprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, -50, 0, SpriteKind.fireball, sprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 0, 50, SpriteKind.fireball, sprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 0, -50, SpriteKind.fireball, sprite)
})
info.setScore(0)
sprite = sprites.create(img`
. . . 5 5 5 . . . . 5 5 . . . . 
. . . 5 5 5 5 . 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 e 5 5 5 5 5 5 . . 
. 5 5 5 5 5 e e e 5 5 5 5 5 . . 
. 5 5 5 5 e e e e e 5 5 5 5 . . 
. . . 5 5 5 e e e 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 . 7 5 5 5 5 . . . . 
. . . . . . . 7 . 5 5 5 . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . 7 7 7 7 7 . . . . . . . 
`, SpriteKind.Player)
target = sprites.create(img`
. . . . . 2 2 2 2 2 . . . . . . 
. . 2 2 2 1 1 1 1 2 2 2 . . . . 
. . 2 1 1 1 1 1 1 1 1 2 2 2 . . 
. 2 1 1 2 2 2 2 2 1 1 1 1 2 2 2 
2 2 1 2 2 1 1 1 1 2 2 1 1 1 1 2 
2 1 1 2 1 2 2 2 1 1 2 2 1 1 1 2 
2 1 1 2 1 2 1 2 2 1 1 2 1 1 1 2 
2 1 1 2 1 2 1 1 2 2 1 2 2 1 1 2 
2 1 1 2 1 2 1 2 1 2 1 1 2 1 1 2 
2 1 1 2 1 2 2 1 1 2 1 1 2 1 1 2 
2 1 1 2 2 1 2 2 2 2 1 2 2 1 1 2 
2 1 1 1 2 2 1 1 1 1 2 2 1 1 1 2 
. 2 2 1 1 2 2 2 2 2 2 1 1 1 1 2 
. . 2 2 1 1 1 1 1 1 1 1 1 2 2 2 
. . . 2 2 1 1 1 1 1 1 2 2 2 . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
`, SpriteKind.Enemy)
target.setPosition(80, 8)
info.startCountdown(30)
game.onUpdateInterval(__internal.__timePicker(1000), function () {
    side = Math.randomRange(0, 3)
    if (side == 0) {
        target.setPosition(80, 8)
    } else if (side == 1) {
        target.setPosition(152, 64)
    } else if (side == 2) {
        target.setPosition(80, 120)
    } else {
        target.setPosition(8, 64)
    }
})

// :end-solution
```