# Practice #1: Efficient Teleportation

1. Make a sprite and on each of the four arrow key presses (use 'on up button press', 'on down button press', 'on left button press', 'on right button press'), make the following blocks execute:
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.say("Teleporting!")
    pause(200)
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.say("Teleporting!")
    pause(200)
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.say("Teleporting!")
    pause(200)
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.say("Teleporting!")
    pause(200))
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
sprite = sprites.create(img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a 1 a a a a a a a a a a 1 a a 
a a 1 1 a a a a a a a a 1 1 a a 
a a a 1 1 a a a a a a a 1 a a a 
a a a a 1 1 1 a a a a a 1 a a a 
a a a a a a 1 1 1 1 1 1 1 a a a 
a a a a a a a a a a a a a a a a 
`, SpriteKind.Player)
```

2. Define a function 'teleport' and let's start replacing all our old code so that it's more flexible and readable.
	
3. To show that this is actually better, let's do what we suggested earlier:

4.  

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
function teleport() {
    sprite.say("Teleporting!")
    pause(200)
    sprite.x = Math.randomRange(0, scene.screenWidth())
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport()
})
sprite = sprites.create(img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a 1 a a a a a a a a a a 1 a a 
a a 1 1 a a a a a a a a 1 1 a a 
a a a 1 1 a a a a a a a 1 a a a 
a a a a 1 1 1 a a a a a 1 a a a 
a a a a a a 1 1 1 1 1 1 1 a a a 
a a a a a a a a a a a a a a a a 
`, SpriteKind.Player)
```

5. Let's make A and B button presses do something too (let's have them both do the same something though)!

# Practice #2: Opportunities for Functions

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Wall
}
let sprite: Sprite = null
function transformMsg() {
    pause(1000)
    sprite.say("transforming!!")
    pause(2000)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    colorSwaps()
})
function colorSwaps() {
    sprite.say("Hmm I should switch colors . . .")
    transformMsg()
    sprite.setImage(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 f 3 3 3 3 3 3 f 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 f 3 3 3 3 3 3 3 f 3 3 3 
3 3 3 3 f f 3 3 3 3 f f 3 3 3 3 
3 3 3 3 3 3 f f f f f 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`)
    sprite.say("How is this one?")
    transformMsg()
    sprite.setImage(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 f 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 
4 4 4 4 f f 4 4 4 4 f f 4 4 4 4 
4 4 4 4 4 4 f f f f f 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    sprite.say("Maybe brown is better")
    transformMsg()
    sprite.setImage(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e 1 e e e e e e 1 e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e 1 e e e e e e e 1 e e e 
e e e e 1 1 e e e e 1 1 e e e e 
e e e e e e 1 1 1 1 1 e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`)
    sprite.say("ehh I don't know")
    transformMsg()
    sprite.setImage(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 . 9 9 
9 9 9 9 f 9 9 9 9 9 9 f 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 9 f 9 9 9 
9 9 9 9 f 9 9 9 9 9 f f 9 9 9 9 
9 9 9 9 9 9 f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`)
    sprite.say("Blue is the best in the end!")
}
info.setScore(0)
sprite = sprites.create(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 f 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 9 f 9 9 9 
9 9 9 9 f f 9 9 9 9 f f 9 9 9 9 
9 9 9 9 9 9 f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, SpriteKind.Player)
sprite.x = 8
colorSwaps()
```
