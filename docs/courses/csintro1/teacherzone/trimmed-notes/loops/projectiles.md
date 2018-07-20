# Activity: Projectile Sprites

In this activity the student will implement:

* projectile sprites
* onUpdate 
* set sprite kind
* onOverlap kind
* on game update every
* pick random

## Concept: Flying Birds!
## Example: Bird projectile
## Student Task 1: Make a ball fall down
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let item: Sprite = null
let projectile: Sprite = null
let sprite: Sprite = null
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.say("Hello!")
})
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 8 9 9 9 8 9 8 . . . . 
. . 8 9 9 8 9 8 9 8 9 9 8 . . . 
. . . 8 9 8 9 9 9 8 9 8 . . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 50, SpriteKind.Player, item)
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 3 2 2 . . . . . . 
. . . . 2 3 3 3 3 3 2 . . . . . 
. . . 2 3 2 2 2 2 2 3 2 . . . . 
. . . 2 3 2 3 3 3 2 3 2 . . . . 
. . 2 3 3 2 3 2 3 2 3 3 2 . . . 
. . . 2 3 2 3 3 3 2 3 2 . . . . 
. . . 2 3 2 2 2 2 2 3 2 . . . . 
. . . . 2 3 3 3 3 3 2 . . . . . 
. . . . . 2 2 3 2 2 . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, -50, SpriteKind.Player, item)
```

## Student Task 2: add vertical projectiles that move across the screen
```block
enum SpriteKind {
    Player,
    Enemy
}
let item: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (playerSprite, foodSprite) {
    game.over()
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.y = 100
game.onUpdate(function () {
    mySprite.x += controller.dx()
})
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectile(img`
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
`, 0, 50, SpriteKind.Enemy, item)
//    projectile = sprites.createProjectile(img` // Challenge solution
//d d d d d d d d 
//d d d d d d d d 
//d d d d d d d d 
//d d d d d d d d 
//d d d d d d d d 
//d d d d d d d d 
//d d d d d d d d 
//d d d d d d d d 
//`, 0, 40 + Math.randomRange(0, 20), SpriteKind.Enemy, item)
    projectile.x = Math.randomRange(0, scene.screenWidth())
    info.changeScoreBy(1)
})
```

## Projectiles as sprites
## Student Task 3: Projectiles with loops
### ~hint

Ask the students why this creates 13 projectiles, instead of just 12.
Answer: there is an extra value because it is including both 0 and 12.

### ~

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
for (let index = 0; index <= 12; index++) {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 6 6 6 6 6 6 6 6 . . . . . . . 
. 6 8 8 8 8 8 8 8 6 . . . . . . 
. 6 8 6 6 6 6 6 6 8 6 . . . . . 
. 6 8 6 6 6 6 6 6 6 8 6 . . . . 
. 6 8 6 6 6 6 6 6 8 6 . . . . . 
. 6 8 8 8 8 8 8 8 6 . . . . . . 
. 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 40, 0, SpriteKind.Player)
    projectile.y = index * 10
    pause(300)
}
```

## Student Task 4: Water balloons
```blocks
enum SpriteKind {
    Player,
    Enemy,
    Balloon,
    Splash
}
let projectile: Sprite = null
let yDirection = 0
let xDirection = 0
let balloon: Sprite = null
let block: Sprite = null
sprites.onOverlap(SpriteKind.Balloon, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
    for (let index = 0; index <= 50; index++) {
        xDirection = Math.randomRange(0, 100) - 50
        yDirection = Math.randomRange(0, 100) - 50
        projectile = sprites.createProjectile(img`
9
`, xDirection, yDirection, SpriteKind.Splash, sprite)
        projectile.setFlag(SpriteFlag.Ghost, true)
    }
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.vx = 40
    balloon.vy = -50
    balloon.ay = 40
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.destroy()
    balloon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . 8 9 8 8 9 9 8 9 8 . . . . 
. . 8 9 9 8 8 8 9 8 9 9 8 . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Balloon)
    balloon.x += -50
})
scene.setBackgroundColor(6)
block = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 1 2 2 1 1 2 2 2 1 2 1 1 2 1 f 
f 1 2 1 2 1 2 1 2 1 2 2 1 2 1 f 
f 1 2 1 2 1 2 2 2 1 2 1 2 2 1 f 
f 1 2 2 1 1 2 1 2 1 2 1 1 2 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 2 2 2 1 2 2 2 1 2 2 2 1 1 f 
f 1 2 1 1 1 2 1 1 1 2 1 2 1 1 f 
f 1 2 1 2 1 2 2 1 1 2 2 2 1 1 f 
f 1 2 2 2 1 2 2 2 1 2 1 1 2 1 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
block.x += 50
balloon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . 8 9 8 8 9 9 8 9 8 . . . . 
. . 8 9 9 8 8 8 9 8 9 9 8 . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Balloon)
balloon.x += -50
```

## What did we learn? [create 2 questions]

1. Describe two benefits of using projectiles rather than normal sprites.  
2. How did using a loop in this section help reduce the amount of blocks that were used?
3. Why does making a sprite have a random velocity in both the x and y directions cause the sprite to move in a random direction? How would limiting the projectile to only positive directions change this?
4. Challenge: Create a hypothesis on why making projectiles have ``||sprite:ghost on||`` might be make your game run faster than leaving it off.

### ~hint

Does the game need to check whether a sprite is overlapping another if either is a ghost?

### ~


## Rubrics


### Projectiles task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
|   | Student made the ball fall down and another sprite move up in task 1 | Student made meteors fall from top, and changed score successfully in task 2 | Student successfully made the water balloon burst into around 50 splashes in task 3| Completed Challenge Code in tasks 1 and 2 |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric 
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | all answers have clear explanations |  Addressed challenge question reasonably |

### Score = \_\_\_\_\_\_ /10 
