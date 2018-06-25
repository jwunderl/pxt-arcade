# Activity: Sprite Motion


## Sprite Motion - position  
# TODO video
update position x,y coordinates

In this activities, the student will use: 

* controller events
* set coordinates
* increment x and y coordinates
* increment vx and vy velocity
* Motion short method
* stay on screen
* image flip TODO: work this in https://makecode.com/_CfrafUELVWuh

```block
// :solution
// https://makecode.com/_LVdiagK4jCxW

enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x += 3
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x += -3
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.y += -3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.y += 3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x = 80
    sprite.y = 64
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.y += -15
})
sprite = sprites.create(img`
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

// :end-solution
```

## Sprite Motion Velocity
update velocity vx,yy 

```block
// :solution
// https://makecode.com/_gJrFU7eX7iu6


enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx += -1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vy += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x = 80
    sprite.y = 64
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx = 0
    sprite.vy = 0
})
sprite = sprites.create(img`
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

// :end-solution
```

## Example: Motion (short method)
We know how motion works now by capturing the key pad events and incrementing (or decrementing) a location coordinate. Now that we understand how it works we can use a shorter method.

```block

enum SpriteKind {
    Player,
    Enemy
}
let ball: Sprite = null
scene.setBackgroundColor(1)
ball = sprites.create(img`
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
game.onUpdate(function () {
    ball.x += controller.dx()
    ball.y += controller.dy()
})


```

# Student Task: Create Velocity Motion (short method)
1. start with Motion (short method) example above or similar code
2. change the key pad motion to creating a velocity (item keeps moving at constant "speed")
3. make the sprite stay in the screen boundary
4. Challenge: add button events for Stop motion and Center sprite. Also, make a better sprite than a ball!

```block
// :solution
// https://makecode.com/_33Yb8iL6jV6x

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

// :end-solution
```

## Example: Image Flip

```block
let sprite: Sprite = null
function fliphorizontal() {
    sprite.image.flipX()
    pause(200)
}
scene.setBackgroundColor(9)
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    /*  for (let i = 0; i < 19; i++) {
      fliphorizontal()
    }*/
    fliphorizontal()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {

})
sprite = sprites.create(img`
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
`)
```


```block
// :solution
let sprite: Sprite = null
function fliphorizontal() {
    sprite.image.flipX()
    pause(200)
}
scene.setBackgroundColor(9)
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    /*  for (let i = 0; i < 19; i++) {
      fliphorizontal()
    }*/
    fliphorizontal()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {

})
sprite = sprites.create(img`
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
`)

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.y += 3
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x += -3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x += 3
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.y += -3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x = 80
    sprite.y = 64
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.y += -15
})

// :end-solution
```

## Challenge
```block
// :solution
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let sprite: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vy += 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx = 0
    sprite.vy = 0
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vy += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x = 80
    sprite.y = 64
})
scene.setBackgroundColor(3)
sprite = sprites.create(img`
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
cloud1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 2 . . . . . . 
. . . 1 1 2 2 2 1 1 1 1 1 1 . . 
. 2 1 1 2 2 2 2 2 2 2 2 2 1 1 . 
. 1 2 2 2 1 2 2 2 1 1 2 2 2 1 . 
1 1 2 2 1 1 1 1 1 2 2 2 1 1 1 . 
1 1 2 2 2 2 2 1 1 2 1 2 1 1 . . 
. 1 1 1 1 2 2 2 2 2 2 2 1 2 . . 
. . . . 1 1 2 2 1 1 2 2 1 . . . 
. . . . . . 2 2 2 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
cloud1.x = 20
cloud1.y = 20
cloud2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 2 . . . . . . 
. . . 1 1 2 2 2 1 1 1 1 1 1 . . 
. 2 1 1 2 2 2 2 2 2 2 2 2 1 1 . 
. 1 2 2 2 1 2 2 2 1 1 2 2 2 1 . 
1 1 2 2 1 1 1 1 1 2 2 2 1 1 1 . 
1 1 2 2 2 2 2 1 1 2 1 2 1 1 . . 
. 1 1 1 1 2 2 2 2 2 2 2 1 2 . . 
. . . . 1 1 2 2 1 1 2 2 1 . . . 
. . . . . . 2 2 2 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
cloud2.x = 50
cloud2.y = 50
cloud3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 2 . . . . . . 
. . . 1 1 2 2 2 1 1 1 1 1 1 . . 
. 2 1 1 2 2 2 2 2 2 2 2 2 1 1 . 
. 1 2 2 2 1 2 2 2 1 1 2 2 2 1 . 
1 1 2 2 1 1 1 1 1 2 2 2 1 1 1 . 
1 1 2 2 2 2 2 1 1 2 1 2 1 1 . . 
. 1 1 1 1 2 2 2 2 2 2 2 1 2 . . 
. . . . 1 1 2 2 1 1 2 2 1 . . . 
. . . . . . 2 2 2 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
cloud3.x = 100
cloud3.y = 30

// :end-solution
```
