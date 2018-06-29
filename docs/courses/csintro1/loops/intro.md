# Activity: Intro to loops
## TODO: Change all this to not include turtle
Turtle is a classic Computer Science Program where the programmer controls a turtles motion.  The "turtle" (arrow sprite) can draw the path it takes to create interesting designs.  Many students will have seen Turtle or something similar previously if they have participated in various one hour coding activities.  Turtle is a "game" built in MakeCode Arcade that has it's own Blocks that we can use until we learn how to make our own movement controls.

In Arcade, Turtle is an **extension**. An extension is a "package" of code that can be added to enable some functionality - in this case it adds Turtle Blocks to the top of our Blocks Menu. The Animated Image below the video demonstrates how we enable the turtle blocks with the Turtle extension.

In this activity students will work with: 

* sprite motion
* repeat loop   

## Concept: Controlling the turtle's movement

# TODO: Video moving a sprite using loops

We can start off by trying to solve a small task - slowly move a ghost from the center of the screen towards the bottom right corner.

## Example: Moving a Ghost
1. Open up [this sample code](https://makecode.com/_bwkaqsVLgf9j)
2. Run the code - the ghost should scroll off to the bottom right area of the screen, and peek just over the edge.
3. Review the blocks that caused this to happen - what would you need to add if the screen was made to be twice as big?

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 f f f 1 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 . 1 1 1 1 1 . 1 . . . 
. . . 1 1 . . 1 1 1 . . 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
```  

## Student Task 1: Move to the upper left corner, and move faster
1. Load up the blocks from the previous example
2. Make the sprite move up and to the left instead - to do so, change all movements to be in the opposite direction.
3. Change the pause between each step to be only 50 ms, instead of 100 - we decided we want the ghost to be a little bit faster than it was

### ~hint
**Teacher Note**  

This task is intentionally tedious - it's likely a good idea to cut them off early after having them start on it, as it doesn't take long to recognize how much is involved in making a relatively small change in the current code.
### ~

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 f f f 1 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 . 1 1 1 1 1 . 1 . . . 
. . . 1 1 . . 1 1 1 . . 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
// :end-solution
```


## Concept: Moving a sprite using loops (introduce the repeat block)

# TODO: Video for using a repeat block to move sprite

When completing the last task, you likely noticed that you were doing the same action repeatedly - moving in one direction, pausing, moving in another, pausing, and then repeating that. Instead of doing that by hand, we can instead using loops to repeat that chunk of code more easily.

## Example: Moving up and to the left using loops
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 f f f 1 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 . 1 1 1 1 1 . 1 . . . 
. . . 1 1 . . 1 1 1 . . 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
for (let i = 0; i < 12; i++) {
    sprite.x += -5
    pause(50)
    sprite.y += -5
    pause(50)
}

```
## Student Task 2: Add a second sprite using loops
We now want to add in a second ghost, that moves towards the bottom right like in the first example.
1. Add in a second sprite
2. Make the second sprite move in the opposite direction of the current sprite, right after the current sprite moves.

### ~hint
Copy the blocks from the example  

There isn't too much different between the two sprites - we don't even need to make a new loop! We just need to add more things into the **body** of the loop - that is, the code that is surrounded by the loop.
### ~

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 f f f 1 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 . 1 1 1 1 1 . 1 . . . 
. . . 1 1 . . 1 1 1 . . 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let sprite2: Sprite = null
sprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 f f f 1 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 . 1 1 1 1 1 . 1 . . . 
. . . 1 1 . . 1 1 1 . . 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
for (let i = 0; i < 12; i++) {
    sprite.x += -5
    sprite2.x += 5
    pause(50)
    sprite.y += -5
    sprite2.y += 5
    pause(50)
}
// :end-solution
```

## Student Task 3: Boomerang
1. Add a single loop to the following code so that the boomerang goes to the right 50 pixels over the course of two seconds
2. Make the boomerang return to it's original location over the course of two seconds using a loop.
3. Challenge: Use the ``||images:flip picture horizontally||`` block inside the loops to make it appear like the boomerang is rotating as it flies

### ~hint

flips will occur very quickly unless a ``||loops:pause()||`` is used

### ~

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let boomerang: Sprite = null
boomerang = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 4 5 4 . . . . . . 
. . . . . . . . 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 . . . . 
. . . . . . . . . 4 5 4 . . . . 
. . . . . . . . 4 5 5 4 . . . . 
. . . . . . . . 4 5 4 . . . . . 
. . . . . . . 4 5 4 . . . . . . 
. . . . . . . . 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
boomerang.x += 5
pause(200)
```

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy
}
let boomerang: Sprite = null
boomerang = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 4 5 4 . . . . . . 
. . . . . . . . 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 . . . . 
. . . . . . . . . 4 5 4 . . . . 
. . . . . . . . 4 5 5 4 . . . . 
. . . . . . . . 4 5 4 . . . . . 
. . . . . . . 4 5 4 . . . . . . 
. . . . . . . . 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
for (let i = 0; i < 10; i++) {
    boomerang.x += 5
    boomerang.image.flipX()
    pause(200)
}
for (let i = 0; i < 10; i++) {
    boomerang.x += -5
    boomerang.image.flipX()
    pause(200)
}
// :end-solution
```

## What did we learn?

1. Describe how a ``||loop:repeat||`` block makes programming easier by reducing code repetition. Use an example.
2. Was it easier or harder to add in a second sprite when with the code inside of the loop that it would have been in the prior (loop-less) version? Why?
3. Did you use more than one ``||loop:repeat||`` in any of the tasks above? Why might you want to have one loop after another, rather than just combining them into a single loop?


## Rubrics

### ~hint
Start on the left rubric column (5pts), if the work meets the rubric measurement continue to the right (7pts, 9pts, 10pts). Award the score of the right most rubric that is passed.  This means that to get the highest score, student must pass all previous rubrics.
### ~

### Loops Rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Loops tasks 2 and 3  | Successfully added in a second sprite in task 2 that moved in the opposite direction| Student successfully made the boomerang move to the right 50 pixels with a loop | Successfully moved the boomerang back 50 pixels with a loop | Completed Challenge Code, making the boomerang "rotate" |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric [TODO review based on number of questions]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 