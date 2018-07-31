# Projectile Project

Example Project

https://makecode.com/_EW28qDiCFLXw 

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Ped,
    Safe
}
let item: Sprite = null
let ped: Sprite = null
let projectile: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Ped, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.say("ow!", 1000)
    otherSprite.say("beep beep", 500)
    sprite.image.flipY()
})
sprites.onOverlap(SpriteKind.Safe, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.say("My Car!", 1000)
})
scene.setBackgroundColor(1)
ped = sprites.create(img`
. . . . . . c c c . . . . . . . 
. . . . c c c c c . . . . . . . 
. . . . . . f 4 4 . . . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . 9 9 9 9 9 . . . . . . 
. . . 9 9 9 9 9 9 9 9 . . . . . 
. 8 8 9 . . 9 9 9 . 9 9 . . . . 
. 8 8 . . . 9 9 9 . . 9 . . . . 
. . . . . . 9 9 9 . . 9 . . . . 
. . . . . b b b b . 8 8 . . . . 
. . . b b b . . b . 8 8 . . . . 
. . . b . . . . b b . . . . . . 
f . . b . . . . . b b b . . . . 
. . f f . . . . . . f f . . . . 
`, SpriteKind.Ped)
ped.y = 110
ped.x = 40
info.startCountdown(15)
game.onUpdateInterval(3000, function () {
    projectile = sprites.createProjectile(img`
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
. . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . 2 . 2 . . . . . . . . . . . . . 2 . 2 2 . . . . 
. . . . . . . 2 . . 2 . . . . . . . . . . . . . 2 . . . 2 2 . . 
. . . . . . 2 . . . 2 . . . . . . . . . . . . . 2 . . . . . 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 
2 2 2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f 2 
2 2 2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 
. . . . f f f . . . . . . . . . . . . . . . . . . . . . f f f . 
. . . . . f . . . . . . . . . . . . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, -24, 0, SpriteKind.Enemy, item)
    projectile.y += Math.randomRange(-5, 5)
})
game.onUpdate(function () {
    ped.y += controller.dy(25)
})
```

## Student Task #1:

## What did we learn? 

1. What did you learn making a MVP version of the game?  What was useful and what was difficult?
2. Were items in the list of elements of a game to use in the game were not used?  Why? If all were used explain which ones were essential to the game versus less essential elements of a game.

### ~hint

### Possible Answers

Answers **Vary Widely**

1. Projectiles can be made easily.  Projectiles are better with random placement and/or velocity. Say speech bubbles sometimes get in the way of games. Learned 
2. Didn't have a Projectile emit from a sprite - takes time to make it look good. Didn't use Ghost since I wanted the overlaps. The basic Projectile is very useful in making the game dynamic- especially when used with Random....

### ~