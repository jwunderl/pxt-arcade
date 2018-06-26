# loops in events

## Mountain Overlap

# TODO: Video - review some looping examples (a few), loop crash motion,  & show controller.dx() 

In these activities, the student will use:
* functions for everything!
* sprite kind 
* on kind overlap
* Loop to animate sprite movement

```blocks
// https://makecode.com/_dzEEJaXJiHmt or https://makecode.com/_aPFcv5JAj0Re in progress transition to Kind (need new kind-s)- removed tilemap
let rain: Sprite = null
let mountainside: Sprite = null
let landing: Sprite = null
let mySprite: Sprite = null
let other: Sprite = null
function setObjects() {
    createHelicopter()
    createBackground()
    createLandingPad()
}
function createHelicopter() {
    // helicopter is "mySprite"
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
    // place mySprite above Tilemap layer
    mySprite.z = 10
}
function mountainCrash() {
    crashStart()
    for (let i = 0; i < 20; i++) {
        continueCrash()
    }
    game.over()
}
function crashStart() {
    mySprite.setFlag(SpriteFlag.Ghost, true)
    mySprite.vx = 0
    mySprite.vy = 0
}
function createBackground() {
    // Tilemap to place cloud obstacles
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
}
function continueCrash() {
    mySprite.y += -2
    mySprite.x += -4
    pause(100)
    mySprite.y += -2
    mySprite.x += 1
    mySprite.image.flipY()
}
function landHelicopter() {
    info.changeScoreBy(1)
    mySprite.vx = 0
    mySprite.vy = 0
    mySprite.y += -1
    game.splash("Perfect Landing!")
}
function createLandingPad() {
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
}
function cloudBump() {
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
}
// splash screen  the A/B control instructions
game.splash("Cloud Collision", "A= Center, B = Stop")
setObjects()
landing.onOverlap(function (other) {
    landHelicopter()
})
// shock "animation" when sprite overlaps anything
mySprite.onOverlap(function (other) {
    cloudBump()
})
// danger mountain game over
mountainside.onOverlap(function (other) {
    mountainCrash()
})
game.onUpdate(function () {
    mySprite.x += controller.dx(50)
    mySprite.y += controller.dy(50)
})
```