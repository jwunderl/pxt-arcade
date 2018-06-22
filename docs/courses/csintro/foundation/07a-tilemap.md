# Tile Map

# TODO: keep programing with functions - make this function code

## Student Task: Make a Maze 16x32, Challenge 32x48 or larger
```block
// :solution
let sprite: Sprite = null
scene.setTileMap(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 6 6 6 6 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 . 2 
2 . 2 2 6 6 6 6 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . 2 . 2 
2 . . 2 6 6 6 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 6 6 6 2 . . . . . . . . . 2 . . . 2 2 2 2 2 2 . 2 2 2 2 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . . . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . . . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 . 2 . . . 2 . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . . . . . . . . 2 . . 2 . 2 
2 2 . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . . . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 2 . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 2 . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . . . . 2 . . 2 . 2 
2 2 . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 2 . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . . . . . 2 . . . . . . . . . 2 . . . 2 . . . . 1 . . . . . 2 . . . . . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 2 . 2 . . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 . 2 
2 . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . 2 . . 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . 6 . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . . . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . 2 . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 
2 . . 2 . . . 2 . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . 2 . 2 
2 . . . . . . 2 . . . . . . . . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . 2 . 2 
2 . . 2 . . . 2 2 2 2 . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . . 2 . 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 2 2 . 2 2 2 . 2 6 6 6 2 
2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 6 6 6 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 6 6 6 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . 6 6 6 6 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`)
scene.setTile(2, img`
a f a a a a f a a a a f a a a a 
f f f f f f f f f f f f f f f f 
a a a f a a a a f a a a a f a a 
f f f f f f f f f f f f f f f f 
a f a a a a f a a a f f a a a f 
f f f f f f f f f f f f f f f f 
f a a a f a a a f a a a a f a a 
a a f a a a f f f f f a a a a f 
f f f f f f f f f f f f f f f f 
a f a a a f a a a f a a a a f a 
f f f f f f f f f f f f f f f f 
a a a f a a a a a a f a a a a a 
a a a f a a a a a a f a a a a a 
f f f f f f f f f f f f f f f f 
a a f a a a f a a f a a a f a a 
f f f f f f f f f f f f f f f f 
`, true)
sprite = sprites.create(img`
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
`)
scene.cameraFollowSprite(sprite)
game.onUpdate(function () {
    sprite.x += controller.dx()
    sprite.y += controller.dy()
})

