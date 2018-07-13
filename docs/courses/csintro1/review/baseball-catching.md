# Simple Baseball Catching Game

![Final Baseball Catching Game](/static/courses/csintro1/review/final-baseball-game.gif)

## Provided Starter Code:

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

## Student Task 1

* Make the ``||variables:mitt||`` move based off the direction keys using the ``||controller:control sprite with ...||`` block.
* Force the ``||variables:mitt||`` to stay in the screen using the ``||set mitt stay in screen on||`` block.
* Add a 

```blocks
// :solution
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
// :end-solution
```

## Student Task 2

* Add an event for the overlap between the ``||variables:mitt||`` and a ``||sprites:Ball||``.
* Inside that event, destroy the ``||sprites:Ball||``, and increment the score.

```blocks
// :solution
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
// :end-solution
```

## Student Task 3

* Inside of the overlap event from Task 2, add a block so that the game plays ``||music:power up||`` each time a ball is caught.
* Add code to make the mitt "bounce" when it catches the ball. To do this, make the mitt change it's ``||sprites:y||`` value by -5, ``||loops:pause||`` for 150 ms, then change the ``||sprites:y||`` back to it's prior value (by changing it by 5).

```blocks
// :solution
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
// :end-solution
```