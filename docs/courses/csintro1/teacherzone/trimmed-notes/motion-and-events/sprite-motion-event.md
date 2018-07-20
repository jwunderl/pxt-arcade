# Activity: Sprite Motion and Events 


## Change position with controller event  

In these activities, the student will use: 

* controller events
* increment x and y coordinates
* increment vx and vy velocity
* Motion short method
* stay on screen
* image flip (sprite image)

## Example 1: increment position left and right 
## Student Task #1: increment position Y-axis (up and down) 
```blocks
// https://makecode.com/_0y9YPV0sa2pm

enum SpriteKind {
    Player,
    Enemy
}
let agent: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.x += 3
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.x += -3
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.y += -3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.y += 3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.x = 80
    agent.y = 64
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.y += -15
})
agent = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . 6 6 6 6 6 6 6 . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```

## Sprite Motion Velocity
## Example 2: increment velocity left and right 
## Student Task #2: Increment Velocity Up and Down 
```blocks
// https://makecode.com/_MgWimJ0UjbvU

enum SpriteKind {
    Player,
    Enemy
}
let agent: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += -1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.x = 80
    agent.y = 64
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx = 0
    agent.vy = 0
})
agent = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . 6 6 6 6 6 6 6 . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
```


## Motion - short dx/dy code method

## Example 3: motion short dx/dy code method 

# Student Task #3: Create Velocity Motion (short method)

```blocks
// https://makecode.com/_XKKJ14Vdh3ei

enum SpriteKind {
    Player,
    Enemy
}
let ball: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.x = 80
    ball.y = 64
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.vx = 0
    ball.vy = 0
})
scene.setBackgroundColor(1)
ball = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 5 5 5 5 5 2 . . 
. 2 5 5 5 5 6 6 6 6 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 2 . . 
. 2 5 5 5 6 6 6 6 6 6 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 5 5 2 . . 
. 2 5 5 6 6 6 6 6 6 6 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 5 5 2 . . 
. 2 5 5 6 6 6 6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 5 5 2 . . 
2 2 5 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 5 5 2 2 . 
2 2 5 6 6 6 6 6 6 f 6 6 5 5 5 5 5 5 5 6 6 6 6 6 f 6 5 5 5 2 2 . 
2 2 5 5 5 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 6 6 6 5 5 5 5 5 2 2 . 
2 2 5 5 5 5 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 a a 2 a a 2 a a 2 a a 2 a 2 a 2 a 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 a a 2 a a 2 a a 2 a a 2 a 2 a 2 a 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
ball.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdate(function () {
    ball.vx += controller.dx()
    ball.vy += controller.dy()
})
```

## Flip Image 

## Example 4: Image Flip with button press event
# Student Task 4: Image Flip with motion

```blocks
// https://makecode.com/_4V9W91ax1RP8

enum SpriteKind {
    Player,
    Enemy
}
let agent: Sprite = null
function fliphorizontal() {
    agent.image.flipX()
    pause(200)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    // for (let i = 0; i < 19; i++) { fliphorizontal() }
    fliphorizontal()
})
scene.setBackgroundColor(6)
agent = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 7 2 2 2 7 2 2 . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 2 2 8 2 2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 8 8 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 9 9 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . 4 4 4 4 4 2 2 2 2 2 4 4 4 4 4 . . . . . . . . . . 
. . . . . . . 4 4 4 4 4 4 4 2 4 4 4 4 4 4 4 . . . . . . . . . . 
. . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 
. . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 
. . . . . . . 4 4 4 . 4 4 4 4 4 4 4 . 4 4 4 . . . . . . . . . . 
. . . . . . . 4 4 4 . 4 4 4 4 4 4 4 . 4 4 4 . . . . . . . . . . 
. . . . . . . 4 4 4 . 4 4 4 4 4 4 4 . 4 4 4 . . . . . . . . . . 
. . . . . . . 4 4 4 . 4 4 4 4 4 4 4 . 4 4 4 . . . . . . . . . . 
. . . . . . . 4 4 4 . 4 4 4 4 4 4 4 . a a a . . . . . . . . . . 
. . . . . . . 4 4 4 . 4 4 4 4 4 4 4 . a . a . . . . . . . . . . 
. . . . . . . a a a . 4 4 4 4 4 4 4 . a a a . . . . . . . . . . 
. . . . . . . a . a . 4 4 4 4 4 4 4 . . . . . . . . . . . . . . 
. . . . . . . a a a . 7 7 . . . . 7 7 . . . . . . . . . . . . . 
. . . . . . . . . . . 7 7 . . . . 7 7 . . . . . . . . . . . . . 
. . . . . . . . . . . 7 7 . . . . 7 7 . . . . . . . . . . . . . 
. . . . . . . . . . . 7 7 . . . . 7 7 . . . . . . . . . . . . . 
. . . . . . . . . . . 7 7 . . . . 7 7 . . . . . . . . . . . . . 
. . . . . . . . . . . 7 7 . . . . 7 7 . . . . . . . . . . . . . 
. . . . . . . . . . . 7 7 . . . . 7 7 . . . . . . . . . . . . . 
. . . . . . . . . . d d d . . . . 7 7 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 7 7 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d d d . . . . . . . . . . . . . 
`, SpriteKind.Player)

```

## What did we learn? 

1. Describe how an events can be used to run code using an example.
2. Describe the difference between changing position and changing velocity.
3. In using flip, the sprite is **not** flipped.  What is flipped? Explain how you know.  


## Rubrics


### Motion event tasks rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| motion-event  | completed 3 or more Tasks|  completed all 4 tasks properly | completed all tasks and 1 or more challenges | Completed all tasks and Challenge Code  |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric 

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 