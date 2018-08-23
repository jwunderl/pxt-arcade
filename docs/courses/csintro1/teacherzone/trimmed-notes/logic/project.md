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