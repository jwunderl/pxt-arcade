# Activity: Logic Project

## Example Game #1: Collection Message

```
enum SpriteKind {
    Player,
    Enemy,
    Collectible
}
let projectile: Sprite = null
let value = false
let player: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collectible, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 . . . . . . 
. . . . . . 7 7 . 7 7 . . . . . 
. . . . . . 7 . . 7 7 . . . . . 
. . . . . 7 . . . . 7 . . . . . 
. . . . . 7 . . . 7 7 . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 9 9 9 . . . . 
. . . . . . . . 9 9 . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . 9 9 . . . . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . . . . 9 9 9 . . . . . 
. . . . . . . . . . 9 . . . . . 
. . . . . . . . . . 9 9 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -30, 0, SpriteKind.Collectible)
    projectile.y = Math.randomRange(0, scene.screenHeight())
})
game.onUpdate(function () {
    value = info.score() >= 10
    if (value) {
        player.say("Good job!")
    } else {
        player.say("Not yet")
    }
})
```

## Example game #2: life based scoring, continue playing

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Fire,
    Coin
}
let projectile: Sprite = null
let fire: Sprite = null
let player: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
info.onLifeZero(function () {
    if (game.ask("Do you want to keep playing?")) {
        info.changeLifeBy(3)
    } else {
        game.over()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fire, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    if (info.life() <= 2) {
        sprite.say("You're low on health!", 2000)
        info.changeScoreBy(5)
    } else {
        info.changeScoreBy(1)
    }
    otherSprite.destroy()
})
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . a a a a a . . . . . 
. . . . . a a . . . a a . . . . 
. . . . . a . . . . a . . . . . 
. . . . . a . . . . a . . . . . 
. . . . . a a . . a a . . . . . 
. . . . . . a a a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . a a a a . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . a a a . . . . . . . 
. . . . . a a a a a . . . . . . 
. . . . . a . . . a a . . . . . 
. . . . a . . . . . a . . . . . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
info.setLife(5)
game.onUpdateInterval(750, function () {
    fire = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 . 2 2 . . . . 
. . . . . . . . 2 2 2 2 . . . . 
. . . . 2 . . 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 4 5 4 4 2 . . . 
. . . . 2 4 2 4 4 5 4 4 2 . . . 
. . . . 2 4 2 2 4 5 5 4 2 . . . 
. . . 2 4 2 2 2 4 5 4 4 2 . . . 
. . . 2 2 4 2 4 4 5 4 2 2 . . . 
. . . 2 4 4 2 4 5 4 2 2 . . . . 
. . . 2 2 4 2 4 4 2 2 . . . . . 
. . . . 2 4 2 2 2 2 . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Fire)
    fire.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    fire.lifespan = 2000
})
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 . . . . . . . 
. . . 5 5 4 4 4 5 5 5 . . . . . 
. . . 5 4 4 5 4 4 4 5 . . . . . 
. . . 5 4 4 5 4 4 4 5 5 . . . . 
. . . 5 4 4 5 4 4 4 4 5 . . . . 
. . . 5 4 4 5 4 4 4 5 5 . . . . 
. . . 5 5 4 4 4 4 4 5 . . . . . 
. . . . 5 5 5 4 4 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50), SpriteKind.Coin)
})
```