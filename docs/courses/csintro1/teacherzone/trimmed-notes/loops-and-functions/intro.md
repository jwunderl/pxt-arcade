# Activity: Intro to loops

In this activity students will work with: 

* sprite motion
* repeat loop

## Concept: Motion with loops
## Student Task 1: Move to the upper left corner, and move faster

### ~hint

This task is intentionally tedious - it's likely a good idea to cut them off early after having them start on it, as it doesn't take long to recognize how much is involved in making a relatively small change in the current code.

### ~

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
```

## Concept: Moving a sprite using loops (introduce the repeat block)
## Example: Moving up and to the left using loops
## Student Task 2: Add a second sprite using loops
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
```

## Student Task 3: Boomerang

### ~hint

If a student is stuck on this task, suggest that they move on to the "What did we learn?" section and return to this section afterwards; question 3 is meant to refer to this task, and can serve as a hint to the student.

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
```

## What did we learn?

1. Describe how a ``||loop:repeat||`` block makes programming easier by reducing code repetition. Use an example.
2. Explain how it easier or harder to add in a second sprite when with the code inside of the loop that it would have been in the prior (loop-less) version? Why?
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

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 