// :end-solution
```


## Student Task: Given the following tiles, use a tile map to display the words "HELLO WORLD" on the screen

```block
let sprite: Sprite = null
scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f f f f f f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(3, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f f f f f f f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f f f f 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f f f f f f f 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(4, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f f f f f f f 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(5, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f f f f f f f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f f f f f f f 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(6, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 
1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 
1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 
1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 
1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 
1 1 1 f 1 1 1 f 1 1 1 f 1 1 1 1 
1 1 1 f 1 1 f 1 f 1 1 f 1 1 1 1 
1 1 1 f 1 f 1 1 1 f 1 f 1 1 1 1 
1 1 1 f f 1 1 1 1 1 f f 1 1 1 1 
1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(7, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 f f f f 1 1 1 1 1 1 1 
1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 f f f f f 1 1 1 1 1 1 
1 1 1 1 1 f 1 1 f 1 1 1 1 1 1 1 
1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(8, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f f f f f 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f f f f f 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . f . f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . . f . . . . . . . . . . 
. . . . . f . . . . . . . . . . 
. . . . f . f . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
game.onUpdate(function () {
    sprite.vx = controller.dx(500)
    sprite.vy = controller.dy(500)
    scene.cameraFollowSprite(sprite)
})
```

```block
// :solution
scene.setTileMap(img`
2 3 4 4 5 1 6 5 7 4 8 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 2 3 4 4 5 1 6 5 7 4 8 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
// :end-solution
```

======================================
======================================
======================================
# Activity: Tile Map

# TODO: focused lesson on building with tile map. Make obstacles (Maze) but no collisions
Tile maps allow us to design an area of play that is bigger than the screen. An Area of play with a size that is several screens is common in many "platform" adventure and role-playing games.  Using Tile maps, we will build multi-room and maze games.

In this activity students will build tile maps games with expanded area of play using:
* ||Scene: set tile map to||
* ||Scene: set tile to||
  * wall
  * decoration
* ||Scene: camera follow sprite||


### ~hint
**Teacher Note**
The first tile map example is just beyond the bare minimum tile map design, a player sprite and camera follow.  The students should focus on understanding how the tile map "pixels" translates into a fixed area of the screen. Later they will see this is 16x16 on the visible screen - the same size as a default sprite block.
### ~



## Concept: create a tile map

# TODO: Create Video 

The basic tile map example uses:  
* ||Scene: set tile map to||
* Sprite with basic game pad navigation
* ||Scene: camera follow sprite||

## Example: [Simple example 1]
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "first tile map") 
4. navigate through the tile map with the sprite

```block  

enum SpriteKind {
    Player,
    Enemy
}
let mapSprite: Sprite = null
scene.setTileMap(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 f e e e e e f 
f 2 2 2 2 2 2 2 2 f e e e e e f 
f 2 2 2 2 2 2 2 2 f e e e e e f 
f 2 2 2 2 2 2 2 2 e e e e e e f 
f 2 2 2 2 2 2 2 2 e e e e e e f 
f 2 2 f f f f f f f e e e e e f 
f c c c c c c c c f e e e e e f 
f c c c c c c c c f f f f 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`)
mapSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(mapSprite)
game.onUpdate(function () {
    mapSprite.x += controller.dx(100)
    mapSprite.y += controller.dy(100)
})

```  
## Task: expand first tile map
1. starting with the the above first tile map example 
2. edit the ||Scene:set tile map to|| image and expand the size from 16x16 to 16x32
3. design additional rooms using black for walls and other colors for the rooms
4. make a pathway open to all of the room
5. navigate the sprite to all rooms without crossing a black lines
5. Optional: design a 32x32 tile map and make a more interesting sprite

```block
// :solution

enum SpriteKind {
    Player,
    Enemy
}
let mapSprite: Sprite = null
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 f e e e e e f 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f 2 2 2 2 2 2 2 2 f e e e e e 3 3 3 3 3 5 5 5 5 5 5 5 5 5 5 5 f 
f 2 2 2 2 2 2 2 2 f e e e e e 3 3 3 3 3 5 5 5 5 5 5 5 5 5 5 5 f 
f 2 2 2 2 2 2 2 2 e e e e e e f 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f 2 2 2 2 2 2 2 2 e e e e e e f 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f 2 2 f f f f f f f e e e e e f 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f c c c c c c c c f e e e e e f 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f c c c c c c c c f f f f 7 7 f 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f c c c c c c c c f 7 7 7 7 7 f 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f c c c c c c c c f 7 7 7 7 7 f 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f c c c c c c c c f 7 7 7 7 7 f 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f c c c c c c c c f 7 7 7 7 7 3 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f c c c c c c c c f 7 7 7 7 7 3 3 3 3 3 f 5 5 5 5 5 5 5 5 5 5 f 
f c c c c c c c c f 7 7 7 7 7 f 3 3 3 3 f f f f f f f f 5 5 f f 
f f f c c f f f f f f f f f f f 3 3 3 3 f 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 3 3 3 3 3 3 3 3 3 3 3 3 f 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 3 3 3 3 3 3 3 3 3 3 3 3 f 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 3 3 3 3 3 3 3 3 3 3 3 3 f 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 3 3 3 3 3 3 3 3 3 3 3 3 f 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 3 3 3 3 3 3 3 3 3 3 3 3 6 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 3 3 3 3 3 3 3 3 3 3 3 3 6 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 3 3 3 3 3 3 3 3 3 3 3 3 f 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 3 3 3 3 3 3 3 3 3 3 3 3 f 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f f 3 3 f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 9 9 9 9 9 9 9 9 9 9 9 f 6 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 9 9 9 9 9 9 9 9 9 9 9 f 6 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 f 6 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 4 4 4 4 4 4 f 9 9 9 9 9 9 9 9 9 9 9 f 6 6 6 6 6 6 6 6 6 6 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
mapSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(mapSprite)
game.onUpdate(function () {
    mapSprite.x += controller.dx(100)
    mapSprite.y += controller.dy(100)
})

// :end-solution
```



## Concept: Set tile map tile to make obstacles

# TODO: might need a short video here 

||Scene: set tile to|| is a way to easily design obstacles such as walls, water, lava. This is also a fast way to "paint" on detail like a field of flowers, sky with clouds or a fancy flooring.

## Example: Set tile map as design and as obstacle 

1. review the code below
2. navigate the sprite to each room and bump into a few walls
3. notice which blocks become obstacles for our sprite and which are just decoration
4. save the code for the task (name it "set tile design 1") 
5. notice that this sprite moves faster

```block  
enum SpriteKind {
    Player,
    Enemy
}
let smiley: Sprite = null
scene.setTile(7, img`
6 6 6 6 6 6 6 6 6 7 7 7 7 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 
6 6 7 6 6 6 6 6 6 6 6 6 7 6 6 6 
6 7 7 6 6 6 6 6 6 6 6 6 7 7 6 6 
6 7 6 6 6 6 6 6 7 6 6 6 6 6 6 6 
6 7 6 6 6 6 7 6 7 6 6 6 6 6 6 7 
6 7 6 6 6 6 7 6 7 6 6 6 6 6 6 7 
6 6 6 6 6 6 7 7 6 6 6 6 7 6 6 7 
6 6 6 6 6 6 6 7 6 6 6 6 7 7 7 7 
6 6 6 6 6 6 6 7 6 6 6 6 6 7 7 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 
6 6 6 7 6 6 6 6 6 6 6 6 6 6 7 6 
6 6 7 7 6 6 6 6 6 6 6 6 6 6 7 6 
6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 7 6 6 6 6 6 6 6 6 7 6 6 6 6 6 
6 7 6 6 6 6 6 6 6 6 7 6 6 7 6 6 
`)
scene.setTile(15, img`
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
d d d d d d 1 d d d d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
d d d d d d 1 d d d d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
`, true)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 f e e e e e f 
f 2 2 2 2 2 2 2 2 f e e e e e f 
f 2 2 2 2 2 2 2 2 f e e e e e f 
f 2 2 2 2 2 2 2 2 e e e e e e f 
f 2 2 2 2 2 2 2 2 e e e e e e f 
f f 2 f f f f f f f e e e e e f 
f c c c c c c c c f e e e e e f 
f c c c c c c c c f f f f 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`)
smiley = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 f 5 5 5 f 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 f 5 5 5 5 5 f 5 . . . . 
. . . 5 5 f 5 5 5 f 5 5 . . . . 
. . . . 5 5 f f f 5 5 . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(smiley)
game.onUpdate(function () {
    smiley.x += controller.dx(100)
    smiley.y += controller.dy(100)
})

```  
### ~hint
note the ||Scene:set tile to|| defining the tile for black displays as a brick wall. It also has selected "wall on" to create an obstacle. The light green tile is decorative only because "wall off" is set. 
### ~

## Task: add rooms with decorations and obstacles 
1. starting with the "set tile design 1" from above example 
2. edit the ||Scene:set tile map to|| image and expand the size from 16x16 to 16x32
3. design additional rooms using black for walls, create outline border walls and design rooms
4. make a pathway open to all of the rooms, and pick a color for another obstacle (like a rock or lamp)
5. add a decoration to another room
6. navigate the sprite to all rooms making sure the sprite will bump into walls and the new obstacles

### Challenge
complete 3 or more of the following
* add a 3rd obstacle
* decorate a 3rd room
* Make a new design for the "smiley" sprite




```block
// :solution

// Basic Solution
enum SpriteKind {
    Player,
    Enemy
}
let smiley: Sprite = null
scene.setTile(7, img`
6 6 6 6 6 6 6 6 6 7 7 7 7 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 
6 6 7 6 6 6 6 6 6 6 6 6 7 6 6 6 
6 7 7 6 6 6 6 6 6 6 6 6 7 7 6 6 
6 7 6 6 6 6 6 6 7 6 6 6 6 6 6 6 
6 7 6 6 6 6 7 6 7 6 6 6 6 6 6 7 
6 7 6 6 6 6 7 6 7 6 6 6 6 6 6 7 
6 6 6 6 6 6 7 7 6 6 6 6 7 6 6 7 
6 6 6 6 6 6 6 7 6 6 6 6 7 7 7 7 
6 6 6 6 6 6 6 7 6 6 6 6 6 7 7 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 
6 6 6 7 6 6 6 6 6 6 6 6 6 6 7 6 
6 6 7 7 6 6 6 6 6 6 6 6 6 6 7 6 
6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 7 6 6 6 6 6 6 6 6 7 6 6 6 6 6 
6 7 6 6 6 6 6 6 6 6 7 6 6 7 6 6 
`)
scene.setTile(2, img`
1 1 1 2 1 5 5 5 5 5 1 1 2 1 1 1 
1 1 1 1 2 1 1 5 5 1 1 2 1 1 1 1 
7 1 1 1 1 2 1 1 1 1 2 1 1 1 1 2 
2 1 1 1 1 1 2 1 1 2 1 1 1 1 2 1 
1 2 1 1 1 1 1 2 2 1 1 1 1 2 1 1 
1 1 2 1 1 1 1 1 1 1 1 1 2 1 1 7 
7 1 1 2 1 1 1 1 1 1 1 2 1 1 7 7 
7 7 1 1 2 1 1 1 1 1 2 1 1 7 7 7 
7 7 7 1 2 1 1 1 1 1 2 1 1 7 7 7 
7 7 1 1 2 1 1 1 1 1 1 2 1 1 7 7 
7 1 1 2 1 1 1 1 1 1 1 1 2 1 1 7 
1 1 2 1 1 1 1 2 2 2 1 1 1 2 1 1 
1 2 1 1 1 1 2 1 1 1 2 1 1 1 2 1 
2 1 1 1 1 2 1 1 5 1 1 2 1 1 1 2 
1 1 1 1 2 1 1 5 5 5 1 1 2 1 1 1 
1 1 1 2 1 1 5 5 5 5 5 1 1 2 1 1 
`)
scene.setTile(15, img`
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
d d d d d d 1 d d d d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
d d d d d d 1 d d d d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
`, true)
scene.setTile(9, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . d d d . . . . . . . 
. . d d d d e e e d . . . . . . 
. . d e e e d e e e d . . . . . 
. . . d e e e d e e e d . . . . 
. . . . d e e e e e e d . . . . 
. . . d e e e e e e e d . . . . 
. . . d e e e d e e e e . . . . 
. . d e e e e e e e e e d . . . 
. . d e e d d e e e e e d . . . 
. . d e e e e d d e e e d . . . 
. d e e d e e e e d e e e d . . 
. d e e e e e e e e e e e e d . 
`, true)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 f 4 4 4 4 4 f 
f 2 2 2 2 2 2 2 2 f 4 4 4 4 4 f 
f 2 2 2 2 2 2 2 2 f 4 4 4 4 4 f 
f 2 2 2 2 2 2 2 2 4 4 9 4 4 4 f 
f 2 2 2 2 2 2 2 2 4 4 4 4 4 4 f 
f f 2 f f f f f f f 4 4 9 4 4 f 
f c c c c c c c c f 4 4 4 4 4 f 
f c c c c c c c c f f f f 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c 9 c c c c f 7 7 9 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f f f f f c f f f f f f f 7 f f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f 8 f f f f f f f f f f f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e 9 e 9 e 9 e 9 e 9 e 9 e e f 
f e e e e e e e e e e e e e e f 
f e 9 e 9 e 9 e 9 e 9 e 9 e e f 
f e e e e e e e e e e e e e e f 
f e 9 e 9 e 9 e 9 e 9 e 9 e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f f f f f f f f f f f f f f f f 
`)
smiley = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . f 5 5 f 5 5 5 f 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. f 5 5 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 f 5 5 5 5 5 f 5 f . . . 
. . f 5 5 f 5 5 5 f 5 5 f . . . 
. . . f 5 5 f f f 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f 5 f f . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(smiley)
game.onUpdate(function () {
    smiley.x += controller.dx(100)
    smiley.y += controller.dy(100)
})

// :end-solution
```

```block
// :solution

// Challenge Basic Solution
enum SpriteKind {
    Player,
    Enemy
}
let smiley: Sprite = null
scene.setTile(7, img`
6 6 6 6 6 6 6 6 6 7 7 7 7 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 
6 6 7 6 6 6 6 6 6 6 6 6 7 6 6 6 
6 7 7 6 6 6 6 6 6 6 6 6 7 7 6 6 
6 7 6 6 6 6 6 6 7 6 6 6 6 6 6 6 
6 7 6 6 6 6 7 6 7 6 6 6 6 6 6 7 
6 7 6 6 6 6 7 6 7 6 6 6 6 6 6 7 
6 6 6 6 6 6 7 7 6 6 6 6 7 6 6 7 
6 6 6 6 6 6 6 7 6 6 6 6 7 7 7 7 
6 6 6 6 6 6 6 7 6 6 6 6 6 7 7 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 
6 6 6 7 6 6 6 6 6 6 6 6 6 6 7 6 
6 6 7 7 6 6 6 6 6 6 6 6 6 6 7 6 
6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 7 6 6 6 6 6 6 6 6 7 6 6 6 6 6 
6 7 6 6 6 6 6 6 6 6 7 6 6 7 6 6 
`)
scene.setTile(2, img`
1 1 1 2 1 1 1 5 5 1 1 1 2 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 2 1 1 1 1 2 1 1 1 1 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 2 1 1 1 1 1 2 2 1 1 1 1 2 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 2 1 1 1 1 1 1 1 2 1 1 1 7 
7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
7 1 1 1 2 1 1 1 1 1 2 1 1 1 1 7 
7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 
1 1 2 1 1 1 1 2 2 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 
2 1 1 1 1 2 1 1 1 1 1 2 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 2 1 1 1 1 5 5 1 1 1 2 1 1 
`)
scene.setTile(12, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 1 1 1 1 1 1 1 1 1 1 1 1 9 1 
1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(15, img`
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
d d d d d d 1 d d d d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
d d d d d d 1 d d d d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
`, true)
scene.setTile(9, img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d e e c c c d d d d d d d 
d d e e e c e c c c d d d d d d 
d d e e c c c c c c c d d d d d 
d d e e e c c c c c e d d d d d 
d d e e c c c c c c e e d d d d 
d d e e c c c e c c c e d d d d 
d d e e c c c c c c c c d d d d 
d d e c c e e c c c c c d d d d 
d e e c c c c e e c c e e d d d 
d e c c c c c c c e c c e e d d 
e e c c c c c c c c c c c c d d 
`, true)
scene.setTile(5, img`
1 1 1 1 1 1 5 5 5 1 1 1 1 1 1 1 
1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 
1 1 1 1 5 5 5 5 5 5 5 1 1 1 1 1 
1 1 1 5 5 5 5 5 5 5 5 5 1 1 1 1 
1 1 5 5 5 5 5 5 5 5 5 5 5 1 1 1 
1 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 
1 1 1 1 b b b b b b b 1 1 1 1 1 
`, true)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 f 4 4 4 4 4 f 
f 2 2 2 2 2 2 2 2 f 4 4 4 4 4 f 
f 2 2 2 2 2 2 2 2 f 4 4 4 4 4 f 
f 2 2 2 2 2 2 2 2 4 4 9 4 4 4 f 
f 2 2 2 2 2 2 2 2 4 4 4 4 4 4 f 
f f 2 f f f f f f f 4 4 9 4 4 f 
f c c c c c c c c f 4 4 4 4 4 f 
f c c c c c c c c f f f f 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c 5 c c c c f 7 7 9 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f f f f f c f f f f f f f 7 f f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f 8 f f f f f f f f f f f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d 9 d 5 d 9 d 5 d 9 d 5 d d f 
f d d d d d d d d d d d d d d f 
f d 5 d 9 d 5 d 9 d 5 d 9 d d f 
f d d d d d d d d d d d d d d f 
f d 9 d 5 d 9 d 5 d 9 d 5 d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f f f f f f f f f f f f f f f f 
`)
smiley = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f . . . 
. . . . . . . . . . 5 5 5 f f . 
. . . . 7 7 7 . . 5 5 5 f 5 f . 
. . . 7 . . . 7 7 7 5 5 5 . . . 
. . 5 . . 7 7 7 7 7 . 5 . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . 7 7 7 7 7 7 . 7 . . . . . 
. . . 2 2 2 2 7 . . 7 . . . . . 
. . . 2 2 2 2 . . . 7 7 7 5 . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
f 2 2 2 . . 2 . . . . . . . . . 
f . . . . . 2 . . . . . . . . . 
f . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(smiley)
game.onUpdate(function () {
    smiley.x += controller.dx(100)
    smiley.y += controller.dy(100)
})


// :end-solution
```
```blocks
// :solution

/* 
        TILE MAP CODE SUMMARY EXAMPLE
  Shows how color wokrs in tile map as "background" solid color or that a color in the tile map can be set to "paint" an image using that can be "wall oof" or "wall on"

  enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 . . . . 1 . . . . . 
. . . . . 1 . . . . 1 . . . . . 
. . . . . 1 . . . . 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . 1 1 1 . . . . . 
. . . . . . 1 1 . . . 1 1 . . . 
. . . . . 1 . . . . . . . . . . 
`, SpriteKind.Player)
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 a 
3 3 3 3 3 4 8 8 8 a 
3 3 3 3 3 4 a 8 8 a 
3 3 3 3 3 4 8 8 8 a 
3 3 3 3 3 4 8 8 8 a 
3 3 3 3 3 4 a 8 8 a 
3 3 3 3 3 4 8 8 8 a 
3 3 3 3 3 4 8 8 8 a 
`)
scene.setTile(4, img`
4 4 4 4 6 6 6 6 6 6 4 4 4 4 6 4 
4 4 4 4 6 4 4 4 4 4 4 4 4 4 6 4 
4 4 4 4 6 4 4 4 4 4 4 4 4 4 6 4 
4 4 4 4 6 4 4 4 4 4 4 4 4 4 6 4 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
4 4 4 4 4 4 4 6 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 6 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 6 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 6 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 4 4 4 4 4 6 4 4 
4 4 4 4 6 4 4 4 4 4 4 4 4 6 4 4 
4 4 4 4 6 4 4 4 4 4 4 4 4 6 4 4 
4 4 4 4 6 4 4 4 4 4 4 4 4 6 4 4 
4 4 4 4 6 4 4 4 4 4 4 4 4 6 4 4 
6 6 6 6 6 4 4 4 4 4 6 6 6 6 6 6 
`)
scene.setTile(10, img`
6 6 6 6 6 a a a 6 a a a a a a a 
a a a a a 6 6 a 6 a a a a a a a 
a a a a a 6 a 6 6 6 6 6 6 6 6 6 
a a a a a 6 a a a a a a a a a a 
a a a a a 6 a a a a a a a a a a 
a a a a a 6 a a a a a a a a a a 
6 6 6 6 6 6 6 6 6 6 6 a a a a a 
a 6 a a a a a a a a a 6 6 6 6 6 
a 6 a a a a a a a a a a a 6 a a 
a 6 a a a a a a a a a a a 6 a a 
a 6 a a a a a a a a a a a 6 a a 
a 6 a a a a a a a a a 6 a 6 a a 
6 6 6 6 6 a a a a a a a a 6 a a 
a a a a a 6 6 6 6 6 6 6 6 6 6 6 
a a a a a a a a 6 a a a a a a a 
a a a a a a a a 6 a a a a a a a 
`, true)
game.onUpdate(function () {
    scene.cameraFollowSprite(sprite)
    sprite.x += controller.dx()
    sprite.y += controller.dy()
})

*/


## What did we learn? [create 2 questions]

1. Describe how a [concept 1] makes programming easier, more powerful, reduced code, or something.... .  
2. Compare and contrast [something in the real world with coding] grocery store line or ask student to come up with a comparison.  
3. [Come up with a question of your choice]


## Rubrics


### TODO Rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| TODO replace template text  | Made Squares with a loop & Answered Questions|  Was able to nest More than 3 squares using loops | Answered questions with clear explanations using examples and/or analogies | Completed Challenge Code  |

### Score = \_\_\_\_\_\_ /10 
