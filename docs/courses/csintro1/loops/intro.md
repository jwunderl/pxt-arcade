# Activity: Intro to loops
## TODO: Change all this to not include turtle
Turtle is a classic Computer Science Program where the programmer controls a turtles motion.  The "turtle" (arrow sprite) can draw the path it takes to create interesting designs.  Many students will have seen Turtle or something similar previously if they have participated in various one hour coding activities.  Turtle is a "game" built in MakeCode Arcade that has it's own Blocks that we can use until we learn how to make our own movement controls.

In Arcade, Turtle is an **extension**. An extension is a "package" of code that can be added to enable some functionality - in this case it adds Turtle Blocks to the top of our Blocks Menu. The Animated Image below the video demonstrates how we enable the turtle blocks with the Turtle extension.

In this activity student will work with: 

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

## Student Task: Move to the upper left corner, and move faster
1. Load up the blocks from the previous example
2. Make the sprite move up and to the left instead - to do so, change all movements to be in the opposite direction.
3. Change the pause between each step to be only 50 ms, instead of 100

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
## Student Task: Add a second sprite using loops
We now want to add in a second ghost, that moves towards the bottom right like in the first example.
1. Add in a second sprite
2. Make the second sprite move in the opposite direction of the current sprite, right after the current sprite moves.

### ~hint
Copy the blocks from the example  

There isn't too much different between the two sprites - we don't even need to make a new loop! We just need to add more things into the **body** of the loop - that is, the code inside the loop itself.
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
    sprite2.x += 5
    pause(50)
}
// :end-solution
```  

## Student Task  - Make something beautiful!  

1. Add 4 or more shapes and colors using loops
2. Add at least 1 shape with multiple sides that is not a square

### ~hint
Regular Symmetric shapes have 360 degrees of internal angles where each side length is the same  and each angle is the same

Angles = 360/number-of-sides

* A Triangle turns by 360/3 = 120 degree angles
* A Square turns by 360/4 = 90 degree angles
* A Pentagon turns by 360/5 = 72 degree angles

### ~

## Example: Triangle  

```block
for (let i = 0; i < 3; i++) {
    turtle.forward(40)
    turtle.turn(120)
}
```

## Example: Pentagon  

```block
for (let i = 0; i < 5; i++) {
    turtle.forward(25)
    turtle.turn(72)
}
```


```block
// solution
turtle.pen(TurtlePenMode.Down)
turtle.setPenColor(3)
for (let i = 0; i < 4; i++) {
    turtle.forward(30)
    turtle.turn(90)
}
turtle.setPenColor(6)
for (let i = 0; i < 4; i++) {
    turtle.forward(40)
    turtle.turn(90)
}
turtle.setPenColor(11)
for (let i = 0; i < 4; i++) {
    turtle.forward(50)
    turtle.turn(90)
}
turtle.setPenColor(9)
for (let i = 0; i < 4; i++) {
    turtle.forward(20)
    turtle.turn(90)
}
turtle.setPenColor(2)
for (let i = 0; i < 4; i++) {
    turtle.forward(20)
    turtle.turn(-90)
}
turtle.pen(TurtlePenMode.Up)
turtle.turn(180)
turtle.forward(25)
turtle.pen(TurtlePenMode.Down)
turtle.setPenColor(5)
for (let i = 0; i < 5; i++) {
    turtle.forward(20)
    turtle.turn(72)
}
// :end-solution
```
Challenge
1. Experiment with turning different numbers of degrees: 30, 60 and negative numbers to make different shapes
2. Try more repeat loops with smaller degrees (example repeat 10 times turning 36 degrees)
3. Move new areas of the screen to make designs without drawing across the screen edges  
4. Use **pen up** to move without drawing then **pen down** to start drawing


```block
// :solution
turtle.pen(TurtlePenMode.Down)
turtle.setPenColor(3)
for (let i = 0; i < 4; i++) {
    turtle.forward(30)
    turtle.turn(90)
}
turtle.setPenColor(6)
for (let i = 0; i < 4; i++) {
    turtle.forward(40)
    turtle.turn(90)
}
turtle.setPenColor(11)
for (let i = 0; i < 4; i++) {
    turtle.forward(50)
    turtle.turn(90)
}
turtle.setPenColor(9)
for (let i = 0; i < 4; i++) {
    turtle.forward(20)
    turtle.turn(90)
}
turtle.setPenColor(2)
for (let i = 0; i < 4; i++) {
    turtle.forward(20)
    turtle.turn(-90)
}
turtle.pen(TurtlePenMode.Up)
turtle.turn(180)
turtle.forward(25)
turtle.pen(TurtlePenMode.Down)
turtle.setPenColor(4)
for (let i = 0; i < 6; i++) {
    turtle.forward(20)
    turtle.turn(60)
}
turtle.turn(40)
turtle.setPenColor(3)
for (let i = 0; i < 4; i++) {
    turtle.forward(30)
    turtle.turn(90)
}
turtle.setPenColor(6)
for (let i = 0; i < 4; i++) {
    turtle.forward(40)
    turtle.turn(90)
}
turtle.setPenColor(11)
for (let i = 0; i < 4; i++) {
    turtle.forward(50)
    turtle.turn(90)
}
turtle.setPenColor(9)
for (let i = 0; i < 4; i++) {
    turtle.forward(20)
    turtle.turn(90)
}
turtle.setPenColor(2)
for (let i = 0; i < 4; i++) {
    turtle.forward(20)
    turtle.turn(-90)
}
turtle.pen(TurtlePenMode.Up)
turtle.turn(180)
turtle.forward(25)
turtle.pen(TurtlePenMode.Down)
turtle.setPenColor(12)
for (let i = 0; i < 6; i++) {
    turtle.forward(15)
    turtle.turn(60)
}
// :end-solution
```


## What did we learn?

1. Describe how a **repeat loop** makes programming easier in Turtle making the same design without code repetition. USe an example. 
2. Describe 2 more turtle blocks not discussed and give a hypothesis on how to use them.    


## Rubrics

### ~hint
Start on the left rubric column (5pts), if the work meets the rubric measurement continue to the right (7pts, 9pts, 10pts). Award the score of the right most rubric that is passed.  This means that to get the highest score, student must pass all previous rubrics.
### ~

### Turtle Rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Turtle  | Made Squares with a loop & Answered Questions|  Was able to nest More than 3 squares using loops | Answered questions with clear explanations using examples and/or analogies | Completed Challenge Code |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric [TODO review based on number of questions]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 