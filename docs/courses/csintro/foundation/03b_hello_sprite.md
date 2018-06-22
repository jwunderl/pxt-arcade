# Activity: Hello Sprite

"Hello World!" is a common first example used to introduce the syntax of a new programming language. In this activity we will first look at "Hello World!" displayed in a game.  Then we will modify our code to display in the **Console Simulator** environment.  

In this lesson students use:
* Sprite Say
* Console log
* String types
* String Variables

## Concept: ``||sprites:say||``

# TODO: Video demo example introduce ``||sprites:say||`` and discuss changing variables  

Sprite Objects have a method ``||sprites:say||`` (`say()`) that displays a text box over the sprite when used. 

> ### Vocabulary: Method
> A **method** is an action that an object supports. Example: Sprites have a "say" method that displays text provided above the sprite.
> 

## Example: Sprite Hello Blocks

1. Create the **Block** code below in MakeCode (give it a title: "sprite hello")
2. View the code in JavaScript


```block
enum SpriteKind {
    Player
}
let msg: string = "Hello World!"
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
6 6 6 6 6 6 6 6 
6 f 6 6 6 6 f 6 
6 6 6 a a 6 6 6 
6 6 6 6 6 6 6 6 
6 6 b b b b 6 6 
6 6 6 6 6 6 6 6 
`, SpriteKind.Player)
scene.setBackgroundColor(4)
mySprite.say(msg)
```

## What did we learn? 
1. Identify JavaScript code aligns with which each block. Explain.  
2. Identify any JavaScript code that doesn't seem to have any blocks. Hypothesize and Explain.  

 
# TODO: Video demo example introduce console.log() show string and string variable

# Example: console.log()  

1. Start a new project (name it "console")  
2. Switch to JavaScript view and replace all code with the code below  
3. Press **Show Console Simulator** to display **console** output  

```typescript
let msg: string = "Hello World!"
console.log(msg)
console.log("msg sent!")
```

## Task: Add console.log( ) to "sprite hello"

1. open (or recreate) the "sprite hello"  
2. add in console messages using `console.log()` for:
    * a string (example: "Hello console")
    * a string variable (example: use **msg** variable)

Consider This!: The code `console.log()` doesn't use **mySprite** as with ``||sprites:say||``. Why?

```block
// :solution
let msg: string = "Hello World!"
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
6 6 6 6 6 6 6 6 
6 f 6 6 6 6 f 6 
6 6 6 a a 6 6 6 
6 6 6 6 6 6 6 6 
6 6 b b b b 6 6 
6 6 6 6 6 6 6 6 
`)
scene.setBackgroundColor(4)
mySprite.say(msg)
console.log(msg)
console.log("msg sent!")
// :end-solution
```

## Task: Add another sprite and set its coordinates

1. Start with the above project and add another sprite (need a different variable name) 
2. add in a ``||sprite:say||`` messages to have a conversation with the first sprite
3. push the **+** on the ``||sprites:say||` block and set the time for each message (**1000** millisecond = 1 second)

### ~hint
There is a pause block under the Loops menu ||Loops:pause(1000)|| that can be used to delay the response of the second sprite. 
### ~

```block
// :solution

let world: Sprite = null
let mySprite: Sprite = null
let msgWorld = ""
let msgSprite = ""
scene.setBackgroundColor(4)
msgSprite = "Hello World!"
msgWorld = "Hi Sprite!"
mySprite = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
6 6 6 6 6 6 6 6 
6 f 6 6 6 6 f 6 
6 6 6 a a 6 6 6 
6 6 6 6 6 6 6 6 
6 6 b b b b 6 6 
6 6 6 6 6 6 6 6 
`)
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
. . . . . . . . 3 1 1 1 1 1 3 . . . . . . . . . . . . . . . . . 
. . . . . . . 3 3 7 7 3 3 8 8 7 . . . . . . . . . . . . . . . . 
. . . . . . 8 8 3 7 7 3 3 8 7 7 7 . . . . . . . . . . . . . . . 
. . . . . 8 8 8 3 3 3 3 3 8 7 7 7 7 . . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 3 3 3 8 8 7 7 7 7 7 . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 3 3 3 8 8 8 8 8 8 7 . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 3 3 3 3 3 3 3 8 8 7 . . . . . . . . . . . . . 
. . . 8 8 8 3 3 3 3 3 3 3 3 3 8 8 7 7 7 . . . . . . . . . . . . 
. . . . 8 8 3 3 3 3 3 3 3 3 3 8 7 7 7 . . . . . . . . . . . . . 
. . . . 8 8 8 3 3 3 3 3 7 3 3 8 7 7 7 . . . . . . . . . . . . . 
. . . . 8 8 8 8 3 3 3 3 3 3 3 3 8 7 7 . . . . . . . . . . . . . 
. . . . . 8 8 8 8 3 3 3 3 3 3 3 8 7 . . . . . . . . . . . . . . 
. . . . . . 8 8 8 3 3 3 3 3 3 3 8 . . . . . . . . . . . . . . . 
. . . . . . . 8 8 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . 
. . . . . . . . 8 3 1 1 1 3 3 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
world.x = 30
mySprite.say(msgSprite, 2000)
pause(1000)
world.say(msgWorld, 4000)

// :end-solution
```

## Challenge

