# Activity: Loops in events - Mountain crash


# TODO: Video - review some looping examples (a few), loop crash motion,  & show controller.dx() 

In these activities, the student be introduced to:

* ``||functions:Functions||``
* Loops to animate sprite movement

## Concept: Mountain Overlap

We can easily make dynamic motion effects such as a bump, crash, wobble, or spin using loops.

## Example: Mountain Overlap Crashing Loop

https://makecode.com/_aPFcv5JAj0Re 

```blocks
enum SpriteKind {
    Player,
    Cloud,
    Mountain,
    Pad,
    Rain,
    Enemy
}
let rain: Sprite = null
let mountainside: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let _ = 0
let landing: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
function setObjects() {
    createHelicopter()
    createBackground()
    createLandingPad()
}
function continueCrash() {
    mySprite.y += -2
    mySprite.x += -4
    mySprite.image.flipY()
    pause(100)
    mySprite.y += -2
    mySprite.x += 1
}
function landHelicopter() {
    info.changeScoreBy(1)
    mySprite.vx = 0
    mySprite.vy = 0
    mySprite.y += -4
    game.splash("Perfect Landing!")
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mountain, function (sprite, otherSprite) {
    mountainCrash()
})
function mountainCrash() {
    mySprite.vx = 0
    mySprite.vy = 0
    mySprite.setFlag(SpriteFlag.Ghost, true)
    for (let i = 0; i < 20; i++) {
        continueCrash()
        pause(100)
    }
    game.over()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cloud, function (sprite, otherSprite) {
    cloudBump()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pad, function (sprite, otherSprite) {
    landHelicopter()
})
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
. . f f f f f f f f . . . . b b b 5 f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . b b b 5 5 5 f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . b b b 5 5 5 5 5 5 f 1 1 1 1 1 b . . . . . . . 
. . . . . f b b b b 5 5 5 5 5 5 5 5 f f 1 1 f 5 b . . . . . . . 
. . . . . b b 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 b . . . . . . . 
. . . . . b 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 b . . . . . . . 
. . . . . b b 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 b . . . . . . . 
. . . . . . b b 5 5 5 5 5 5 b 5 5 5 5 5 5 f f 5 b . . . . . . . 
. . . . . . . b b 5 5 5 5 5 b b 5 5 5 5 5 5 5 b b . . . . . . . 
. . . . . . . . b b b b 5 b b b 5 5 5 5 5 5 b b . . . . . . . . 
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
. . f f f f f f f f . . . . b b b 5 f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . b b b 5 5 5 f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . b b b 5 5 5 5 5 5 f 1 1 1 1 1 b . . . . . . . 
. . . . . f b b b b 5 5 5 5 5 5 5 5 f f 1 1 f 5 b . . . . . . . 
. . . . . b b 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 b . . . . . . . 
. . . . . b 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 b . . . . . . . 
. . . . . b b 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 b . . . . . . . 
. . . . . . b b 5 5 5 5 5 5 b 5 5 5 5 5 5 f f 5 b . . . . . . . 
. . . . . . . b b 5 5 5 5 5 b b 5 5 5 5 5 5 5 b b . . . . . . . 
. . . . . . . . b b b b 5 b b b 5 5 5 5 5 5 b b . . . . . . . . 
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
    mySprite.x -= mySprite.vx/2
mySprite.y -= mySprite.vy/2
}
function createBackground() {
    scene.setBackgroundColor(3)
    cloud1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 9 . . . . . . 
. . . 1 1 9 9 9 1 1 1 1 1 1 . . 
. 9 1 1 9 9 9 9 9 9 9 9 9 1 1 . 
. 1 9 9 9 1 9 9 9 1 1 9 9 9 1 . 
1 1 9 9 1 1 1 1 1 9 9 9 1 1 1 . 
1 1 9 9 9 9 9 1 1 9 1 9 1 1 . . 
. 1 1 1 1 9 9 9 9 9 9 9 1 9 . . 
. . . . 1 1 9 9 1 1 9 9 1 . . . 
. . . . . . 9 9 9 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
    cloud1.x = 20
    cloud1.y = 20
    cloud2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 9 . . . . . . 
. . . 1 1 9 9 9 1 1 1 1 1 1 . . 
. 9 1 1 9 9 9 9 9 9 9 9 9 1 1 . 
. 1 9 9 9 1 9 9 9 1 1 9 9 9 1 . 
1 1 9 9 1 1 1 1 1 9 9 9 1 1 1 . 
1 1 9 9 9 9 9 1 1 9 1 9 1 1 . . 
. 1 1 1 1 9 9 9 9 9 9 9 1 9 . . 
. . . . 1 1 9 9 1 1 9 9 1 . . . 
. . . . . . 9 9 9 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
    cloud2.x = 50
    cloud2.y = 50
    cloud3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 9 . . . . . . 
. . . 1 1 9 9 9 1 1 1 1 1 1 . . 
. 9 1 1 9 9 9 9 9 9 9 9 9 1 1 . 
. 1 9 9 9 1 9 9 9 1 1 9 9 9 1 . 
1 1 9 9 1 1 1 1 1 9 9 9 1 1 1 . 
1 1 9 9 9 9 9 1 1 9 1 9 1 1 . . 
. 1 1 1 1 9 9 9 9 9 9 9 1 9 . . 
. . . . 1 1 9 9 1 1 9 9 1 . . . 
. . . . . . 9 9 9 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
    cloud3.x = 100
    cloud3.y = 30
    // danger mountain - hit it and the game is over
    mountainside = sprites.create(img`
