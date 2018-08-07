# Activity: Using the Corgi Extensions

## Using the corgio package

## Student Task #1: Making your first corgio

### Standard:

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = null
myCorg = corgi.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.verticalMovement()
```

### Challenge:

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myCorg.bark()
})
myCorg = corgi.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.addToScript("hello")
myCorg.addToScript("goodbye")
myCorg.addToScript("jump")
myCorg.addToScript("sit")
```

## Example #1: Corgi with tilemap

## Student Task #2: Creating a side scroller

```
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = null
myCorg = corgi.create(SpriteKind.Player)
scene.setTileMap(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
f f f f f f f f f f f f f f f f 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
f f f f f f f f f f f f f f f f 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(2, img`
d d d d d d d d d d d d d d d d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d d d d d d d d d d d d d d d d 
`, true)
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.follow()
```