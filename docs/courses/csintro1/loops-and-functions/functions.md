# Activity: Functions

Functions are a way to group sections of code to be run together. They are regularly used when writing code both to increase the readability of code, and to allow for reuse of common actions. In Blocks, ``||functions:Functions||`` can be found under the `Advanced` section.

![finding functions in blocks](/static/courses/csintro1/loops-and-functions/finding-functions.gif)

In this activity, student will be introduced to:
* Simple functions in blocks
* Calling functions by name

## Concept: Making a basic function for readability
Functions allow us to break up code into different sections. In doing so, we can separate distinct tasks, giving a distinct name for small tasks in your code.

## Example #1: Creating Sprites
1. Review the code below 
2. Create the sample code and run the code
3. Save the code for the example (name it "placeSprites")

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Human,
    Cow,
    Asteroid
}
let asteroid: Sprite = null
let cow: Sprite = null
let human: Sprite = null
human = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . . 4 . . . 4 . . . . . . 
. . . . . 4 . . . 4 . . . . . . 
. . . . . 4 . . . 4 . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . 4 . 4 . 4 . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . 4 . 4 . . . . . . . 
. . . . . 4 . . . 4 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Human)
human.setPosition(20, 30)
human.say("Hello!")
cow = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . e . e e . e . . . . . . . 
. . e . e e d e . e . d d d . . 
. . . e f e f d e d d d d d d . 
. . . e e e e e e d d d d d d . 
. . . e 3 3 e e d d e e d e e d 
. . . . e e e d d d d d e d d d 
. . . . . . . d d e d d d d d d 
. . . . . . . . d d d d d d d d 
. . . . . . . . . d . . . . d . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cow)
cow.setPosition(50, 80)
cow.say("Moo")
asteroid = sprites.createProjectile(sprites.space.spaceAsteroid0, -10, 10, SpriteKind.Asteroid)
asteroid.say("Crash")
```

This code has a reasonably long ``||loops:on start||`` for how simple it is; we make a human, then we make a cow, and finally we make an asteroid. In the next examples, we will simplify the ``||loops:on start||`` code by splitting the code into three different functions, so that people reading your code can get an idea of what happens when you start the game quickly, rather than having to read through every single block.

## Example #2: Creating Sprites (with functions)

### TODO: Video of this example

1. Review the code below 
2. Create the sample code and run the code
3. Save the code for the example (name it "placeSpritesWithFunctions")

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Human,
    Cow,
    Asteroid
}
let asteroid: Sprite = null
let cow: Sprite = null
let human: Sprite = null
function placeHuman() {
    human = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . . 4 . . . 4 . . . . . . 
. . . . . 4 . . . 4 . . . . . . 
. . . . . 4 . . . 4 . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . 4 . 4 . 4 . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . 4 . 4 . . . . . . . 
. . . . . 4 . . . 4 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Human)
    human.setPosition(20, 30)
    human.say("Hello!")
}
function placeCow() {
    cow = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . e . e e . e . . . . . . . 
. . e . e e d e . e . d d d . . 
. . . e f e f d e d d d d d d . 
. . . e e e e e e d d d d d d . 
. . . e 3 3 e e d d e e d e e d 
. . . . e e e d d d d d e d d d 
. . . . . . . d d e d d d d d d 
. . . . . . . . d d d d d d d d 
. . . . . . . . . d . . . . d . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Cow)
    cow.setPosition(50, 80)
    cow.say("Moo")
}
function placeAsteroid() {
    asteroid = sprites.createProjectile(sprites.space.spaceAsteroid0, -10, 10, SpriteKind.Asteroid)
    asteroid.say("Crash")
}
placeHuman()
placeCow()
placeAsteroid()
```

One way to think of this is like a book: by adding new functions to our code, we were able to make the ``||loops:on start||`` block resemble a table of contents, with simple descriptions of the tasks we wanted done. Each function ends up being a chapter; if you wanted to get a feeling for how the book will be, you skim through the table of contents, and if parts sound interesting, you can read those by going to the specified location (or function).

## Student Task #1: make your own functions
1. Review the code below 
2. Create the sample code and run the code
3. Create 3 different functions, with names that describe different sections of the code.
4. Remove the blocks from the ``||loops:on start||`` block and split it into the three different functions. Each function should have 3 of the 9 blocks
5. Use the ``||functions:call function||`` block 3 times in your ``||loops:on start||`` block to call each new function
6. **Challenge:** make sure your code behaves **exactly** the same as the code below

### ~hint

For the challenge, try re-ordering the ``||functions:function calls||`` in your ``||loops:on start||`` - does anything change, or happen in a different order?

### ~

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Human,
    Cow,
    Asteroid
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Whole))
scene.setBackgroundColor(1)
info.setScore(0)
info.startCountdown(10)
```



## What did we learn? [TODO create 2 questions]

1. Describe how a [concept 1] makes programming easier, more powerful, reduced code, or something.... .  
2. Compare and contrast [something in the real world with coding] grocery store line or ask student to come up with a comparison.  
3. [Come up with a question of your choice]


## Rubrics


### TODO task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| TODO !!!!!Placeholder Stuff!!!! review and replace!!!  | Made Squares with a loop & Answered Questions|  Was able to nest More than 3 squares using loops | Answered questions with clear explanations using examples and/or analogies | Completed Challenge Code  |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric [TODO review based on number of questions]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 