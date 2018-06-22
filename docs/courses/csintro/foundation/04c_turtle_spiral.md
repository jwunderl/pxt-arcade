# Activity: Turtle Spiral  

Using repeat loops in turtle we were able to create regular symmetric geometric shapes for squares, pentagons, triangles and others.  We can make spirals using loops similar to the loops we used to create our regular geometric shapes when we add **increment by**.

In these activities, the student will use increments to increase a score an make spirals: 

* turtle extension  
* repeat loops  
* variables with increase by  
* game update every  
* info set score  


## Concept: Loop with an increment - making a spiral

# TODO: short video here 

Instead of drawing a symmetric shape, each loop we increase side length and create a spiral.

## Example: "Square" spiral

1. Review the code examples below
2. Create the sample and run the code (Note: [Add Turtle Extension](../static/TurtleExtension.gif))

3. Save the code for the start of the next task (name it "spiral") 


```block  

let step = 0
step = 0
for (let i = 0; i < 50; i++) {
    turtle.turn(90)
    turtle.forward(step)
    step += 1
}

```  

## Task: add color to the code 
1. starting with the Square Spiral example  
2. add a variable for colorNumber and set it equal to 1  
3. in the loop change the color of the turtle pen using colorNumber



### ~hint
  - use turtle **set Pen Color** with the colorNumber variable  

 ```block
 turtle.setPenColor(colorNumber)
 ```

  - increment the colorNumber by 1 each loop  
### ~
  

```block  
// :solution

let colorNumber = 0
let step = 0
step = 0
colorNumber = 1
for (let i = 0; i < 50; i++) {
    turtle.setPenColor(colorNumber)
    turtle.turn(90)
    turtle.forward(step)
    step += 1
    colorNumber += 1
}

// :solution
```

```block

## Task: Different Shape Spirals

1. starting with the Square Spiral example  
2. adjust the amount the turtle turns so that it will make a different shape 
3. adjust the number of loops to fit the design to the screen size
4. Challenge: Make a Spiral start big and end small 

// :solution

let colorNumber = 0
let step = 0
colorNumber = 1
step = 1

for (let i = 0; i < 50; i++) {
    turtle.setPenColor(colorNumber)
    /* PENTAGRAM Spiral
    */
    turtle.turn(72)
    turtle.forward(step)
    
    /* step and colorNumber continue to increment each loop 
    */
    step += 1
    colorNumber += 1
}

// :end-solution

// :solution
// Challenge

let colorNumber = 0
let step = 0
step = 50
colorNumber = 1
for (let i = 0; i < 50; i++) {
    turtle.setPenColor(colorNumber)
    // PENAGRAM Spiral
    turtle.turn(72)
    turtle.forward(step)
    // step and colorNumber continue to increment each
    // loop
    step += -1
    colorNumber += 1
}

// :end-solution

## What did we learn? [TODO create 2 questions]

1. Describe how a [concept 1] makes programming easier, more powerful, reduced code, or something.... .  
2. Compare and contrast [something in the real world with coding] grocery store line or ask student to come up with a comparison.  
3. [Come up with a question of your choice]


## Rubrics


### TODO Rubric TODO

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Turtle  | Made Squares with a loop & Answered Questions|  Was able to nest More than 3 squares using loops | Answered questions with clear explanations using examples and/or analogies | Completed Challenge Code  |

### Score = \_\_\_\_\_\_ /10 