1. Add additional Sprites at different coordinates and use ``||sprites:say||`` messages  
2. Make larger 32x32 sprites  

```block
// :solution

let bird: Sprite = null
let world: Sprite = null
let mySprite: Sprite = null
let msgWorld = ""
let msgSprite = ""
scene.setBackgroundColor(12)
msgSprite = "Hello World!"
msgWorld = "Hi Sprite!"
mySprite = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
6 6 6 6 6 6 6 6 
6 f 6 6 6 6 f 6 
6 6 6 a a 6 6 6 
6 6 6 6 6 6 6 6 
6 6 b b b b 6 6 
6 6 6 6 6 6 6 6 
`)
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
. . . . . . . . 3 1 1 1 1 1 3 . . . . . . . . . . . . . . . . . 
. . . . . . . 3 3 7 7 3 3 8 8 7 . . . . . . . . . . . . . . . . 
. . . . . . 8 8 3 7 7 3 3 8 7 7 7 . . . . . . . . . . . . . . . 
. . . . . 8 8 8 3 3 3 3 3 8 7 7 7 7 . . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 3 3 3 8 8 7 7 7 7 7 . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 3 3 3 8 8 8 8 8 8 7 . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 3 3 3 3 3 3 3 8 8 7 . . . . . . . . . . . . . 
. . . 8 8 8 3 3 3 3 3 3 3 3 3 8 8 7 7 7 . . . . . . . . . . . . 
. . . . 8 8 3 3 3 3 3 3 3 3 3 8 7 7 7 . . . . . . . . . . . . . 
. . . . 8 8 8 3 3 3 3 3 7 3 3 8 7 7 7 . . . . . . . . . . . . . 
. . . . 8 8 8 8 3 3 3 3 3 3 3 3 8 7 7 . . . . . . . . . . . . . 
. . . . . 8 8 8 8 3 3 3 3 3 3 3 8 7 . . . . . . . . . . . . . . 
. . . . . . 8 8 8 3 3 3 3 3 3 3 8 . . . . . . . . . . . . . . . 
. . . . . . . 8 8 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . 
. . . . . . . . 8 3 1 1 1 3 3 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
bird = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f 2 f . . . . . 
. . . . . . . . . . . . . . . . . . . f 2 f 2 3 3 3 f . . . . . 
. . . . . . . . . . . . . . . . f 2 f 3 3 3 3 3 3 f . . . . . . 
. . . . . . . . . . . . . f f 2 3 3 3 3 3 3 3 3 f . . . . . . . 
. . . . . . . . . . . f 2 3 3 3 2 2 3 3 3 3 f f . . . . . . f f 
. . . . . . . . . . f f 3 3 3 3 3 3 3 3 3 f f . . . . . . . f f 
. . . . . . f f f f f 2 3 3 2 2 2 2 2 3 3 2 f f f f . . . f f f 
. . . . f f a a f a a a 3 3 3 2 2 3 3 3 3 2 2 2 2 2 f f f f 2 f 
. . f f f a a a a a a a 3 3 3 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
. . . . f f a a a a a a 3 3 3 3 3 3 2 2 2 3 2 3 2 2 2 2 2 3 3 f 
. . f f f f f a a a a a 3 2 3 3 3 3 3 3 3 . 2 3 3 2 2 3 3 2 2 f 
. . . . . f f f f f f f 3 3 3 2 2 2 3 3 f f 2 3 3 2 f f f f f f 
. . . . . . . . . . . f 2 3 2 3 3 3 3 3 f . f . f f . . . f f . 
. . . . . . . . . . . . f 3 3 3 3 2 3 3 f . . . . . . . . . f . 
. . . . . . . . . . . . f 3 3 3 3 2 3 3 f . . . . . . . . . . . 
. . . . . . . . . . . . . f 3 3 3 3 2 3 f . . . . . . . . . . . 
. . . . . . . . . . . . . f 2 3 3 3 3 3 2 f . . . . . . . . . . 
. . . . . . . . . . . . . . f 2 3 3 3 3 2 f . . . . . . . . . . 
. . . . . . . . . . . . . . f 2 f 3 3 3 3 f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . f f . f 2 f f f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
world.x = 30
bird.x = 130
bird.y = 105
mySprite.say(msgSprite, 2000)
pause(1000)
world.say(msgWorld, 4000)
pause(2000)
bird.say("Tweet", 1000)

// :end-solution
```

### What did we learn?

 3. Discuss the different ways we can display a message in this exercise. List and example.
 4. Come up with a hypothesis and explain why `console.log()` doesn't convert fully to blocks.


## Rubrics

### ~hint
Start on the left rubric column (5pts), if the work meets the rubric measurement continue to the right (7pts, 9pts, 10pts). Award the score of the right most rubric that is passed.  This means that to get the highest score, student must pass all previous rubrics.
### ~

### Hello Sprite 

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Hello Sprites | sprite text with on screen and and in console |   2 sprites on screen in different locations both using "say"  | 2 sprites on screen in different locations both using "say" and messages are timed and go away at different times | Completed Challenge or exceptional art for sprites created |

### Score = \_\_\_\_\_\_ /10 

### Questions

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 3 questions fully or answered all 4 questions but parts are unclear or lack detail | Explanations address all 4 questions fully | Uses multiple examples and clear explanations |  Explanation uses an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10