. . . . . . . . . . . . . . 1 1 
. . . . . . . . . . . . . 1 1 1 
. . . . . . . . . . . . 7 1 e 1 
. . . . . . . . . . . . 1 1 e 1 
. . . . . . . . . . . 7 7 1 e 1 
. . . . . . . . . . 7 7 e 1 1 e 
. . . . . . . . . 7 7 e e e 1 e 
. . . . . . . . . 7 e e e e e e 
. . . . . . . . 7 7 e e e e e e 
. . . . . . . . 7 e e e e e e e 
. . . . . . . 7 7 e e e 7 7 e e 
. . . . . . . 7 e e e e 7 e e e 
. . . . . . . 7 e e e e 7 e e e 
. . . . . . 7 e e e e 7 7 e e e 
. . . . . . 7 e e e e 7 e e e e 
. . . . . . 7 e e e 7 7 e e e e 
. . . . . 7 7 e e e 7 e e e e e 
. . . . . 7 e e e e 7 e e e e e 
. . . . . 7 e e e e e e e e e e 
. . . . 7 e e e 7 e e e e 7 e e 
. . . . 7 e e e 7 e e e e 7 e e 
. . . 7 7 e e 7 7 e e e 7 7 e e 
. . . 7 e e e 7 e e e e 7 e e e 
. . 7 e e e e 7 e e e e 7 e e e 
. 7 7 e e e 7 7 e e e 7 7 e e e 
. 7 e e e e 7 e e e e 7 e e e e 
. 7 e e e 7 7 e e e e e e e e e 
7 e e e e 7 e e e e e e e e e e 
7 e e e 7 e e e e e e e e e e e 
7 e e e 7 e e e e e e e e e e e 
7 e e e e e e e e e e e e e e e 
7 e e e e e e e e e e e e e e e 
`, SpriteKind.Mountain)
    mountainside.x = 152
    mountainside.y = 104
    rain = sprites.create(img`
. . . . . . . . . . . . . . . 9 
. . 9 . . . . . . 9 . . . . . 9 
9 . 9 . . 9 . . . 9 . . . . . 9 
9 . . . . 9 . . . . . . . . . . 
9 . . . . 9 . . . . . . 9 . . . 
9 . . . . . . . . 9 . . 9 . . 9 
. . 9 . . . . . . 9 . . 9 . . . 
. . 9 . . . . . . 9 . . . . . . 
. . . . . . 9 . . 9 . . 9 . . 9 
. . . . . . 9 . . . . . 9 . . 9 
. . 9 . . . . . . . . . 9 . . . 
9 . 9 . 9 . . . . 9 . . 9 . . . 
9 . 9 . 9 . . . . 9 . . . . . 9 
9 . . . 9 . 9 . . 9 . . . 9 . 9 
9 . . . . . 9 . . . . . . 9 . . 
. . . . . . . . . . . . . 9 . . 
`, SpriteKind.Rain)
    rain.x = 104
    rain.y = 40
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
. . f f f f f f f f . . . . b b b 5 f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . b b b 5 5 5 f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . b b b 5 5 5 5 5 5 f 1 1 1 1 1 b . . . . . . . 
. . . . . f b b b b 5 5 5 5 5 5 5 5 f f 1 1 f 5 b . . . . . . . 
. . . . . b b 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 b . . . . . . . 
. . . . . b 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 b . . . . . . . 
. . . . . b b 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 b . . . . . . . 
. . . . . . b b 5 5 5 5 5 5 b 5 5 5 5 5 5 f f 5 b . . . . . . . 
. . . . . . . b b 5 5 5 5 5 b b 5 5 5 5 5 5 5 b b . . . . . . . 
. . . . . . . . b b b b 5 b b b 5 5 5 5 5 5 b b . . . . . . . . 
. . . . . . . . . . . f b . . . b b b b b b . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
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
`, SpriteKind.Pad)
    landing.y = 132
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 80
    mySprite.y = 64
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 0
    mySprite.vy = 0
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1
})
_ = null
let mySprite: Sprite = null
// splash screen  the A/B control instructions
game.splash("Cloud Collision", "A= Center, B = Stop")
setObjects()

```