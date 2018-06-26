# Basic motion

## Drone Crash:
    https://makecode.com/_dALdVA19C3ed

## Mini lessons:
### make camera follow in only x axis:
```blocks
game.onUpdate(function () {
    scene.centerCameraAt(user.x - scene.screenWidth() / 2, 15)
})
```
### Make character bounce up and down a bit for impression of movement:
```blocks
game.onUpdateInterval(500, function () {
    user.y += change
    change = change * -1
})
```
### Make shocked / dizzy
```blocks
user.vx = -8
projectile = sprites.createProjectile(img`
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
`, -16, -25, SpriteKind.Player, user)
pause(250)
user.vx = 0
pause(250)
projectile.destroy()
```

## Wall collision / stumble:
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let change = 0
let user: Sprite = null
scene.onCollision(SpriteType.Player, 11, function (user) {
    user.vx = -8
    projectile = sprites.createProjectile(img`
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
`, -16, -25, SpriteKind.Player, user)
    pause(250)
    user.vx = 0
    pause(250)
    projectile.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    user.vx = 20
})
change = 1
scene.setBackgroundColor(1)
user = sprites.create(img`
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
user.setFlag(SpriteFlag.Ghost, false)
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
user.y += 56
game.onUpdateInterval(500, function () {
    user.y += change
    change = change * -1
})
game.onUpdate(function () {
    scene.centerCameraAt(user.x - scene.screenWidth() / 2, 15)  // TODO:Change this when center gets fixed
})

```