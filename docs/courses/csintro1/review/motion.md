# Basic motion

## Drone Crash:
    
https://makecode.com/_dALdVA19C3ed

## Mini lessons:

### make camera follow in only x axis:

```block
let mySprite: Sprite = null
game.onUpdate(function () {
    scene.centerCameraAt((mySprite.x - scene.screenWidth()) / 2, 15)
})
```
### Make character bounce up and down a bit for impression of movement:

```block
let mySprite: Sprite = null
let change = 0;
game.onUpdateInterval(500, function () {
    mySprite.y += change
    change = change * -1
})
```
### Make shocked / dizzy

```block
enum SpriteKind {
    Player,
    Enemy,
    Dizzy
}
scene.onHitTile(SpriteKind.Player, 11, function (mySprite) {
    mySprite.vx = -8
    let projectile = sprites.createProjectile(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e e . . . . 
        . . . . . e e . . . e e . . . . 
        . . . . e . . . . e e . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . . e . e e e e e . . . . 
        . . . . . . e e . . . e . . . . 
        . . . . . . e . e e e e . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . . . e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -16, -25, SpriteKind.Dizzy, mySprite)
    pause(250)
    mySprite.vx = 0
    pause(250)
    projectile.destroy()
})```

## Wall collision / stumble:

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Dizzy
}
let projectile: Sprite = null
let change = 0
let mySprite: Sprite = null
scene.onHitTile(SpriteKind.Player, 11, function (mySprite) {
    mySprite.vx = -8
    let projectile = sprites.createProjectile(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e e . . . . 
        . . . . . e e . . . e e . . . . 
        . . . . e . . . . e e . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . . e . e e e e e . . . . 
        . . . . . . e e . . . e . . . . 
        . . . . . . e . e e e e . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . . . e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -16, -25, SpriteKind.Dizzy, mySprite)
    pause(250)
    mySprite.vx = 0
    pause(250)
    projectile.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 20
})
change = 1
scene.setBackgroundColor(1)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f f f f . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . f . f . . . . . 
. . . . . . . f . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.Ghost, false)
scene.setTileMap(img`
. . . . . . . . . . . . . . . b 
. . . . . . . . . . . . . . . b 
. . . . . . . . . . . . . . . b 
. . . . . . . . . . . . . . . b 
. . . . . . . . . . . . . . . b 
. . . . . . . . . . . . . . . b 
. . . . . . . . . . . . . . . b 
. 1 . 1 . . 1 . 1 1 . . 1 . . b 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(11, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f a a a a a a a a a a f f f 
f f f a a a a a a a a a a f f f 
f f f a a a a a a a a a a f f f 
f f f a a a a a a a a a a f f f 
f f f a a a a a a a a a a f f f 
f f f a a a a a a a a a a f f f 
f f f a a a a a a a a a a f f f 
f f f a a a a a a a a a a f f f 
f f f a a a a a a a a a a f f f 
f f f a a a a a a a a a a f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(1, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
6 6 6 6 6 1 6 6 6 6 6 7 7 6 6 1 
6 8 6 8 6 1 7 7 8 8 6 6 7 8 6 6 
6 7 8 7 8 8 8 8 7 7 7 7 7 8 8 6 
6 8 7 8 6 8 7 8 7 8 7 8 8 8 7 7 
8 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 
`)
mySprite.y += 56
game.onUpdateInterval(500, function () {
    mySprite.y += change
    change = change * -1
})
game.onUpdate(function () {
    scene.centerCameraAt(mySprite.x, 15)
})

```