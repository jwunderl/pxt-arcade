# Activity: Functions

Functions are a way to group lines of code to be run together. Sme of the benefits of using functions are organization, reuse and simplicity. 

Functions can contain multiple lines of code but can be called with a single statement.  We shall see how to use functions to create short code that avoids rewriting the same code over and over.  Also we will see how functions can make code easy to follow and reduce the need for documentation.


In this activity student implement: 
* simple functions
* calling  functions by name
* shortened main program logic that is easier to understand

## Concept: create a simple function

# TODO: Create Video covering (list items above mostly).  Provide high level script outline.

Start with the following TODO !!!!!Placeholder Stuff!!!! review and replace!!! commands:  
* Forward *(steps)*  
* Turn *(degrees)*  
* Pen Down and Pen Up  
* Set pen color  
* Set Position *(x,y)*  

## Example: [Simple example 1]
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it [simple name 1]) 
4. [specific comment - "look for..."]

```blocks  
// simple code here
```  

### ~hint
**Teacher Note**
TODO: These notes get removed for students and go to teacher guide so use exact format - think of advice on how the teacher might help un-stick students or reenforce concept.  A question you might pose.  "Ask students: What happens to the old value when we re-assign a new number to the lives? (Answer: it is destroyed and replaced with new assigned value)"  can use markdown lists here.
### ~

## Task: add [something] to the code 
1. starting with the [simple example 1] example 
2. add [something simple....]
3. add [something simple....]
4. Challenge: Try adding [something that they have to infer or that might take a little longer than the simple items above]

```blocks
let sum = 0
let d = 0
let c = 0
let b = 0
let a = 0
a = 1
b = 2
c = 3
d = 4
sum = a + b
sum = sum + c
sum = sum + d
game.splash("Sum =" + sum)
a = 5
b = 6
c = 7
d = 8
sum = a + b
sum = sum + c
sum = sum + d
game.splash("Sum =" + sum)
a = 9
b = 10
c = 11
d = 12
sum = a + b
sum = sum + c
sum = sum + d
game.splash("Sum =" + sum)

```
```blocks
// :solution

let d = 0
let c = 0
let b = 0
let sum = 0
let a = 0
function add() {
    sum = a + b
    sum = sum + c
    sum = sum + d
    game.splash("Sum = " + sum)
}
a = 1
b = 2
c = 3
d = 4
add()
a = 5
b = 6
c = 7
d = 8
add()
a = 9
b = 10
c = 11
d = 12
add()

// :end-solution
```
```blocks
// :solution

let d = 0
let c = 0
let b = 0
let sum = 0
let a = 0
function add() {
    sum = a + b
    sum = sum + c
    sum = sum + d
    game.splash("Sum = " + sum)
}
function assign() {
    b = a + 1
    c = b + 1
    d = c + 1
}
a = 1
assign()
add()
a = 5
assign()
add()
a = 9
assign()
add()

// :end-solution
```


## Concept: [concept 2 -another item form the list]

# TODO: might need a short video here 

[line or two of high level concept]

## Example: simple example 2 

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it [simple name 1]) 
4. [specific comment - "look for..."]

```blocks  
// simple code here
```  

## Task: add [something] to the code 
1. starting with the [simple example 1] example 
2. add [something simple....]
3. add [something simple....]
4. Challenge: Try adding [something that they have to infer or that might take a little longer than the simple items above]

### ~hint
 // Hint to student
### ~

```blocks
// :solution

/* example of a full solution that the teacher can use - good to follow on previous solution but not required
comments are good!
we need the solution / end-solution tags so we can remove this for student version
*/

// :end-solution


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