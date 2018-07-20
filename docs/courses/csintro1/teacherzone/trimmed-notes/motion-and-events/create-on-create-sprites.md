## Concept: Random Clouds - on created event with spawn SpriteKind 

## Example 2: random clouds
## Student Task #2: More Random Clouds

### ~hint

Students can use a local variable within ``||sprites:on created () of kind ()||`` event block since it is used only in the scope of that block of code (not accessible outside that code block of code).  This is variable scope, which is not a main concept for this lesson or for unit 1. 

For now we say the variable is used for a short time in the event and then goes away.  We will address local scope in later Arcade Intro CS units.

### ~

```blocks
// https://makecode.com/_4WwWAzA0sMs1

enum SpriteKind {
    Helicopter,
    Cloud,
    Bird,
    Player,
    Enemy
}
let agent: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onCreated(SpriteKind.Bird, function (newBird) {
    newBird.setImage(img`
. . . . . 6 . . 
. . . . 6 6 . . 
. . . 6 6 . . 6 
5 6 6 6 6 6 6 . 
. . . 6 6 . . 6 
. . . . 6 6 . . 
. . . . . 6 . . 
. . . . . . . . 
`)
    newBird.x = Math.randomRange(10, screen.width - 10)
    newBird.y = Math.randomRange(10, screen.height - 10)
})
sprites.onCreated(SpriteKind.Cloud, function (newCloud) {
    newCloud.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    newCloud.x = Math.randomRange(16, screen.width - 16)
    newCloud.y = Math.randomRange(20, screen.height - 75)
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Bird, function (sprite, otherSprite) {
    otherSprite.vy = -75
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += -1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += -1
})
// Control the copter with the + pad
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += 1
})
game.splash("Generated Clouds", "on Sprite created")
scene.setBackgroundColor(9)
agent = sprites.create(img`
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
. . . . . . . . . . . . . . e f . . e e e . . . . . . . . . . . 
. . . . f . . . . . . . . . e . . e e f f 1 1 . . . . . . . . . 
. . f f f f f f f f . . . . e e e 2 f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . e e e 2 2 2 f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . e e e 2 2 2 2 2 2 f 1 1 1 1 1 e . . . . . . . 
. . . . . f e e e e 2 2 2 2 2 2 2 2 f f 1 1 f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . . e e 2 2 2 2 2 2 e 2 2 2 2 2 2 f f 2 e . . . . . . . 
. . . . . . . e e 2 2 2 2 2 e e 2 2 2 2 2 2 2 e e . . . . . . . 
. . . . . . . . e e e e 2 e e e 2 2 2 2 2 2 e e . . . . . . . . 
. . . . . . . . . . . f e . . . e e e e e e . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Helicopter)
agent.setFlag(SpriteFlag.StayInScreen, true)
sprites.createEmptySprite(SpriteKind.Cloud)
sprites.createEmptySprite(SpriteKind.Cloud)
sprites.createEmptySprite(SpriteKind.Cloud)
sprites.createEmptySprite(SpriteKind.Cloud)
sprites.createEmptySprite(SpriteKind.Bird)
sprites.createEmptySprite(SpriteKind.Bird)
sprites.createEmptySprite(SpriteKind.Bird)
sprites.createEmptySprite(SpriteKind.Bird)
sprites.createEmptySprite(SpriteKind.Bird)
```
## What did we learn? [TODO - this is from overlap 2]

1.  Describe how a SpriteKind label is used in "spawning" a sprite using ``||Sprite:create empty sprite of kind ( )||`` block
2. Explain what the  ``||sprites:on created () of kind ()||`` block does.



## Rubrics


### Overlap task rubric [TODO from overlap 2 make unique]

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Overlap & Events 2 | fully competed 1a + b tasks|  fully completed all 3 tasks | Completed all 3 tasks and at least 1 Challenge | Completed all tasks and Challenge Code  |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric [todo - from overlap 2]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanations | answered questions but parts are unclear or lack detail | Explanations address both questions fully | all answers have clear explanations | included an exceptional explanation with original example, drawing or analogy |

### Score = \_\_\_\_\_\_ /10 