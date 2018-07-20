# Simple Baseball Catching Game

## Provided Starter Code:

## Student Task 1
```blocks
enum SpriteKind {
    Player,
    Enemy,
    Ball
}
let ball: Sprite = null
let mitt: Sprite = null
mitt = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e f e f e f e . . . . . 
. . . . e f e f e f e f e . . . 
. . . . e f e f e f e f e . . . 
. . . . e f e f e f e f e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e f f f f f e e . . . 
. . . . e e e e e e e e e . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mitt, 100, 100)
mitt.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(20)
game.onUpdateInterval(500, function () {
    ball = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . 2 1 1 1 1 1 2 . . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . 1 1 1 1 2 1 2 1 1 1 1 . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . . 2 1 1 1 1 1 2 . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-75, 75), Math.randomRange(-75, 75), SpriteKind.Ball)
})
```

## Student Task 2
```blocks
enum SpriteKind {
    Player,
    Enemy,
    Ball
}
let ball: Sprite = null
let mitt: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
mitt = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e f e f e f e . . . . . 
. . . . e f e f e f e f e . . . 
. . . . e f e f e f e f e . . . 
. . . . e f e f e f e f e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e f f f f f e e . . . 
. . . . e e e e e e e e e . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mitt, 100, 100)
mitt.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(20)
game.onUpdateInterval(500, function () {
    ball = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . 2 1 1 1 1 1 2 . . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . 1 1 1 1 2 1 2 1 1 1 1 . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . . 2 1 1 1 1 1 2 . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-75, 75), Math.randomRange(-75, 75), SpriteKind.Ball)
})
```

## Student Task 3
```blocks
enum SpriteKind {
    Player,
    Enemy,
    Ball
}
let ball: Sprite = null
let mitt: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.playSound(music.sounds(Sounds.PowerUp))
    sprite.y += -5
    pause(150)
    sprite.y += 5
})
mitt = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e f e f e f e . . . . . 
. . . . e f e f e f e f e . . . 
. . . . e f e f e f e f e . . . 
. . . . e f e f e f e f e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e f f f f f e e . . . 
. . . . e e e e e e e e e . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mitt, 100, 100)
mitt.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(20)
game.onUpdateInterval(500, function () {
    ball = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . 2 1 1 1 1 1 2 . . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . 1 1 1 1 2 1 2 1 1 1 1 . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . . 2 1 1 1 1 1 2 . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-75, 75), Math.randomRange(-75, 75), SpriteKind.Ball)
})
```