
In this activity we will introduce collisions and use both collisions and on overlap events to update:
* on collision
* more onOverlap
* info section: score (life?)
* And add sprite images and update sprite images in our game  

```blocks
/* *********************************************************
*          Cloud Collision & Overlap Events                *
*         https://makecode.com/_4p5ieCEMAY2T               *
*  Introduces Obstacle Sprites, ghost flag                 *
*  onOverlap, onCollision                                  *
*                                                          *
*   - will need to un-comment onOverlap code at bottom     *
*     and comment onCollison code to toggle the demo       *
***********************************************************/

let mountainside: Sprite = null
let rain: Sprite = null
let landing: Sprite = null
let mySprite: Sprite = null
let other: Sprite = null
// Control the copter with the + pad  
// TODO: make into Function like previously - keep as velocity
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 80
    mySprite.y = 64
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 0
    mySprite.vy = 0
})

// splash screen  the A/B control instructions
game.splash("Cloud Collision", "A= Center, B = Stop")
// helicoptor is "mySprite"
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . 
. . . . . f f f f . . . . . . . . . f f f f f f f . . . . . . . 
. . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . b f . . b b b . . . . . . . . . . . 
. . . . f . . . . . . . . . b . . b b f f 1 1 . . . . . . . . . 
. . f f f f f f f f . . . . b b b d f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . b b b d d d f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . b b b d d d d d d f 1 1 1 1 1 b . . . . . . . 
. . . . . f b b b b d d d d d d d d f f 1 1 f d b . . . . . . . 
. . . . . b b d d d d d d d d d d d f f f f f d b . . . . . . . 
. . . . . b d d d d d d d d d d d d f f f f f d b . . . . . . . 
. . . . . b b d d d d d d d d d d d f f f f f d b . . . . . . . 
. . . . . . b b d d d d d d b d d d d d d f f d b . . . . . . . 
. . . . . . . b b d d d d d b b d d d d d d d b b . . . . . . . 
. . . . . . . . b b b b d b b b d d d d d d b b . . . . . . . . 
. . . . . . . . . . . f b . . . b b b b b b . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
// place mySprite above tilemap layer
mySprite.z = 10
// Tilemap to place cloud obstacle
scene.setTileMap(img`
3 3 3 3 3 3 3 3 3 f 
3 f 3 3 3 3 f 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
f 3 3 f 3 3 3 3 3 f 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 f 3 3 3 3 f 3 3 
`)
scene.setTile(15, img`
3 3 3 1 1 1 1 1 1 3 1 1 1 1 1 3 
3 1 1 1 2 1 2 2 1 1 1 2 2 2 2 1 
3 3 1 1 2 2 2 2 2 1 1 2 1 1 1 1 
3 3 3 1 1 2 2 1 2 1 1 2 1 1 3 3 
3 3 3 3 1 1 1 1 1 1 2 2 1 1 3 3 
3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 1 1 1 1 1 1 1 3 3 3 3 3 3 
1 1 3 1 1 1 1 1 1 1 1 3 3 3 3 3 
1 1 1 1 1 1 1 2 1 1 1 1 1 1 3 3 
1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 3 
1 2 2 1 1 2 1 1 1 1 1 1 1 1 1 1 
1 2 1 1 1 2 1 1 1 1 2 2 2 2 1 1 
1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 
3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
3 3 3 1 1 1 1 3 3 1 1 1 1 1 1 1 
`, true)
// Landing pad drawn on top of 32x32 image placed so
// top of Landing sprite is at bottom of screen
landing = sprites.create(img`
d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 
d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 d 6 
. . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
landing.y = 140
rain = sprites.create(img`
. . . . . . . . . . . . . . . 2 
. . 2 . . . . . . 2 . . . . . 2 
2 . 2 . . 2 . . . 2 . . . . . 2 
2 . . . . 2 . . . . . . . . . . 
2 . . . . 2 . . . . . . 2 . . . 
2 . . . . . . . . 2 . . 2 . . 2 
. . 2 . . . . . . 2 . . 2 . . . 
. . 2 . . . . . . 2 . . . . . . 
. . . . . . 2 . . 2 . . 2 . . 2 
. . . . . . 2 . . . . . 2 . . 2 
. . 2 . . . . . . . . . 2 . . . 
2 . 2 . 2 . . . . 2 . . 2 . . . 
2 . 2 . 2 . . . . 2 . . . . . 2 
2 . . . 2 . 2 . . 2 . . . 2 . 2 
2 . . . . . 2 . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
`)
rain.x = 104
rain.y = 40

