# Example Projects

Use at least 10 of the following
* Sprites
* Position (coordinates)
* Controller (dx) (vx)
* Overlap Events / sprite kind
* "spawn" create / on create
* Random
* Showing numbers as string
* Score / life (info)
* Timer (countdown)
* Flip
* Stay in screen / ghost
* Set image
* Function
* Sprite say
* Splash


## [Catch the cents](https://makecode.com/_2WKKYbDri5Kc)

Uses:
* Sprites
* Position
* Overlap
* Controller
* Create / on create
* Random
* Score
* Timer
* Stay in screen
* Set image

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Collectible
}
let mySprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collectible, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onCreated(SpriteKind.Collectible, function (sprite) {
    sprite.setImage(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 6 6 6 6 6 6 6 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 6 6 6 6 6 6 6 7 7 7 6 
6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`)
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    sprite.setFlag(SpriteFlag.StayInScreen, true)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 . . . . . . . 5 . . . . 
. . . 5 . 5 . . 5 . . 5 . . . . 
. . . 5 . . . . . . . 5 . . . . 
. . . 5 . 5 5 5 5 . . 5 . . . . 
. . . 5 . . . . . . . 5 . . . . 
. . . 5 . . . . . . . 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
mySprite.setPosition(30, 30)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    sprites.createEmptySprite(SpriteKind.Collectible)
})
```