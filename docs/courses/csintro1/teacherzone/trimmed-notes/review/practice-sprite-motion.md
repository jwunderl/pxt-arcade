# Practice 1: Platformers (without platforms)

1. Make a sprite that will be our character we'll be moving around.
2. Add an on-right-button-press block, and use a set sprite block to set the vx (velocityx) to some positive value of your choosing.
3. Add an on-left-button-press block and a set vx block just like before. 
4. Test it out!
5. You may have noticed about our game so far is that our sprite just glides forever. 
6. Add more movement to the y velocity directions.


```blocks
enum SpriteKind {
    Player,
    Enemy
}

let sprite: Sprite = null
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.ay = 2
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx = -50
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx = 50
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.ay = -2
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx = 0
    sprite.vy = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x = 80
    sprite.y = 64
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    sprite.vx = 0
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
```