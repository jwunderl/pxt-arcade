# Activity: Collage

**Visual Design** is an important part of Game Development.  This activity builds skills needed to create multiple sprites placed on a game screen by building Collage about you. The student will Create Sprites with custom variable names and arrange the sprites on a game screen using sprite properties to set the coordinates.

In this activity we will use
* Sprites
* Variables to create multiple sprites  
* Coordinates to arrange our sprites into a scene  
* Background - set background  

# TODO: Video demo example Making a sprite, changing the variable name and placing on the screen.   Use scene.setBackground() 

## Example: Sprite

This Sprite example is larger than the default 16x16 and uses a custom variable name `hotSauce`.  *How can we determine the dimensions of this sprite?*

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let hotSauce: Sprite = null
scene.setBackgroundColor(1)
hotSauce = sprites.create(img`
. . 3 . . . . 2 . . . . . . . 3 . . . . . . 3 . . . . . . . . . 
. . 3 3 . . 6 6 6 . . . . . 3 . . . . . . . 3 . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . 3 . . . . 3 . . . . . . . . . 
. 3 3 . . 6 6 6 6 6 . . . . . . 3 . . . . . 3 . . . . . f f f f 
. . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . f f f f f . 
. . . . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . f f f f f . . 
. . . . 2 1 1 1 1 1 2 . . . 3 . . . . . . . . f f f f f . . . . 
. . . . 2 2 2 2 2 2 2 . . . 3 . . . . . . . f f f f f f f . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . f f . . . . f f . . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . . . . . . f f f . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 . . . . f f f . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . 2 2 2 2 . . f f f f . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . 2 2 2 . . . f f f . 
. . 2 2 2 2 2 1 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . f f . . 
. . 2 2 2 1 1 2 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . . . . . 
. . 2 2 1 1 2 2 2 2 f 2 2 f f f . 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f . . 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f f . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 1 f f f 2 f f f f . . . . . . . . . . 3 . . . . 
. . 2 2 2 2 2 1 1 2 f f f f . f f . . . . . . . . . . . 3 . . . 
. . 2 2 2 2 1 2 2 2 f f f . . f f f . . . . . . . . . . . . . . 
3 . 3 3 2 1 1 2 2 2 2 f f f . . f f . . . . . . . . . . . . 3 . 
. . 2 2 2 1 2 2 2 2 2 2 f f . . f . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 1 2 2 2 . . . . . 3 . . . . 3 . . . . . . . . 
. . 2 2 2 2 2 2 1 1 2 2 2 . . . . . 3 . . . . . . . . . . . . . 
. . 3 2 2 2 2 1 1 2 2 2 2 . . . 3 3 . . . . . 3 . . . . . . . . 
. . 3 2 2 2 2 1 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
3 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

```
## Example: Sprite placement & background 

This Sprite example uses sprite properties to set the `x` and `y` coordinates on the game screen. *View the Sprite in JavaScript. Note how colors are represented.*

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let hotSauce: Sprite = null
hotSauce = sprites.create(img`
. . 3 . . . . 2 . . . . . . . 3 . . . . . . 3 . . . . . . . . . 
. . 3 3 . . 6 6 6 . . . . . 3 . . . . . . . 3 . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . 3 . . . . 3 . . . . . . . . . 
. 3 3 . . 6 6 6 6 6 . . . . . . 3 . . . . . 3 . . . . . f f f f 
. . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . f f f f f . 
. . . . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . f f f f f . . 
. . . . 2 1 1 1 1 1 2 . . . 3 . . . . . . . . f f f f f . . . . 
. . . . 2 2 2 2 2 2 2 . . . 3 . . . . . . . f f f f f f f . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . f f . . . . f f . . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . . . . . . f f f . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 . . . . f f f . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . 2 2 2 2 . . f f f f . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . 2 2 2 . . . f f f . 
. . 2 2 2 2 2 1 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . f f . . 
. . 2 2 2 1 1 2 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . . . . . 
. . 2 2 1 1 2 2 2 2 f 2 2 f f f . 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f . . 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f f . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 1 f f f 2 f f f f . . . . . . . . . . 3 . . . . 
. . 2 2 2 2 2 1 1 2 f f f f . f f . . . . . . . . . . . 3 . . . 
. . 2 2 2 2 1 2 2 2 f f f . . f f f . . . . . . . . . . . . . . 
3 . 3 3 2 1 1 2 2 2 2 f f f . . f f . . . . . . . . . . . . 3 . 
. . 2 2 2 1 2 2 2 2 2 2 f f . . f . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 1 2 2 2 . . . . . 3 . . . . 3 . . . . . . . . 
. . 2 2 2 2 2 2 1 1 2 2 2 . . . . . 3 . . . . . . . . . . . . . 
. . 3 2 2 2 2 1 1 2 2 2 2 . . . 3 3 . . . . . 3 . . . . . . . . 
. . 3 2 2 2 2 1 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
3 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
hotSauce.x = 20
hotSauce.y = 40
```


## Student Task: Build a Collage 

It can be about a typical day, a hobby, favorite musician or actor, sports, clothes - anything tells something that tells story and is about you.

* Initialize 6 or more Sprites with custom Sprite variable names  
* Design Sprites in the **Image Editor** to tell a story using custom images of varying sizes and styles
* Use Sprite Properties to place images across all areas of the game screen  
* Follow the [Collage Tutorial](../Tutorials/collage-tutorial.md) to start the collage like the examples
* **Save** the Collage as a shared Link or download PNG file


 ```blocks
//:solution
// https://makecode.com/_7dtM9RfzKKD4

enum SpriteKind {
    Player,
    Enemy
}
let sandals: Sprite = null
let jS: Sprite = null
let walking: Sprite = null
let initials: Sprite = null
let me: Sprite = null
let hotSauce: Sprite = null
let coffee: Sprite = null
let bus: Sprite = null
scene.setBackgroundColor(7)
bus = sprites.create(img`
. . . . . . . . . . . . . . . . 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
6 6 4 6 4 6 4 6 4 6 4 4 4 1 1 . 
6 6 1 6 1 6 1 6 1 6 4 1 4 1 1 . 
6 6 6 6 6 6 6 6 6 6 4 6 4 6 6 . 
6 6 4 6 4 6 4 6 4 6 4 6 4 6 6 . 
6 f f 6 6 6 6 6 6 6 4 4 f f 6 . 
. f f . . . . . . . . . f f . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
bus.x = 120
bus.y = 115
coffee = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . 
. 1 1 1 f f f f f f f f 1 . . . . . . . . . . . . . . . . . . . 
. 1 f f f f f f f f 1 1 1 . . . . . . . . . . . . . . . . . . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . a a . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . a a a . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . 1 . . . . . . . . . a . a . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . 1 . . . . . a a . . a . a . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . 1 . . . . a a a a . a a a . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . 1 1 . . . . a a . a . . a . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . a . . . a . a . . a . . a . . . 
. . . . 1 1 1 1 1 1 . . . . . a . . . . a a . . . a a a a . . . 
. . . . 1 1 1 1 1 . . . . . a . . . . . a a . . . a a . . . . . 
. . . . . . . . . . . . a . a . . a a . . a . a . . . . . . . . 
. . . . . . . . . . . a . . . a a a . . . a a a . . . . . . . . 
. . . . . . . . . . . a a . . a a . . . . a a . . . . . . . . . 
. . . . . . . . . . . . a a . . a . . . . . . . . . . . . . . . 
. . . . . . a a a a . a a . . . a . . . . . . . . . . . . . . . 
. . . . . . a . . a a . a . . . a a . . . . . . . . . . . . . . 
. . a a . . a . . . a . a . . . . . . . . . . . . . . . . . . . 
. a a . a . a . . . a . a a . . . . . . . . . . . . . . . . . . 
. a . . . . a a . a a . . . . . . . . . . . . . . . . . . . . . 
. a . . . . . a a a . . . . . . . . . . . . . . . . . . . . . . 
. a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . a . . . a a . . . . . . . . . . . . . . . . . . . . . . . . 
. . a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
coffee.x = 75
coffee.y = 80
hotSauce = sprites.create(img`
. . 3 . . . . 2 . . . . . . . 3 . . . . . . 3 . . . . . . . . . 
. . 3 3 . . 6 6 6 . . . . . 3 . . . . . . . 3 . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . 3 . . . . 3 . . . . . . . . . 
. 3 3 . . 6 6 6 6 6 . . . . . . 3 . . . . . 3 . . . . . f f f f 
. . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . f f f f f . 
. . . . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . f f f f f . . 
. . . . 2 1 1 1 1 1 2 . . . 3 . . . . . . . . f f f f f . . . . 
. . . . 2 2 2 2 2 2 2 . . . 3 . . . . . . . f f f f f f f . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . f f . . . . f f . . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . . . . . . f f f . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 . . . . f f f . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . 2 2 2 2 . . f f f f . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . 2 2 2 . . . f f f . 
. . 2 2 2 2 2 1 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . f f . . 
. . 2 2 2 1 1 2 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . . . . . 
. . 2 2 1 1 2 2 2 2 f 2 2 f f f . 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f . . 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f f . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 1 f f f 2 f f f f . . . . . . . . . . 3 . . . . 
. . 2 2 2 2 2 1 1 2 f f f f . f f . . . . . . . . . . . 3 . . . 
. . 2 2 2 2 1 2 2 2 f f f . . f f f . . . . . . . . . . . . . . 
3 . 3 3 2 1 1 2 2 2 2 f f f . . f f . . . . . . . . . . . . 3 . 
. . 2 2 2 1 2 2 2 2 2 2 f f . . f . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 1 2 2 2 . . . . . 3 . . . . 3 . . . . . . . . 
. . 2 2 2 2 2 2 1 1 2 2 2 . . . . . 3 . . . . . . . . . . . . . 
. . 3 2 2 2 2 1 1 2 2 2 2 . . . 3 3 . . . . . 3 . . . . . . . . 
. . 3 2 2 2 2 1 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
3 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
hotSauce.x = 20
hotSauce.y = 40
me = sprites.create(img`
. . . . d d d d d d d d d . . . 
. . . d d d d d d d d d d d . . 
. . d d d d d d d d d d d d d . 
. . d d e e d d d d e e d d d . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
d d 8 8 d 1 d 8 8 8 d 1 d 8 8 d 
d d d 8 8 b d 8 d 8 8 b 8 8 d d 
. d d d 8 8 8 8 b d 8 8 8 d d . 
. d d d d d d b b d d d d d d . 
. d d d d d b b b d d d d d d . 
. . d d d d d d d d d d d d d . 
. . d d d 1 d d d d 1 d d d d . 
. . . d d d 1 1 1 1 d d d d . . 
. . . d d d d d d d d d d d . . 
. . . . d d d d d d d d d . . . 
. . . . . . d d d d d . . . . . 
`, SpriteKind.Player)
me.x = 16
me.y = 100
initials = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f . . . f f f f f f . . 
f f f f f . . . f f f f f f . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f f f f . . . . f f . . . . . . 
f f f f . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f f f f f . . . f f f f f f . . 
f f f f f . f . f f f f f f . f 
`, SpriteKind.Player)
initials.x = 33
initials.y = 110
walking = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . d d d . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . d d d d d . . . . . . . . 
. . . . . . . . . . . . . . . . . . . d d d c d . . . . . . . . 
. . . . . . . . . . . . . . . . . . . d d d d d d . . . . . . . 
. . . . . . . . . . . . . . . . 2 2 . d d d d d . . . . . . . . 
. . . . . . . . . . . . . . . 2 2 2 . d d 1 d . . . . . . . . . 
. . . . . . . . . . . . . . . 2 2 f f f d d . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f f f . . . . . d . . . . 
. . . . . . . . . . . . f f f 2 2 f f f . f . . . . f d . . . . 
. . . . . . . . . . . f f . 2 2 f f f f . f f . . f f . . . . . 
. . . . . . . . . . . f f . 2 2 f f f f . . f f f f . . . . . . 
. . . . . . . . . . . . f . . 2 f f f . . . . f f . . . . . . . 
. . . . . . . . . . . . d . . f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . d . . f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . f . . . . . f f . . . . . . . . . . 
. . . . . . . . . . . . . . f . . . . . . f . . . . . . . . . . 
. . . . . . . . . . . . . f f . . . . . f f . . . . . . . . . . 
. . . . . . . . . . . . f f f . . . . . f . . . . . . . . . . . 
. . . . . . . f 9 f f f f . . . . . . f . . . . . . . . . . . . 
. . . . . . . f 9 . . . . . . . . . f f . . . . . . . . . . . . 
. . . . . . . f 9 . . . . . . . . . f f . . . . . . . . . . . . 
. . . . . . . f 9 . . . . . . . . . 9 9 9 9 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
walking.x = 65
walking.y = 25
jS = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . 4 4 4 4 4 4 4 4 4 4 4 . 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 . . 4 4 4 4 4 4 5 5 5 5 5 5 4 
. 4 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 4 . . . . . . 4 4 4 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . . 4 4 4 4 . . . . . . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . . 4 4 4 4 . . . . . . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . 4 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . 4 4 4 . . . . . . . 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
jS.x = 125
jS.y = 23
sandals = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
6 6 6 6 . 6 6 6 . 6 6 6 . 6 . 6 6 . . 6 6 6 . . . . . . . . . . 
6 . . . . 6 . 6 . 6 . . . 6 6 6 . . . 6 . . . . . . . . . . . . 
6 6 6 6 . 6 . 6 . 6 . . . 6 6 6 . . . 6 6 6 . . . . . . . . . . 
. . . 6 . 6 . 6 . 6 . . . 6 6 6 6 . . . . 6 . . . . . . . . . . 
6 6 6 6 . 6 6 6 . 6 6 6 . 6 . . 6 . 6 6 6 6 . . . . . . . . . . 
. . . 9 8 9 8 9 9 8 9 . . . . . . . . . . . . . . . . . . . . . 
. . . 9 8 9 8 9 9 8 9 . . . . . . 6 6 . . 6 . . . . . . . . . . 
. . . 9 9 9 9 9 9 9 9 . . . . . . 6 . 6 . 6 . . . . . . . . . . 
. . . 9 9 9 8 9 9 8 9 . . . . . . 6 . . 6 6 . . . . . . . . . . 
. . . 9 8 9 9 9 9 9 9 . . . . . . 6 . . . 6 . . . . . . . . . . 
. . 6 6 6 9 6 6 9 9 6 6 . . 6 . 6 . . . . . . . . . . . . . . . 
. . 6 9 9 9 6 6 9 8 9 6 6 . 6 . 6 6 6 . . 6 6 . . . 6 . . 6 6 6 
. . 6 6 8 9 6 9 6 9 9 6 6 . 6 . 6 . 6 6 . 6 6 6 . . 6 . . 6 . . 
. . . 6 6 9 6 6 6 6 9 6 6 6 6 . 6 . . 6 . 6 . 6 . . 6 . . 6 6 . 
. . . 9 6 9 6 8 9 6 9 6 . 6 6 . 6 . 6 6 . 6 6 6 6 . 6 . . . 6 6 
. . 6 6 6 9 6 8 9 6 9 6 . . 6 . 6 6 6 . . 6 . . 6 . 6 6 6 6 . 6 
. . . 9 8 9 9 9 9 8 9 . . . . . . . . . . . . . . . . . . 6 6 6 
. . . 9 9 9 9 9 9 9 9 . . . . . . . . . . . . . . . . . . . . . 
. . f f 9 9 9 9 9 9 9 9 9 9 . f . . . . . . . . . . . . . . . . 
. . . 9 f f 9 9 9 9 9 f f f f 9 9 f f 9 9 9 9 9 9 9 . . . . . . 
. . . 9 9 9 f 9 9 f f f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 . . . . . 
. . . 9 9 9 f f f 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 . . . . . 
. . . 9 9 f f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 . . . . 
. . . 9 9 f 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 . . . . 
. . . . f 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 . . . . 
. . . f f f f f f f f f f f f f f f f f f f f f f f f f f . . . 
. . . . f f f f f f f f f f f f f f f f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sandals.x = 125
sandals.y = 66

// :end-solution
```

## Challenge
Create separate sprites and combine by placing to make a single large image (e.g. - sprites for head, body and legs combine to represent a person).

## What did we learn?

 1. Describe and Explain observations of sprite images in the JavaScript code. What do periods (**.**) represent?  
 2. What other blocks are available in the Sprite Blocks menu (list several)? For a block not used in collage, explain a hypothesis on what it does.

## Rubrics

### ~hint
Start on the left rubric column (5pts), if the work meets the rubric continue to the right (7pts, 9pts, 10pts). Award the sore of the right most rubric that is completed by the student.  

This means that to get the highest score student must pass **all** previous rubrics.
### ~

### Collage task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Collage | Collage has at least 5 sprites | Collage has at least 6 sprites with 1 placed in each quadrant | Collage has more than 6 sprites of various sizes and designs  | Collage strongly conveys information to viewer without needing explanation or completed the Challenge |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Mostly addressing Questions # 1 & 2, but parts are unclear or lack detail | Explanation address Questions 1 & #2 fully | Uses multiple examples and clear explanations |  Explanation uses an original, creative example or analogy or multiple Sprite blocks explained |

### Score = \_\_\_\_\_\_ /10

### ~hint
**Teacher Note**
Students skill in creating sprites is one key to engaging games. Consider additional practice with Sprite artistic creation for the next lesson and/or going forward.  Modifying some existing designs found from web searches will help students quick build skills.

Updating Sprites is a good activity for the students who finish early as well.  

**Add-on Lesson Ideas**

* Self Portrait (face or full character) image search online: "8 bit character" or "8 bit portrait" 
* logo (Favorite Brand, School , super hero) image search online: "8 bit logo"
* Animal (dog, cat, fish, penguin) image search online: "8 bit animal"
### ~