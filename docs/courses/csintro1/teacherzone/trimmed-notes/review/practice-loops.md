# Practice 1: Risky Life Bar

1. On any button press, add a loop block that will run 3 times.

2. Inside the loop, make it so that the life left is reset each time through the loop.

3. Make it so that after each round (surviving the randomized health trials) the score increases by one.

```blocks
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let i = 0; i < 4; i++) {
        info.setLife(Math.randomRange(0, 4))
        pause(1000)
    }
    info.changeScoreBy(1)
})
```

# Practice 2: Moving Sprites with Loops

1.  Make a sprite of your choice and start it in the upper left corner (setting its x and y to 8 should be about right.)

2.  We have to decide when we want our square movement to happen

3.  Make the sprite gradually move to the right.

4.  Repeat this process so that after the sprite finishes its loop for moving to the right, it immediately begins a loop to move down.

5.  Instead of on button press activate the square movement, let's use another loop.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let asdf: Sprite = null
let index = 0
asdf = sprites.create(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 8 
8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 
8 8 8 1 1 1 1 1 1 1 1 1 8 8 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 8 8 1 1 1 1 1 1 1 1 1 8 8 8 8 
8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 
8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 8 
8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, SpriteKind.Player)
asdf.setPosition(8, 8)
forever(function () {
    for (let index = 0; index <= 20; index++) {
        asdf.x += 5
        pause(100)
    }
    for (let index = 0; index <= 20; index++) {
        asdf.y += 5
        pause(100)
    }
    for (let index = 0; index <= 20; index++) {
        asdf.x += -5
        pause(100)
    }
    for (let index = 0; index <= 20; index++) {
        asdf.y += -5
        pause(100)
    }
})
```

# Practice 3: Drawing multiple sprites with loops


1. On any button press, make your sprite appear at a random location.
2. We know that the sprite needs to appear 3 times total, and we just wrote the code for it to appear randomly once.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index <= 2; index++) {
        sprite = sprites.create(img`
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
5 5 5 5 . 5 5 5 5 . . . . . . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 . 5 5 5 5 . . . . 
. . . 5 5 . . . . 5 5 5 . . . . 
. . . 5 . . . . . . 5 5 . . . . 
`, SpriteKind.Player)
        sprite.setPosition(Math.randomRange(0, 144), Math.randomRange(0, 104))
    }
})
```
# Practice 4: Drawing a row / column of sprites with loops