# Projectile Motion

## Import the Corgi
TODO: Show how to do this

## Alien Motion
Make the alien move faster as the score gets higher, and turn around before it hits the edge of the screen. We don't want to let the alien get too fast, so we chose a value to assign to the rate (taking the square root of current score) so that it doesn't become too hard too fast.
```blocks
game.onUpdate(function () {
    rate = Math.sqrt(info.score()) * 3 + 20
    if (alien.x <= 6) {
        dir = 1
    } else if (alien.x >= screen.width - 6) {
        dir = -1
    }
    alien.vx = dir * rate
})
```

## Create a projectile
Make the alien drop arrows toward the ground, with an 8 percent chance to create one every 50 milliseconds.

```blocks
game.onUpdateInterval(50, function () {
    if (Math.percentChance(8)) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . 7 5 5 e 7 e 5 5 7 . . . . 
. . . . 7 e 5 7 5 e 7 . . . . . 
. . . . . 7 5 7 5 7 . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 15, SpriteKind.Arrow, alien)
    }
})
```

## Make projectiles faster as game goes on
The changes here make it so the values that when the arrows spawn, they go at least
as fast as the alien currently is going, plus a chance to go a bit faster to mix it up.
We'll also add in the code to change the score on each update, so that the score (and speed
of the enemies) goes up as time goes on.

```blocks
game.onUpdateInterval(50, function () {
    if (Math.percentChance(8)) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . 7 5 5 e 7 e 5 5 7 . . . . 
. . . . 7 e 5 7 5 e 7 . . . . . 
. . . . . 7 5 7 5 7 . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, rate + Math.randomRange(0, 15), SpriteKind.Arrow, alien)
    }
    info.changeScoreBy(1)
})
```

## Finished Game
```blocks
enum SpriteKind {
    Player,
    Enemy,
    Arrow
}
let dir: number = 0
let alien: Sprite = null
let projectile: Sprite = null
let rate: number = 0
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Player, function (sprite, otherSprite) {
    game.over()
})
info.setScore(0)
scene.setBackgroundColor(11)
alien = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 2 2 f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 7 7 7 7 7 7 f . . . . 
. . . f 7 7 7 f f 7 7 7 f . . . 
. . . . f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
alien.setPosition(10, 4)
alien.vx = 20
rate = 20
dir = 1
game.onUpdate(function () {
    rate = Math.sqrt(info.score()) * 3 + 20
    if (alien.x <= 6) {
        dir = 1
    } else if (alien.x >= screen.width - 6) {
        dir = -1
    }
    alien.vx = dir * rate
})

corgi.horizontalMovement()
corgi.verticalMovement()
corgi.updateSprite()

game.onUpdateInterval(50, function () {
    if (Math.percentChance(8)) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . 7 5 5 e 7 e 5 5 7 . . . . 
. . . . 7 e 5 7 5 e 7 . . . . . 
. . . . . 7 5 7 5 7 . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, rate + Math.randomRange(0, 15), SpriteKind.Arrow, alien)
    }
    info.changeScoreBy(1)
})
```