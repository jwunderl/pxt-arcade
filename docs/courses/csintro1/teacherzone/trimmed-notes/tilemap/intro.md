# Tile Map

## Student Task: Make a Maze 16x32, Challenge 32x48 or larger
```blocks
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
```


## Student Task: Given the following tiles, use a tile map to display the words "HELLO WORLD" on the screen

(This is what students need to add to the provided code.)
```blocks
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
```

# Activity: Tile Map

In this activity students will build tile maps games with expanded area of play using:
* ``||scene:set tile map to||``
* ``||scene:set tile to||``
  * wall
  * decoration
* ``||scene:camera follow sprite||``


### ~hint

The first tile map example is just beyond the bare minimum tile map design, a player sprite and camera follow.  The students should focus on understanding how the tile map "pixels" translates into a fixed area of the screen. Later they will see this is 16x16 on the visible screen - the same size as a default sprite block.

### ~

## Concept: create a tile map
## Example: [Simple example 1]

## Task: expand first tile map

```blocks
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
```

## Concept: Set tile map tile to make obstacles

## Example: Set tile map as design and as obstacle 

## Task: add rooms with decorations and obstacles 


### Challenge

```blocks
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

```blocks
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

```
```blocks
/* 
        TILE MAP CODE SUMMARY EXAMPLE
  Shows how color works in tile map as "background" solid color or that a color in the tile map can be set to "paint" an image using that can be "wall oof" or "wall on"

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
```

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
