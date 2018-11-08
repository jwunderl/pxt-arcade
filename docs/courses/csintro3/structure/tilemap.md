

As seen in blocks, tile maps can be useful to making a move complex background for games. In JavaScript, tile maps are used very similarly and have the same behavior.

## Concept: Using a Tile Map

The first of the two main functions that are used for tiles is

```typescript
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`);
```

This function takes an ``||images:image||`` and sets the background tile map to that image where each tile/cell occupies a ``16x16`` grid.


The default behavior of a tile map cell/tile is to be the same color of the corresponding tile on the tile map. This makes setting the 
creating simple backgrounds simple, but as seen with blocks, each color tile can be set to be a unique ``16x16`` image.

The other main function used is 

```typescript
scene.setTile(0, img`
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
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`)
```

This function takes in an ``index`` of a color (a value between 0 and 15 inclusive) and a ``16x16`` image. For every tile on the tile map that is the color of ``index``, the given image will be displayed.

This ``setTile`` function can also be used for setting up obstacles for sprites. As scene in blocks, when setting a tile to an image, there was the option to set that color/those tiles to be a wall, something sprites couldn't pass through.

To do this with JavaScript, simply add a boolean parameter after the image to specify if the tiles should be walls. Like so:

```typescript
scene.setTile(0, img`
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
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, true)
```

## Example 1: Beach

1. Observe the example below
2. Identify where it specifies what the tile map looks like
3. Identify how it sets what each tile looks like and whether or not it is a wall

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 d 
5 5 5 5 5 5 5 5 d 8 
5 5 5 5 5 5 5 d 8 8 
5 5 5 5 5 5 d 8 8 8 
5 5 5 5 5 d 8 8 8 8 
5 5 5 5 d 8 8 8 8 8 
5 5 5 d 8 8 8 8 8 8 
5 5 d 8 8 8 8 8 8 8 
`)
scene.setTile(5, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
5 5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
scene.setTile(13, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
5 f 5 5 5 5 5 5 5 5 5 5 5 5 8 8 
5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 
5 5 5 5 5 5 5 5 5 5 8 8 8 8 8 9 
5 5 5 8 8 8 5 5 5 8 8 8 8 9 9 9 
5 5 8 8 8 8 8 8 8 8 8 9 9 9 6 6 
5 8 8 8 8 8 8 8 8 9 9 9 6 6 8 8 
5 8 8 8 8 8 8 9 9 9 6 6 8 8 8 8 
8 8 8 8 9 9 9 9 6 6 6 8 8 8 8 8 
8 8 8 9 9 6 8 6 6 8 8 8 8 8 8 8 
8 8 8 9 6 6 8 8 8 8 8 8 8 8 8 8 
8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
`)
scene.setTile(8, img`
8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 
8 8 8 8 9 9 6 6 8 8 8 8 8 8 8 8 
8 8 8 9 9 6 8 8 8 8 8 8 8 8 8 8 
8 8 8 9 6 8 8 8 8 8 8 8 8 8 8 8 
8 8 9 6 6 8 8 8 9 8 8 8 8 8 8 8 
9 9 9 6 8 8 8 9 9 9 8 8 8 8 8 8 
9 6 6 8 8 8 9 9 6 8 8 8 8 8 8 8 
6 8 8 8 8 8 9 9 6 8 8 8 8 8 8 8 
8 8 8 8 8 9 9 6 8 8 8 8 8 8 8 8 
8 8 8 8 9 9 6 8 8 8 8 8 9 9 6 8 
8 8 8 9 9 6 8 8 8 8 8 8 9 6 8 8 
8 8 8 9 6 8 8 8 8 8 8 9 6 8 8 8 
8 8 9 6 8 8 8 8 8 8 9 9 6 8 8 8 
8 8 6 8 8 8 8 8 8 8 9 6 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
```

## Student Task #1: Simple Maps

1. Create a quick game with that allows you to control a sprite and move around the screen
2. Add in a tile map with at least **2** different colors
3. Define the details for each of those colors
4. Have at least **1** color set to be a wall

### ~hint

If you cannot think of what to make, try to make one of these examples:
![Tile Map Examples](/static/courses/csintro3/arrays/tile-maps/example-tile-maps.png)

### ~

## Concept: On Hit Tile Events

The ``scene.onHitTile`` event is a helpful event that runs code when a sprite of a specific ``||sprites:SpriteKind||`` (e.g. Player, Enemy, etc.) collides with a wall of a specific color. 

![On Hit Tile Event](/static/courses/csintro3/arrays/tile-maps/on-tile-hit-event.gif)


## Example #2: Cold Water

1. Observe the example below
2. Identify how it uses a ``scene.onTileHit`` event to make the sprite interact with the scene

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 d 
5 5 5 5 5 5 5 5 d 8 
5 5 5 5 5 5 5 d 8 8 
5 5 5 5 5 5 d 8 8 8 
5 5 5 5 5 d 8 8 8 8 
5 5 5 5 d 8 8 8 8 8 
5 5 5 d 8 8 8 8 8 8 
5 5 d 8 8 8 8 8 8 8 
`)
scene.setTile(5, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
5 5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
scene.setTile(13, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
5 f 5 5 5 5 5 5 5 5 5 5 5 5 8 8 
5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 
5 5 5 5 5 5 5 5 5 5 8 8 8 8 8 9 
5 5 5 8 8 8 5 5 5 8 8 8 8 9 9 9 
5 5 8 8 8 8 8 8 8 8 8 9 9 9 6 6 
5 8 8 8 8 8 8 8 8 9 9 9 6 6 8 8 
5 8 8 8 8 8 8 9 9 9 6 6 8 8 8 8 
8 8 8 8 9 9 9 9 6 6 6 8 8 8 8 8 
8 8 8 9 9 6 8 6 6 8 8 8 8 8 8 8 
8 8 8 9 6 6 8 8 8 8 8 8 8 8 8 8 
8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
`)
scene.setTile(8, img`
8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 
8 8 8 8 9 9 6 6 8 8 8 8 8 8 8 8 
8 8 8 9 9 6 8 8 8 8 8 8 8 8 8 8 
8 8 8 9 6 8 8 8 8 8 8 8 8 8 8 8 
8 8 9 6 6 8 8 8 9 8 8 8 8 8 8 8 
9 9 9 6 8 8 8 9 9 9 8 8 8 8 8 8 
9 6 6 8 8 8 9 9 6 8 8 8 8 8 8 8 
6 8 8 8 8 8 9 9 6 8 8 8 8 8 8 8 
8 8 8 8 8 9 9 6 8 8 8 8 8 8 8 8 
8 8 8 8 9 9 6 8 8 8 8 8 9 9 6 8 
8 8 8 9 9 6 8 8 8 8 8 8 9 6 8 8 
8 8 8 9 6 8 8 8 8 8 8 9 6 8 8 8 
8 8 9 6 8 8 8 8 8 8 9 9 6 8 8 8 
8 8 6 8 8 8 8 8 8 8 9 6 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)

scene.onHitTile(SpriteKind.Player, 8, function (sprite: Sprite) {
    sprite.say("Ooh! Too Cold!", 1000);
})
```

## Student Task #2: Scene Interaction

1. Create a quick game with that allows you to control a sprite and move around the screen
2. Add in a tile map with at least **2** different colors
3. Have at least **1** color set to be a wall
4. Add an ``scene.onHitTile`` event that makes the sprite say something when they hit the wall






## What did we learn?

1. What is the behavior of a tile if no ``||images:image||`` is set to that color?