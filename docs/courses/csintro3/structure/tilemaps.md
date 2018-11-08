# Activity: Tile Maps

``||scene:Tile maps||`` allow developers to easily create maps for sprites to traverse.

Well designed maps can serve as a world for the player to explore, and can be populated with distinct images for each tile that easily make the world more visually appealing.

## Concept: Creating a Tile Map

The ``||scene:scene.setTileMap||`` function is used to create a tile map.

```sig
scene.setTileMap(null);
```

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

This function accepts an ``||images:Image||``, and initializes the ``||scene:tile map||`` based off this image.

By default, the image will be shown on the screen, with each pixel corresponding to a **16 x 16** square of the same color.

Using the ``||scene:setTile||`` function, this behavior can be changed to instead display an image in place of the color.

```sig
scene.setTile(null, false);
```

```typescript
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . 1 . 1 . . . . 
. . . 1 . 1 . . . . 
. . . . . . . . . . 
. . 1 . . . 1 . . . 
. . . 1 1 1 . . . . 
. . . . . . . . . . 
`);
scene.setTile(1, sprites.castle.tileGrass1);
```

This function accepts an ``index`` of a color, and a **16 x 16** ``||image:Image||`` to replace the color in the ``||scene:tile map||``.

## Example 1: Beach

1. Review the code below
2. Identify where the ``||scene:tile map||`` is defined
3. Identify where the different colors of the ``||scene:tile map||`` are assigned a different ``||image:Image||``

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
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
`)
```

### ~hint

If you do not want a sprite to be confined to the ``||scene:tile map||``, the ``||sprites:Ghost||`` flag can be set. ``||sprites:Ghosts||`` can go through walls.

### ~

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
mySprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
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