# Logic Introduction -  if statement

## Task #1a: less than

1. Create a new project
2. Make it so that when the player presses the ``||controller:A||`` button the score increases by 1
3. Make it so that when the player presses the ``||controller:B||`` button, if the player's score is less than 10, the sprite will say something

https://makecode.com/_TH4etH4cjMFK

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 10) {
        mySprite.say(":)", 1000)
    }
})
mySprite = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdate(function () {
    
})
```

## Task #1b: less than 

1. Create a new project
2. Create a sprite, and use ``||controller:control sprite with||`` to make it move when the directional keys are pressed
3. Make it so that when the player presses the ``||controller:A||``button, if the player is on the left half of the screen, the score increases by 1

### ~hint

The player is on the left half of the screen if their ``||sprites:x position||`` is less than half of the screen width

### ~

https://makecode.com/_7A9J6pacWXMC


```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x < scene.screenWidth() / 2) {
        info.changeScoreBy(1)
    }
})
mySprite = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
game.onUpdate(function () {
    
})
```



## Task #2: greater than

1. Start a new project
2. Create 2 sprites, a leader and a follower
3. Set the ``||sprites:x position||`` of the leader at a random value between 100 and 140 and set the ``||sprites:x position||`` of the follower at 20.
4. Make it so that when the player presses the ``||controller:A||``button, if the leader's ``||sprites:x position||`` is greater than the follower's, then make the follower change their ``||sprites:x position||`` by 10

https://makecode.com/_37mc84Rtxe7z

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let follower: Sprite = null
let leader: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (leader.x > follower.x) {
        follower.x += 10
    }
})
leader = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Player)
follower = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 6 5 5 2 6 f . . . . . 
. . . f 6 6 1 6 6 6 6 f . . . . 
. . . f 6 1 6 6 6 6 6 f . . . . 
. . . f 1 6 6 6 d f d f . . . . 
. . f f 6 6 6 6 d f d f . . . . 
. f 6 f 6 6 6 d d 3 d f . . . . 
. . f f 6 f f d d d f . . . . . 
. f 6 6 f f 3 3 f f . . . . . . 
. . f f f d d 3 3 5 f . . . . . 
. . . f d d f 3 3 3 f . . . . . 
. . . . f f f 5 3 f . . . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . f f f f f . . . . . . 
`, SpriteKind.Player)
leader.x = Math.randomRange(100, 140)
follower.x = 20
```

## Task #3: equal 

1. Create a new project
2. Make it so that when the player presses the ``||controller:A||`` button the score increases by 1
3. Make it so that after the score is increased, if the score is equal to 10, use the ``||game:game over||`` block to end the game

https://makecode.com/_ftpYRr4dyf79

```blocks
enum SpriteKind {
    Player,
    Enemy
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    if (info.score() == 10) {
        game.over(true)
    }
})
```


## Task #4: equal and greater than test

1. Create a new project
2. Add in a simple sprite
3. Make it so that when the player presses the ``||controller:A||`` button, the score increases by 1
4. In this event, if the player's score is above 10, make the sprite congratulate the player on their high score
5. In the same event, if the player's score is an even number, change the background to a random color
6. **Challenge:** add projectiles that fire from the sprite when the score is increased to a value greater than 5
7. **Challenge:** if the score reaches 20, change the sprites image

### ~hint

The background can be changed to a random color with the following block

```block
scene.setBackgroundColor(Math.randomRange(1, 15))
```

### ~

https://makecode.com/_Xa82FdC5p4ki

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    if (info.score() > 10) {
        mySprite.say(":)")
    }
    if (info.score() % 2 == 0) {
        scene.setBackgroundColor(Math.randomRange(1, 15))
    }
})
mySprite = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . . 
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . . 
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . . 
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . . 
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . . 
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . . 
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . . 
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . . 
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e . 
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e . 
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e 
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e 
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f 
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f 
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f . 
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e . 
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8 
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8 
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8 
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f 
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f 
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f 
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f 
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e 
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e 
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e . 
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e . 
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . 
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . . 
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . . 
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


## What did we learn?

1. What is an ``||logic:if||`` statement? What is a case in which you would use one?
2. What is a logic comparison? What is a case in which you would use one?

### ~hint

### Possible Solutions: Answers vary

1. An ``||logic:if||`` statement is a block that will run if the given condition is true. This condition is often a specified comparison.
2. A logic comparison describes the relationship between two values. The given comparison requires a operator and will either be true or false.

### ~
