# Activity: Turtle Loops

Turtle is a classic Computer Science Program where the programmer controls a turtles motion.  The "turtle" (arrow sprite) can draw the path it takes to create interesting designs.  Many students will have seen Turtle or something similar previously if they have participated in various one hour coding activities.  Turtle is a "game" built in MakeCode Arcade that has it's own Blocks that we can use until we learn how to make our own movement controls.

In Arcade, Turtle is an **extension**. An extension is a "package" of code that can be added to enable some functionality - in this case it adds Turtle Blocks to the top of our Blocks Menu. The Animated Image below the video demonstrates how we enable the turtle blocks with the Turtle extension.

In this activity student will work with: 

* adding a code extension
* sprite motion
* repeat loop   

## Concept: Controlling the turtle's movement

# TODO: Video for Using Turtle extension to draw squares

Start with the following Turtle commands:  
* Forward *(steps)*  
* Turn *(degrees)*  
* Pen Down and Pen Up  
* Set pen color  
* Set Position *(x,y)*  

## Example: Drawing a square
1. go to Advanced Menu,  open extensions and add **Turtle**  
    ![Add Turtle Extension](../static/TurtleExtension.gif)
2. Create the sample code and run the code
3. Save the code for the task (name it "squares") 

```block  
turtle.setPenColor(3)
turtle.pen(TurtlePenMode.Down)
turtle.forward(30)
turtle.turn(90)
turtle.forward(30)
turtle.turn(90)
turtle.forward(30)
turtle.turn(90)
turtle.forward(30)
turtle.turn(90)
```  

## Student Task: add a larger square 
1. starting with the square from the example 
2. set a new pen color
3. add code making a square with a different length side (forward distance)
4. Optional: Try adding a square using `-90` degrees  

```block
// :solution
turtle.setPenColor(3)
turtle.pen(TurtlePenMode.Down)
turtle.forward(50)
turtle.turn(90)
turtle.forward(50)
turtle.turn(90)
turtle.forward(50)
turtle.turn(90)
turtle.forward(50)
turtle.turn(90)

turtle.setPenColor(6)
turtle.forward(30)
turtle.turn(90)
turtle.forward(30)
turtle.turn(90)
turtle.forward(30)
turtle.turn(90)
turtle.forward(30)
turtle.turn(90)

turtle.setPenColor(11)
turtle.forward(40)
turtle.turn(-90)
turtle.forward(40)
turtle.turn(-90)
turtle.forward(40)
turtle.turn(-90)
turtle.forward(40)
turtle.turn(-90)
// :end-solution
```


## Concept: Designing Turtle Art with Loops (introduce the repeat block)

# TODO: Video for Using Turtle with a repeat loop and increment steps  

Whenever we see the same code repeated several times it is a good time to consider using a loop!

## Example: Drawing a square with a loop

```block
turtle.pen(TurtlePenMode.Down)
turtle.setPenColor(3)
for (let i = 0; i < 4; i++) {
    turtle.forward(50)
    turtle.turn(90)
}
turtle.setPenColor(6)
for (let i = 0; i < 4; i++) {
    turtle.forward(30)
    turtle.turn(90)
}
```
## Student Task: Nest boxes created with loops

1. Add new outer Boxes 
2. Make the new boxes different colors

### ~hint
Copy the blocks from the example  

Add additional code for a new square to move forward.  We will need to move forward by the distance of the side of a square.  Since a square has 4 sides, use a "loop 4 times" block containing:
* forward
* turn 

Pen Colors range from 0 - 15 and then repeat if larger numbers are used
### ~

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