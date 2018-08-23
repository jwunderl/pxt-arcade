# Activity: Arrays Project


## Example #1: Enemy Following

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let enemy: Sprite = null
let player: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    sprite.say("ow", 100)
})
scene.setTileMap(img`
f f f f f f f f f f 
f 1 1 1 1 1 1 1 1 f 
f 1 1 f 1 1 1 f 1 f 
f 1 1 1 1 1 f 1 1 f 
f 1 1 1 f 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f 
`)
scene.setTile(15, img`
e e e e e e e e e e e e e f e e 
e e e e e e e e e e e e e f e e 
e e e e e e e e e e e e e f e e 
e e e e e e e e e e e e e f e e 
f f f f f f f f f f f f f f f f 
e e e e f e e e e e e e e e e e 
e e e e f e e e e e e e e e e e 
e e e e f e e e e e e e e e e e 
e e e e f e e e e e e e e e e e 
e e e e f e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e f e e e e e e e 
e e e e e e e e f e e e e e e e 
e e e e e e e e f e e e e e e e 
e e e e e e e e f e e e e e e e 
f f f f f f f f f f f f f f f f 
`, true)
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 8 8 8 . . . . . 
. . . . . . . 8 . . 8 . . . . . 
. . . . . . . 8 . . 8 . . . . . 
. . . . . . . 8 8 8 8 . . . . . 
. . . . . . . . . 8 . . . . . . 
. . . . . . . . . 8 . . . . . . 
. . . . . . . 8 8 8 8 8 . . . . 
. . . . . . . . . 8 . . . . . . 
. . . . . . . . 8 . 8 . . . . . 
. . . . . . . 8 . . . 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.getTile(1, 1).place(player)
controller.controlSprite(player, 100, 100)
for (let i = 0; i < 10; i++) {
    enemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    enemy.setPosition(Math.randomRange(32, 144), Math.randomRange(32, 112))
}
info.startCountdown(15)
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (player.x < value.x) {
            value.vx = -3
        } else {
            value.vx = 3
        }
        if (player.y < value.y) {
            value.vy = -3
        } else {
            value.vy = 3
        }
    }
    info.changeScoreBy(1)
})
```


## Challenge: Boolean Arrays

```
enum SpriteKind {
    Player,
    Enemy,
    FirstKey,
    SecondKey,
    ThirdKey,
    Door
}
let exit: Sprite = null
let thirdKey: Sprite = null
let secondKey: Sprite = null
let firstKey: Sprite = null
let player: Sprite = null
let keysObtained: boolean[] = []
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.FirstKey, function (sprite, otherSprite) {
    keysObtained[0] = true
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SecondKey, function (sprite, otherSprite) {
    keysObtained[1] = true
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ThirdKey, function (sprite, otherSprite) {
    keysObtained[2] = true
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    if (keysObtained[0] && keysObtained[1] && keysObtained[2]) {
        music.playSound(music.sounds(Sounds.PowerUp))
        pause(250)
        sprite.destroy()
        pause(250)
        game.over(true)
    } else {
        otherSprite.say("You need to get the keys!", 250)
    }
})
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 f f f f f f f f 1 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . 7 . . 7 . . 7 . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.getTile(1, 1).place(player)
controller.controlSprite(player, 100, 100)
scene.cameraFollowSprite(player)
firstKey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . . 3 . . 3 . . . . . . . 
. . . . . 3 . . 3 . . . . . . . 
. . . . . 3 3 3 3 . . . . . . . 
. . . . . . 3 3 . . . . . . . . 
. . . . . . 3 3 . . . . . . . . 
. . . . . 3 3 3 . . . . . . . . 
. . . . . . 3 3 . . . . . . . . 
. . . . 3 3 3 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.FirstKey)
scene.getTile(1, 6).place(firstKey)
secondKey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 . . 5 . . . . . . . 
. . . . . 5 . . 5 . . . . . . . 
. . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 . . . . . . . . 
. . . . . . 5 5 . . . . . . . . 
. . . . . 5 5 5 . . . . . . . . 
. . . . . . 5 5 . . . . . . . . 
. . . . 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.SecondKey)
scene.getTile(5, 5).place(secondKey)
thirdKey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . . 4 . . 4 . . . . . . . 
. . . . . 4 . . 4 . . . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . . . 4 4 4 . . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . . 4 4 4 4 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.ThirdKey)
scene.getTile(26, 1).place(thirdKey)
keysObtained = [false, false, false]
exit = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e 5 5 e e e e e e . . . 
. . . . e 5 e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e 4 4 e e e e e e . . . 
. . . . e 4 e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e 3 3 e e e e e e . . . 
. . . . e 3 e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
`, SpriteKind.Door)
scene.getTile(5, 3).place(exit)
```