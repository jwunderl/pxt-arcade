# Activity: Hello Sprite

In this lesson students use:
* Sprite Say
* Console log (JavaScript)
* String types
* String Variables

## Concept: ``||sprites:say||``

### Vocabulary: Method

## Example: Sprite Hello Blocks

## What did we learn? 
1. Identify and show the JavaScript code that aligns with which each block.  
2. Identify any JavaScript code that doesn't seem to have any blocks. Hypothesize and Explain.  


# Example: console.log()  

## Task: Add console.log( ) to "sprite hello"

```blocks
// https://makecode.com/_Wr8PUXPeVUT1

enum SpriteKind {
    Player
}
let msg: string = "Hello World!"
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
4 4 4 4 4 4 4 4 
4 f 4 4 4 4 f 4 
4 4 4 a a 4 4 4 
4 4 4 4 4 4 4 4 
4 4 b b b b 4 4 
4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
scene.setBackgroundColor(9)
mySprite.say(msg)
console.log(msg)
console.log("msg sent!")
```

## Task: Add another sprite and set its coordinates

```blocks
// https://makecode.com/_3vw05FiutJww

enum SpriteKind {
    Player,
    Enemy
}
let world: Sprite = null
let mySprite: Sprite = null
let msgWorld = ""
let msgSprite = ""
scene.setBackgroundColor(9)
msgSprite = "Hello World!"
msgWorld = "Hi Sprite!"
mySprite = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
4 4 4 4 4 4 4 4 
4 f 4 4 4 4 f 4 
4 4 4 a a 4 4 4 
4 4 4 4 4 4 4 4 
4 4 b b b b 4 4 
4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
world = sprites.create(img`
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
. . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 8 1 1 1 1 1 e . . . . . . . . . . . . . . . . . 
. . . . . . . 8 8 e e 8 8 7 7 e . . . . . . . . . . . . . . . . 
. . . . . . e e 8 e e 8 8 7 e e e . . . . . . . . . . . . . . . 
. . . . . e e e 8 8 8 8 8 7 e e e e . . . . . . . . . . . . . . 
. . . . e e e e e 8 8 8 7 7 e e e e e . . . . . . . . . . . . . 
. . . . e e e e e 8 8 8 7 7 7 7 7 7 e . . . . . . . . . . . . . 
. . . . e e e e e 8 8 8 8 8 8 8 7 7 e . . . . . . . . . . . . . 
. . . e e e 8 8 8 8 8 8 8 8 8 7 7 e e e . . . . . . . . . . . . 
. . . . e e 8 8 8 8 8 8 8 8 8 7 e e e . . . . . . . . . . . . . 
. . . . e e e 8 8 8 8 8 e 8 8 7 e e e . . . . . . . . . . . . . 
. . . . e e e e 8 8 8 8 8 8 8 8 7 e e . . . . . . . . . . . . . 
. . . . . e e e e 8 8 8 8 8 8 8 7 e . . . . . . . . . . . . . . 
. . . . . . e e e 8 8 8 8 8 8 8 7 . . . . . . . . . . . . . . . 
. . . . . . . e e 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . e 8 1 1 1 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
world.x = 30
mySprite.say(msgSprite, 2000)
pause(1000)
world.say(msgWorld, 4000)
```

## Challenge

```blocks
// https://makecode.com/_9TqMJR6WTPzU

