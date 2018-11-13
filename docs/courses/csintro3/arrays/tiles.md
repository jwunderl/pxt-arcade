# Activity: Tiles

``||scene:Tile maps||`` allow for an easy way to design and structure maps that the player can explore.

``||scene:Wall collision||`` events and ``||scene:Tiles||`` allow for further control over how developers can interact with the individual ``||scene:tiles||`` that make up the ``||scene:tile map||``.

## Concept: On Hit Tile Events

The ``||scene:scene.onHitTile||`` event occurs when a sprite of the given ``||sprites:Kind||`` collides with a given ``||scene:Tile||`` that is a ``||scene:Wall||``.

```sig
scene.onHitTile(0, 0, null);
```

## Example #1: Rock Collector

1. Review the example below
2. Identify how the ``||scene:scene.onTileHit||`` event is used to make the sprite interact with the scene
3. How does the ``||variables:tile||`` parameter in the ``||scene:on hit tile||`` event correspond to the type of tile that is used?

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let mySprite: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);
controller.controlSprite(mySprite, 100, 100);

scene.setTileMap(img`
7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 
7 7 f 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 f 7 
7 7 7 f 7 7 7 f 7 7 
7 7 7 7 7 7 7 f 7 7 
7 7 7 7 7 7 7 7 7 7 
`);

scene.setBackgroundColor(6);
scene.setTile(7, sprites.castle.tileDarkGrass1);
scene.setTile(15, sprites.castle.rock0, true);

scene.onHitTile(SpriteKind.Player, 15, function (sprite: Sprite) {
    sprite.say("Ooh! A rock!", 1000);
});
```

## Student Task #1: Collect More

1. Start with the code from example #1
2. Create at least **one** more tile that is **not** a wall, and add it to the ``||scene:tile map||``
3. Create at least **one** more type of ``||scene:wall||``, and add it to the ``||scene:tile map||``. Make the image be of something that looks like a "portal"
4. Add an ``||scene:on hit tile||`` event that occurs when ``||variables:mySprite||`` hits the new type of ``||scene:wall||``
5. In the new event, set ``||variables:mySprite||`` to a random new ``||sprites:x||`` and ``||sprites:y||`` position

## Concept: Tiles

A tile map is made up of several individual tiles of type ``tiles.Tile``. This is a type just like ``||sprites:Sprite||`` or ``||images:Image||`` except it is defined in the ``tiles`` namespace so it needs to be typed as ``tiles.Tile``. 

Some of the helpful functions for getting a tile and setting a tile are:
``scene.getTile`` and ``scene.setTileAt``. The first returns the tile at the specified position and the latter takes a tile and a color index as parameters and set that tile to that color.

## Example #3: Swipe Down

1. Observe the example below
2. Identify how it **gets** a specific tile
3. Identify how it **sets** a specific tile

```typescript
scene.setTileMap(img`
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
`)
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 10; col++) {
        let currentTile: tiles.Tile = scene.getTile(col, row);
        scene.setTileAt(currentTile, 8);
        pause(100);
    }
}
```

## Student Task #3: Random Tiles

1. Create a basic tile map
2. Create an ``game.onUpdateInterval`` event that runs every 1000 ms (1 sec)
3. Inside the event, get a random tile by selecting a random row and column
4. Set this tile to be the color blue (`8`)


## Concept: Placing Sprites on a Color

The function ``scene.getTilesByType`` will return an array of all of the tiles in the tile map of the color specified.

Each tile also has the function ``place`` which takes in a ``||sprites:sprite||`` as a parameter and places that sprite on top of the tile.

Using these two together allows for the ability to go through the array of tiles and place a sprite on top of each one.



## Example #4: Flower Storm

1. Look at the example below
2. Identify how it gets an array of tiles
3. Recognize how it goes through an array
4. Identify how it places a ``||sprites:sprite||`` on top of each tile

```typescript
enum SpriteKind {
    Player,
    Enemy
}
scene.setTileMap(img`
7 7 7 7 e 7 7 7 7 7 
7 e 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 e 7 7 
7 7 7 7 7 e 7 7 7 7 
7 7 7 e 7 7 7 7 7 7 
7 7 7 e 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 e 7 
7 7 7 e 7 7 7 7 7 7 
`);

scene.setTile(14, img`
5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 1 7 7 
7 7 7 1 1 7 7 7 7 7 7 7 1 7 1 7 
7 7 3 1 1 3 7 7 7 5 7 7 6 1 6 7 
7 1 1 6 6 1 1 7 7 5 7 7 7 7 7 7 
7 d 1 7 7 1 d 7 7 6 7 7 7 7 7 7 
7 6 3 1 1 3 6 7 7 7 7 5 7 7 7 7 
7 7 6 d d 6 7 7 7 7 5 5 6 7 7 7 
7 7 7 7 7 7 7 1 7 7 5 6 7 7 7 7 
7 7 7 7 7 7 1 7 1 7 7 7 1 1 7 7 
7 7 1 7 7 7 6 1 6 7 7 3 1 1 3 7 
7 1 7 1 7 7 7 7 7 7 1 1 6 6 1 1 
7 6 1 6 7 7 7 7 7 7 d 1 7 7 1 d 
7 7 7 7 7 7 7 7 7 7 6 3 1 1 3 6 
7 7 7 7 7 7 7 7 7 7 7 6 d d 6 7 
7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
`);

game.onUpdateInterval(2000, function () {
    let tileList: tiles.Tile[] = scene.getTilesByType(14);
    for (let i = 0; i < tileList.length; i++) {
        let projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . . 3 a a a 3 . . . . . . 
. . . 3 3 a b b b a 3 3 . . . . 
. . 3 3 a b 5 5 5 b a 3 3 . . . 
. 3 3 3 a b 5 5 5 b a 3 3 3 . . 
. . 3 3 a b 5 5 5 b a 3 3 . . . 
. . . 3 3 a b b b a 3 3 . . . . 
. . . . . 3 a a a 3 . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0, SpriteKind.Player);
        tileList[i].place(projectile);
    }
})
```

## Student Task #4: Garden

1. Create a tile map that looks like a garden with one color designated for tiles that plants can grow on
2. Create a ``||controller:controller||`` event that runs code when the ``||controller:A||`` button is pressed.
3. Inside this code, get the array of tiles of the color designated
4. Select a random tile from the array and place a plant ``||sprites:sprite||`` sprite on top of that tile
5. **Challenge** Use the ``||sprites:lifespan||`` property to have the plants disappear after time

## What did we learn?
1. What is the proper syntax for an ``onHitTile`` event?
2. What is the relationship between tiles and tile maps?
3. What is one way to place a sprite on a specific tile?