# Making and Using Extensions

## Using Shared Code

## Example #1: Using a package

## Student Task #1:  Build an Obstacle Course

### Standard:

https://makecode.com/_YRsTvUU7bU6j

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Soccer_Ball,
    Goal,
    Obstacle
}
let princess3: Sprite = null
let princess2: Sprite = null
let princess1: Sprite = null
let net: Sprite = null
let myDart: Dart = null
let otherSprite: Sprite = null
let sprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Soccer_Ball, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Soccer_Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("Goal!")
})
myDart = Darts.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . e e e . . . . 
. . . . . . e e e e d e e . . . 
. . . . . e e d d d d d e e . . 
. . . . e e d d d d d d d e . . 
. . . . e d d d d d d d d e . . 
. . . e e d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e e e d d d d d e e e . . 
. . . . . e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Soccer_Ball)
myDart.setTrace()
myDart.controlWithArrowKeys()
net = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . 
`, SpriteKind.Goal)
net.setPosition(150, 110)
princess1 = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Obstacle)
princess1.setPosition(100, 100)
princess2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f 5 3 3 d d f f f . . 
. . . . . f 3 3 3 f d d f . . . 
. . . . . . f 3 5 f f f . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . . f f f f f . . . . . 
`, SpriteKind.Obstacle)
princess2.setPosition(140, 60)
princess3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 6 6 6 6 6 6 f . . . . 
. . . f 6 1 1 1 6 1 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . f f 6 6 6 6 6 6 6 6 f f . . 
. f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
. . f f f 5 f f f f 3 f f f . . 
. . . f d d 3 3 3 3 f d f . . . 
. . . f d d f 3 3 5 3 f . . . . 
. . . . f f 3 5 5 3 3 f . . . . 
. . . . . . f f 3 3 f f . . . . 
. . . . . . . . f f . . . . . . 
`, SpriteKind.Obstacle)
princess2.setPosition(140, 50)
```

### Challenge:

https://makecode.com/_e8eUJ3MHkHTz

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Soccer_Ball,
    Goal,
    Obstacle
}
let princess3: Sprite = null
let princess2: Sprite = null
let princess1: Sprite = null
let net: Sprite = null
let myDart: Dart = null
let otherSprite: Sprite = null
let sprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Soccer_Ball, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.over(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.stopDart()
})
sprites.onOverlap(SpriteKind.Soccer_Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("Goal!")
})
myDart = Darts.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . e e e . . . . 
. . . . . . e e e e d e e . . . 
. . . . . e e d d d d d e e . . 
. . . . e e d d d d d d d e . . 
. . . . e d d d d d d d d e . . 
. . . e e d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e e e d d d d d e e e . . 
. . . . . e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Soccer_Ball)
myDart.setTrace()
myDart.controlWithArrowKeys()
net = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . 
`, SpriteKind.Goal)
net.setPosition(150, 110)
princess1 = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Obstacle)
princess1.setPosition(100, 100)
princess2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f 5 3 3 d d f f f . . 
. . . . . f 3 3 3 f d d f . . . 
. . . . . . f 3 5 f f f . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . . f f f f f . . . . . 
`, SpriteKind.Obstacle)
princess2.setPosition(140, 60)
princess3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 6 6 6 6 6 6 f . . . . 
. . . f 6 1 1 1 6 1 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . f f 6 6 6 6 6 6 6 6 f f . . 
. f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
. . f f f 5 f f f f 3 f f f . . 
. . . f d d 3 3 3 3 f d f . . . 
. . . f d d f 3 3 5 3 f . . . . 
. . . . f f 3 5 5 3 3 f . . . . 
. . . . . . f f 3 3 f f . . . . 
. . . . . . . . f f . . . . . . 
`, SpriteKind.Obstacle)
princess2.setPosition(140, 50)
```

## Sharing Code

## Example #2: Spawn a single bird


## Student Task #2: Making the stars go by

### Standard:

https://makecode.com/_eVbAWWWHigdi

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-90, -30), 0, SpriteKind.Player)
    projectile.y = Math.randomRange(0, scene.screenHeight())
    projectile.setFlag(SpriteFlag.Ghost, true)
})
```

### Challenge:

https://makecode.com/_EqEXRp2pRbcJ

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-90, -30), 0, SpriteKind.Player)
    projectile.y = Math.randomRange(0, scene.screenHeight())
    projectile.setFlag(SpriteFlag.Ghost, true)
})
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c c c . . . . . . 
. . . . . . a b a a . . . . . . 
. . . . . c b a f c a c . . . . 
. . . . c b b b f f a c c . . . 
. . . . b b f a b b a a c . . . 
. . . . c b f f b a f c a . . . 
. . . . . c a a c b b a . . . . 
. . . . . . c c c c . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-90, -30), 0, SpriteKind.Player)
    projectile.y = Math.randomRange(0, scene.screenHeight())
    projectile.setFlag(SpriteFlag.Ghost, true)
})
```