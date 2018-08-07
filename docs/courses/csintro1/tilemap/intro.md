# Tile Map

Maps and levels form the basis of many of the most common types of videogames; they allow a location for the games story to progress, and for the player to explore. In MakeCode Arcade, ``||scene:tilemaps||`` provide an easy way to design two dimensional maps.

## Example #1: Words!

1. Make a new project (name it "tilemapWords")
2. Review the code below
3. Copy the code below into your project and run it

```blocks
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . 6 5 7 8 . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
scene.setTile(2, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 1 1 1 1 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(3, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 1 1 1 f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(6, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f 1 1 f f 1 f f f f 
f f f f 1 f 1 f f 1 f 1 f f f f 
f f f f 1 1 f f f f 1 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(5, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(4, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(7, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 1 1 1 1 f f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 1 1 1 1 f f f f f f 
f f f f f 1 f f 1 f f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(8, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 1 1 1 1 f f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 1 1 1 1 f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
```

## Student Task #1: Hello World!

1. Start with the code from example #1
2. Change the tilemap so that it displays "Hello World" instead of just "Word"
3. **Challenge:** Create a new tile with an exclamation mark, and change the tilemap so that "Hello World!" is displayed


### DEPRECATED BELOW

# TODO: keep programing with functions - make this function code

## Student Task: Make a Maze 16x32, Challenge 32x48 or larger

## Student Task: Given the following tiles, use a tile map to display the words "HELLO WORLD" on the screen

```blocks
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
# Activity: Tile Map

# TODO: focused lesson on building with tile map. Make obstacles (Maze) but no collisions
Tile maps allow us to design an area of play that is bigger than the screen. An Area of play with a size that is several screens is common in many "platform" adventure and role-playing games.  Using Tile maps, we will build multi-room and maze games.

In this activity students will build tile maps games with expanded area of play using:
* ``||scene:set tile map to||``
* ``||scene:set tile to||``
* ``||scene:camera follow sprite||``

## Concept: create a tile map

# TODO: Create Video 

The basic tile map example uses:  
* ``||scene:set tile map to||``
* Sprite with basic game pad navigation
* ``||scene:camera follow sprite||``

## Example: [Simple example 1]
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "first tile map") 
4. Navigate through the tile map with the sprite

```blocks
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
1. Starting with the the above first tile map example 
2. Edit the ``||Scene:set tile map to||`` image and expand the size from 16x16 to 16x32
3. Design additional rooms using black for walls and other colors for the rooms
4. Make a pathway open to all of the room
5. Navigate the sprite to all rooms without crossing a black lines
5. **Challenge:** design a 32x32 tile map and make a more interesting sprite

## Concept: Set tile map tile to make obstacles

# TODO: might need a short video here 

``||scene:set tile to||`` is a way to easily design obstacles such as walls, water, lava. This is also a fast way to "paint" on detail like a field of flowers, sky with clouds or a fancy flooring.

## Example: Set tile map as design and as obstacle 
1. Review the code below
2. Navigate the sprite to each room and bump into a few walls
3. Notice which blocks become obstacles for our sprite and which are just decoration
4. Save the code for the task (name it "set tile design 1") 
5. Notice that this sprite moves faster

```blocks  
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

note the ``||scene:set tile to||`` defining the tile for black displays as a brick wall. It also has selected "wall on" to create an obstacle. The light green tile is decorative only because "wall off" is set. 

### ~

## Task: add rooms with decorations and obstacles 
1. Starting with the "set tile design 1" from above example 
2. Edit the ``||Scene:set tile map to||`` image and expand the size from 16x16 to 16x32
3. Design additional rooms using black for walls, create outline border walls and design rooms
4. Make a pathway open to all of the rooms, and pick a color for another obstacle (like a rock or lamp)
5. Add a decoration to another room
6. Navigate the sprite to all rooms making sure the sprite will bump into walls and the new obstacles

### Challenges
* Add a 3rd obstacle
* Decorate a 3rd room
* Make a new design for the "smiley" sprite

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