enum SpriteKind {
    Player,
    Enemy
}
let bird: Sprite = null
let world: Sprite = null
let mySprite: Sprite = null
let msgWorld = ""
let msgSprite = ""
scene.setBackgroundColor(9)
msgSprite = "Hello World!"
msgWorld = "Hi Sprite!"
mySprite = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
4 4 4 4 4 4 4 4 
4 f 4 4 4 4 f 4 
4 4 4 a a 4 4 4 
4 4 4 4 4 4 4 4 
4 4 b b b b 4 4 
4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
world = sprites.create(img`
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
. . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 8 1 1 1 1 1 e . . . . . . . . . . . . . . . . . 
. . . . . . . 8 8 e e 8 8 7 7 e . . . . . . . . . . . . . . . . 
. . . . . . e e 8 e e 8 8 7 e e e . . . . . . . . . . . . . . . 
. . . . . e e e 8 8 8 8 8 7 e e e e . . . . . . . . . . . . . . 
. . . . e e e e e 8 8 8 7 7 e e e e e . . . . . . . . . . . . . 
. . . . e e e e e 8 8 8 7 7 7 7 7 7 e . . . . . . . . . . . . . 
. . . . e e e e e 8 8 8 8 8 8 8 7 7 e . . . . . . . . . . . . . 
. . . e e e 8 8 8 8 8 8 8 8 8 7 7 e e e . . . . . . . . . . . . 
. . . . e e 8 8 8 8 8 8 8 8 8 7 e e e . . . . . . . . . . . . . 
. . . . e e e 8 8 8 8 8 e 8 8 7 e e e . . . . . . . . . . . . . 
. . . . e e e e 8 8 8 8 8 8 8 8 7 e e . . . . . . . . . . . . . 
. . . . . e e e e 8 8 8 8 8 8 8 7 e . . . . . . . . . . . . . . 
. . . . . . e e e 8 8 8 8 8 8 8 7 . . . . . . . . . . . . . . . 
. . . . . . . e e 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . e 8 1 1 1 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
bird = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f 6 f . . . . . 
. . . . . . . . . . . . . . . . . . . f 6 f 6 8 8 8 f . . . . . 
. . . . . . . . . . . . . . . . f 6 f 8 8 8 8 8 8 f . . . . . . 
. . . . . . . . . . . . . f f 6 8 8 8 8 8 8 8 8 f . . . . . . . 
. . . . . . . . . . . f 6 8 8 8 6 6 8 8 8 8 f f . . . . . . f f 
. . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f . . . . . . . f f 
. . . . . . f f f f f 6 8 8 6 6 6 6 6 8 8 6 f f f f . . . f f f 
. . . . f f b b f b b b 8 8 8 6 6 8 8 8 8 6 6 6 6 6 f f f f b f 
. . f f f b b b b b b b 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
. . . . f f b b b b b b 8 8 8 8 8 8 6 6 6 8 6 8 6 6 6 6 6 8 8 f 
. . f f f f f b b b b b 8 6 8 8 8 8 8 8 8 . 6 8 8 6 6 b b 6 6 f 
. . . . . f f f f f f f 8 8 8 6 6 6 8 8 f f 6 8 8 6 f f f f f f 
. . . . . . . . . . . f 6 8 6 8 8 8 8 8 f . f . f f . . . f f . 
. . . . . . . . . . . . f 8 8 8 8 6 8 8 f . . . . . . . . . f . 
. . . . . . . . . . . . f 8 8 8 8 6 8 8 f . . . . . . . . . . . 
. . . . . . . . . . . . . f 8 8 8 8 6 8 f . . . . . . . . . . . 
. . . . . . . . . . . . . f 6 8 8 8 8 8 6 f . . . . . . . . . . 
. . . . . . . . . . . . . . f 6 8 8 8 8 6 f . . . . . . . . . . 
. . . . . . . . . . . . . . f 6 f 8 8 8 8 f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . f f . f 6 f f f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
world.x = 30
bird.x = 130
bird.y = 105
mySprite.say(msgSprite, 2000)
pause(1000)
world.say(msgWorld, 4000)
pause(2000)
bird.say("Tweet", 1000)

```

### What did we learn?

3. Discuss the different ways we can display a message in this exercise. List and example.
4. Come up with a hypothesis and explain why `console.log()` has a large limit on the length of text. Explain.


## Rubrics

### ~hint
Start on the left rubric column (5pts), if the work meets the rubric measurement continue to the right (7pts, 9pts, 10pts). Award the score of the right most rubric that is passed.  This means that to get the highest score, student must pass all previous rubrics.
### ~

### Hello Sprite task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Hello Sprites | sprite text with on screen and and in console |   2 sprites on screen in different locations both using "say"  | 2 sprites on screen in different locations both using "say" and messages are timed and go away at different times | Completed Challenge or exceptional art for sprites created |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 3 questions fully or answered all 4 questions but parts are unclear or lack detail | Explanations address all 4 questions fully | Uses multiple examples and clear explanations |  Explanation uses an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10