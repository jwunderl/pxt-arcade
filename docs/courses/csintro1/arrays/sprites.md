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


### TODO refactor to be easier to understand for blocks (change if (origin) to wrap the entire thing, store sprites.allOfKind(SpriteKind.firework), and check size before pick random))

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Firework
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    let origin: Sprite = Math.pickRandom(sprites.allOfKind(SpriteKind.Firework))
    if (origin) {
        for (let i = 0; i < 30; i++) {
            let projectile: Sprite = sprites.createProjectile(img`1`, Math.randomRange(-100, 100), Math.randomRange(-100, 100), SpriteKind.Player, origin)
            projectile.setFlag(SpriteFlag.Ghost, true)
            projectile.image.fill(Math.randomRange(1, 14))
        }
        origin.destroy()
    }
})

for (let i = 0; i < 100; i++) {
    let firework: Sprite = sprites.create(img`.`, SpriteKind.Firework)
    firework.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    firework.setFlag(SpriteFlag.Ghost, true)
}
```

### TODO: make as clear as possible in blocks, replace ternary

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let enemy: Sprite = null
let player: Sprite = null
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.x += Math.randomRange(-2, 2)
    otherSprite.y += Math.randomRange(-2, 2)
})
player = sprites.create(img`
1 . . . 1 
1 . . . 1 
. . . . . 
. . . . . 
1 . . . 1 
. 1 1 1 . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
for (let i = 0; i < 50; i++) {
    enemy = sprites.create(img`
2 . . 2 
. . . . 
. 2 2 . 
2 . . 2 
`, SpriteKind.Enemy)
    enemy.x += Math.randomRange(-40, 40)
    enemy.y += Math.randomRange(-40, 40)
}
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.x += player.x > value.x ? .25 : -.25
        value.y += player.y > value.y ? .25 : -.25
    }
})

```