// danger mountain - hit it and the game is over
mountainside = sprites.create(img`
. . . . . . . . . . . . . . 1 1 
. . . . . . . . . . . . . 1 1 1 
. . . . . . . . . . . . 7 1 8 1 
. . . . . . . . . . . . 1 1 8 1 
. . . . . . . . . . . 7 7 1 8 1 
. . . . . . . . . . 7 7 8 1 1 8 
. . . . . . . . . 7 7 8 8 8 1 8 
. . . . . . . . . 7 8 8 8 8 8 8 
. . . . . . . . 7 7 8 8 8 8 8 8 
. . . . . . . . 7 8 8 8 8 8 8 8 
. . . . . . . 7 7 8 8 8 7 7 8 8 
. . . . . . . 7 8 8 8 8 7 8 8 8 
. . . . . . . 7 8 8 8 8 7 8 8 8 
. . . . . . 7 8 8 8 8 7 7 8 8 8 
. . . . . . 7 8 8 8 8 7 8 8 8 8 
. . . . . . 7 8 8 8 7 7 8 8 8 8 
. . . . . 7 7 8 8 8 7 8 8 8 8 8 
. . . . . 7 8 8 8 8 7 8 8 8 8 8 
. . . . . 7 8 8 8 8 8 8 8 8 8 8 
. . . . 7 8 8 8 7 8 8 8 8 7 8 8 
. . . . 7 8 8 8 7 8 8 8 8 7 8 8 
. . . 7 7 8 8 7 7 8 8 8 7 7 8 8 
. . . 7 8 8 8 7 8 8 8 8 7 8 8 8 
. . 7 8 8 8 8 7 8 8 8 8 7 8 8 8 
. 7 7 8 8 8 7 7 8 8 8 7 7 8 8 8 
. 7 8 8 8 8 7 8 8 8 8 7 8 8 8 8 
. 7 8 8 8 7 7 8 8 8 8 8 8 8 8 8 
7 8 8 8 8 7 8 8 8 8 8 8 8 8 8 8 
7 8 8 8 7 8 8 8 8 8 8 8 8 8 8 8 
7 8 8 8 7 8 8 8 8 8 8 8 8 8 8 8 
7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
mountainside.x = 154
mountainside.y = 114
landing.onOverlap(function (other) {
    info.changeScoreBy(1)
    mySprite.vx = 0
    mySprite.vy = 0
    mySprite.y += -1
    game.splash("Perfect Landing!")
})
// shock "animation" when sprite overlaps anything
mySprite.onOverlap(function (other) {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b . 
. b b . . . . . . . . . . . . . . . . . . . . . . . . b b . . . 
. . . b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . 
. . . . . f f f f . . . . . . . . . f f f f f f f . . . . . . . 
. . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . b f . . b b b . . . . . . . . . . . 
. . . . f . . . . . . . . . b . . b b f f 1 1 . . . . . . . . . 
. . f f f f f f f f . . . . b b b d f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . b b b d d d f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . b b b d d d d d d f 1 1 1 1 1 b . . . . . . . 
. . . . . f b b b b d d d d d d d d f f 1 1 f d b . . . . . . . 
. . . . . b b d d d d d d d d d d d f f f f f d b . . . . . . . 
. . . . . b d d d d d d d d d d d d f f f f f d b . . . . . . . 
. . . . . b b d d d d d d d d d d d f f f f f d b . . . . . . . 
. . . . . . b b d d d d d d b d d d d d d f f d b . . . . . . . 
. . . . . . . b b d d d d d b b d d d d d d d b b . . . . . . . 
. . . . . . . . b b b b d b b b d d d d d d b b . . . . . . . . 
. . . . . . . . . . . f b . . . b b b b b b . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . 
. . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . b . . . . . . . . . . . . . . . . . . . . . . . . b . . . . 
. b . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
    pause(100)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . 
. . . . . f f f f . . . . . . . . . f f f f f f f . . . . . . . 
. . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . b f . . b b b . . . . . . . . . . . 
. . . . f . . . . . . . . . b . . b b f f 1 1 . . . . . . . . . 
. . f f f f f f f f . . . . b b b d f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . b b b d d d f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . b b b d d d d d d f 1 1 1 1 1 b . . . . . . . 
. . . . . f b b b b d d d d d d d d f f 1 1 f d b . . . . . . . 
. . . . . b b d d d d d d d d d d d f f f f f d b . . . . . . . 
. . . . . b d d d d d d d d d d d d f f f f f d b . . . . . . . 
. . . . . b b d d d d d d d d d d d f f f f f d b . . . . . . . 
. . . . . . b b d d d d d d b d d d d d d f f d b . . . . . . . 
. . . . . . . b b d d d d d b b d d d d d d d b b . . . . . . . 
. . . . . . . . b b b b d b b b d d d d d d b b . . . . . . . . 
. . . . . . . . . . . f b . . . b b b b b b . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
})
// danger mountain game over
mountainside.onOverlap(function (other) {
    game.over()
})
```