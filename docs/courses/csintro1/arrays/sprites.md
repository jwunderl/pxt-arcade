## TODO: make activity using this and others

## This requires latest commits (my spritesOfKind implementation); if running, either serve locally or wait for pxt-common-packages bump

```blocks
enum SpriteKind {
    Player,
    Enemy,
    WindMill,
    Fan
}
let curve: Image = null
let fan: Sprite = null
let curr: Sprite[] = []
let straight: Image = null
sprites.onCreated(SpriteKind.WindMill, function (sprite) {
    fan = sprites.create(straight, SpriteKind.Fan)
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    sprite.setImage(img`
. . . . . e e e e . . . . . . . 
. . . . e e e e e . . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . e e f f e e . . . . . . 
. . . . e e e f f e e . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e . . . . . 
. . . e e f e e e e e e . . . . 
. . . e e f e e e f e e . . . . 
. . . e e f e e e e e e e . . . 
. . . e e f e e e e e e e . . . 
. . e e e f e e e e f e e e . . 
. . e e e f e e e e f e e e . . 
. . e e e e e e e e f e e e e . 
. e e e e e e e e e e e e e e . 
`)
    fan.z = 1
    sprite.z = 0
    fan.setPosition(sprite.x, sprite.y - sprite.height / 2)
})
straight = img`
. . . . . . . . . . . . . . . . 
. . . . . . . e 1 1 . . . . . . 
. . . . . . . e f 1 . . . . . . 
. . . . . . . e 1 1 . . . . . . 
. . . . . . . e f 1 . . . . . . 
. 1 1 1 1 1 . e 1 1 . . . . . . 
. 1 f 1 f 1 . e . . . . . . . . 
. e e e e e e e e e e e e e . . 
. . . . . . . e . 1 f 1 f 1 . . 
. . . . . 1 1 e . 1 1 1 1 1 . . 
. . . . . 1 f e . . . . . . . . 
. . . . . 1 1 e . . . . . . . . 
. . . . . 1 f e . . . . . . . . 
. . . . . 1 1 e . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
curve = img`
. 1 1 . . . . . . . . . . . . . 
. e f 1 . . . . . . . . . e 1 . 
. . e 1 1 . . . . . . . e f 1 . 
. . . e f 1 . . . . . e 1 1 . . 
. . . . e 1 1 . . . e f 1 . . . 
. . . . . e . . . e 1 1 . . . . 
. . . . . . e . e . 1 . . . . . 
. . . . . . . e . . . . . . . . 
. . . . 1 . e . e . . . . . . . 
. . . 1 1 e . . . e . . . . . . 
. . 1 f e . . . 1 1 e . . . . . 
. 1 1 e . . . . . 1 f e . . . . 
1 f e . . . . . . . 1 1 e . . . 
1 e . . . . . . . . . 1 f e . . 
. . . . . . . . . . . . 1 1 . . 
. . . . . . . . . . . . . . . . 
`
sprites.createEmptySprite(SpriteKind.WindMill)
sprites.createEmptySprite(SpriteKind.WindMill)
sprites.createEmptySprite(SpriteKind.WindMill)
sprites.createEmptySprite(SpriteKind.WindMill)
forever(function () {
    curr = sprites.allOfKind(SpriteKind.Fan)
    for (let value of curr) {
        value.setImage(curve)
    }
    pause(150)
    for (let value2 of curr) {
        value2.setImage(straight)
    }
    pause(150)
})
```