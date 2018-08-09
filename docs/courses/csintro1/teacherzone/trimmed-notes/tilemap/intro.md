# Tile Map

## Example #1: Making a tilemap

## Student Task #1: Personalized Tilemap

Student creations for this section will vary, but should all closely resemble example #1 with a different drawing on it.

### Example #2: Creating tiles in a tilemap

## Student Task #2: Add tile to tilemap

Student solution similar to the [student example given](https://makecode.com/_5RhYt8JrqP55)  - Student should have individual modifications.

## Example #3: Words!

## Student Task #3: Hello World!

### Standard:

https://makecode.com/_4cc0DwDszaj9

```blocks
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 3 4 4 5 . . . . . 
. . . . . . . . . . 
. . . 6 5 7 4 8 . . 
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

### Challenge:

https://makecode.com/_T9FcEWijg68m

```blocks
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 3 4 4 5 . . . . . 
. . . . . . . . . . 
. . . 6 5 7 4 8 f . 
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
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
```

## Example #4: A brand new home

## Student Task #4: Decorate and move around the house

### Standard:

```
enum SpriteKind {
    Player,
    Enemy
}
let HomeOwner: Sprite = null
HomeOwner = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f 9 f 9 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f . f . . . . . . 
. . . . . . . f . f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(HomeOwner)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 2 1 1 2 1 1 f 1 1 1 4 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f f f f 1 1 f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 4 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 6 1 6 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f f f f f f f f 1 1 f f f f f f 1 1 f f f f f f f f 1 1 f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f f f f f f f f 1 1 f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 4 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 3 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 3 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e 1 1 
1 1 1 1 1 e e e e e e e e e 1 1 
1 1 1 1 1 d d d d d e e e e 1 1 
1 1 1 1 1 d 1 1 1 d d 1 e e 1 1 
1 1 1 1 1 d d d d d d 1 e e 1 1 
1 1 1 1 1 d 1 d 1 d d 1 e e 1 1 
1 1 1 1 1 d d 1 d 1 d 1 e e 1 1 
1 1 1 1 1 d d d d d d 1 e e 1 1 
1 1 1 1 1 d 1 1 1 d d 1 e e 1 1 
1 1 1 1 1 d d d d d e e e e 1 1 
1 1 1 1 1 e e e e e e e e e 1 1 
1 1 1 1 1 e e e e e e e e e 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(3, img`
1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
1 1 9 9 9 1 1 1 1 1 1 1 9 9 9 1 
1 1 9 9 9 1 d 1 d 1 d 1 9 9 9 1 
1 1 9 9 9 1 d 1 d 1 d 1 9 9 9 1 
1 1 9 9 9 1 1 1 1 1 1 1 9 9 9 1 
1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
`, true)
scene.setTile(4, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 e e e e e e e e e e 1 1 1 
1 1 e e e d e 7 1 1 e e e e 1 1 
1 e e e a d e 1 1 1 e e e e e 1 
1 e e e e e e e e e e e a e e 1 
1 e e e e e e f f e e e d d e 1 
1 e 7 1 e e f f f f e e 1 1 e 1 
1 e 1 1 e e f 1 1 f e e 1 1 e 1 
1 e 1 1 e e f f f f e e 1 7 e 1 
1 e d d e e e f f e e e e e e 1 
1 e e a e e e e e e e e e e e 1 
1 e e e e e e e e e e e e e e 1 
1 e e e e e 1 1 1 e d a e e e 1 
1 1 e e e e 1 1 7 e d e e e 1 1 
1 1 1 e e e e e e e e e e 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(5, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 a a a 1 1 1 1 1 1 1 1 
1 1 1 1 a a c a a 1 1 1 1 1 1 1 
1 1 1 a a c a a a a 1 1 1 1 1 1 
1 1 a a c a a a a a a 1 1 1 1 1 
1 1 a a a a c a a c a 1 1 1 1 1 
1 1 a a a c a a c a a 1 1 1 1 1 
1 1 1 a c a a c a a 1 1 1 1 1 1 
1 1 1 1 a a a a a 1 1 1 1 1 1 1 
1 1 1 1 1 a a a 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
scene.setTile(6, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 b e e b b b b 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 e e b b b b 4 b b 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 e b 3 4 4 b b 4 b b 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 e 4 4 3 3 4 b b 4 b b 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 e b 4 3 3 3 4 4 b 4 b e 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 4 e b 4 3 3 4 4 4 4 4 b e 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 b d 4 e b 4 3 3 3 3 3 4 4 b b 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b 1 1 1 1 
1 1 1 1 1 1 1 1 1 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e 1 1 1 
1 1 1 1 1 1 1 1 b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e 1 1 
1 1 1 1 1 1 1 1 b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e 1 
1 1 1 1 1 1 1 b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b 
1 1 1 1 1 1 1 4 3 2 2 2 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
1 1 1 1 1 1 b 4 2 2 3 3 2 d d d 5 5 5 2 2 2 d 4 e e b b b 4 b e 
1 1 1 1 1 1 b e 2 2 2 3 2 e d 5 5 5 2 2 3 3 2 d b 4 e b b b b e 
1 1 1 1 1 b d e 2 2 2 2 2 e 5 5 5 e 2 2 2 3 2 e d d 4 b b b b e 
1 1 1 1 1 b 5 2 e 2 2 2 e 3 5 5 5 e 2 2 2 2 2 e d d d 4 e b e e 
1 1 1 1 b d 5 5 2 e e e 3 5 5 5 5 2 e 2 2 2 e 3 5 5 5 4 4 e e e 
1 1 1 1 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d e e e 
1 1 1 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
1 1 1 4 8 8 5 2 2 2 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e 
1 1 b 4 5 5 2 2 3 3 2 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e 1 
1 1 4 d 5 2 2 2 2 3 2 e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e 1 1 
1 b d d 5 e 2 2 2 2 2 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e 1 1 1 1 
1 b 5 5 d 2 e 2 2 2 e 3 5 1 1 4 4 d 1 d 5 5 e e e e 1 1 1 1 1 1 
b d 5 d d d 2 e e e 3 d 4 4 4 5 5 5 d d 4 e 1 1 1 1 1 1 1 1 1 1 
b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e 1 1 1 1 1 1 1 1 1 1 1 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e 1 1 1 4 d e 1 1 1 1 1 1 1 1 1 1 1 
4 1 d 4 5 5 5 d 4 e e 1 1 1 1 1 1 1 1 4 4 1 1 1 1 1 1 1 1 1 1 1 
4 1 5 5 4 e e d e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
4 4 e e 1 1 1 4 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
game.onUpdate(function () {
    controller.controlSprite(HomeOwner, 100, 100)
})
```

## What did we learn?

1. What is the default size when you create a new tilemap? Does it perfectly match the screen size?
2. When ``||scene:camera follow sprite||`` is set to follow a sprite, does that sprite always stay in the center of the screen, or are there times where it is off center?

### ~hint

Possible Solutions:

1. The default size is 10x8. Because we know that each tile is shown on screen as a 16x16 square, this will result in a total map of size 160x128 - this is slightly taller than the screen size, so it won't be displayed fully on the screen.
2. The camera does not center on the sprite if the sprite is near the edge of the tilemap - the sprite can move all the way up to the corner of the screen in that case.

### ~