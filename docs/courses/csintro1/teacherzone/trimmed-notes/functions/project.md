# Functions Project

Example Projects

## [Jumper](https://makecode.com/_g6f2udLhCWaL)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let projectile: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
function jump() {
    mySprite.y += -30
    pause(600)
    mySprite.y += 30
}
game.splash("Press A to jump")
mySprite = sprites.create(img`
. . . . . . 1 1 1 1 . . . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 . . . 1 1 . . . 1 1 1 . 
. 1 1 1 . . . 1 1 . . . 1 1 1 . 
1 1 1 1 . . . 1 1 . . . 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 . 1 1 1 1 1 1 1 1 . 1 1 1 
. 1 1 . . . 1 1 1 1 . . . 1 1 . 
. 1 1 1 . . . . . . . . 1 1 1 . 
. . 1 1 1 . . . . . . 1 1 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(32, scene.screenHeight() - 8)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectile(img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 2 . . . . . . 
`, -100, 0, SpriteKind.Enemy)
    projectile.y = scene.screenHeight() - 8
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
```

## [Dodger](https://makecode.com/_51vAwshDXEJb)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let level = 0
let mySprite: Sprite = null
function levelStart() {
    game.splash("Level " + level)
    info.setScore(level)
    info.startCountdown(10)
    for (let i = 0; i < level * 8; i++) {
        projectile = sprites.createProjectile(img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 2 . . . . . . 
`, -100, 0, SpriteKind.Enemy)
        projectile.y = Math.randomRange(0, scene.screenHeight())
        pause(1000 / level)
    }
}
info.onCountdownEnd(function () {
    level += 1
    levelStart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over()
})
mySprite = sprites.create(img`
. . . . . . 1 1 1 1 . . . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 . . . 1 1 . . . 1 1 1 . 
. 1 1 1 . . . 1 1 . . . 1 1 1 . 
1 1 1 1 . . . 1 1 . . . 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 . 1 1 1 1 1 1 1 1 . 1 1 1 
. 1 1 . . . 1 1 1 1 . . . 1 1 . 
. 1 1 1 . . . . . . . . 1 1 1 . 
. . 1 1 1 . . . . . . 1 1 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
level = 1
levelStart()
```


## What did we learn? 

1. What did you learn making a MVP version of the game?  What was useful and what was difficult?
2. Were items in the list of elements of a game to use in the game were not used?  Why? If all were used explain which ones were essential to the game versus less essential elements of a game.

### ~hint

### Possible Answers

Answers **Vary Widely**

### ~