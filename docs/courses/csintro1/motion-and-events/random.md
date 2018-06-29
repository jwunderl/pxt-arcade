# Activity: Random Sprite Location



In this activity student will work with: 
*  ``||math:pick random||`` to generate random numbers
* setting sprite x and y positions

## Concept: pick a random number
We can pick a random number in a range using ``||math:pick random||``.  We can set it to a variable and 'print' it out to the console. 

## Example #1: pick random
1. Review the code below
2. Create the sample code and run the code
3. press the "Show Console Simulator" and re-run several times to see random numbers
4. look for how the range (between two numbers) is set

```blocks  
let randomNumber = 0
randomNumber = Math.randomRange(0, 10)
console.logValue("number", randomNumber)
```  

### ~hint
**Teacher Note**
Pick random will generate (pick) a number from the lowest to the highest numbers entered in the block. For the example students should see numbers 0 to 10. This includes 0 and 10.

Have students refresh at least 10 times and track the largest and smallest number generated. Ask students who had a number bigger than 5.  All hands should go up.
Then ask for 6, 7, 8, 9, 10

Ask for students who got 11 and no hands should go up.

Repeat for smaller than 5 , down to zero.
### ~

## Task #1: create random numbers ranges 
1. starting with the above example 
2. adjust the code to pick a random number from 1 to 100
3. add a new variable 'anotherRandom` to pick a random number from 20 to 30
4. add ``||console:console log value||`` for 'anotherRandom' variable and change the label from 'x' to a meaningful label
4. Challenge: Log the value of a random number that can have both negative and positive values

```blocks
// :solution
// https://makecode.com/_guHCVgaxAiXy

let positiveOrNegative = 0
let anotherRandom = 0
let randomNumber = 0
randomNumber = Math.randomRange(1, 100)
console.logValue("1 to 100", randomNumber)
anotherRandom = Math.randomRange(20, 30)
console.logValue("20 to 30", anotherRandom)
positiveOrNegative = Math.randomRange(-10, 10)
console.logValue("-10 to 10", positiveOrNegative)

// :end-solution
```


## Concept: pick a random location

# TODO: Video eric
Games like to have an element of luck and surprise so we will use random number to place a sprite on the screen.  We can use a random range because we know the dimensions of the screen.

## Example #2: random sprite location 

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it 'randomLocation) 
4. Examine the use of pick random in the sprite location block.  The code does not assign the random pick to a variable.

```blocks  
enum SpriteKind {
    Player,
    Enemy
}
let actor: Sprite = null
actor = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 5 . . 5 . . 5 . . . . . . 
. . . . 5 . 5 . 5 . . . . . . . 
. . . . . 5 7 5 . . . . . . . . 
. . . . 5 7 2 7 5 . . . . . . . 
. . . . . 5 7 5 . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . 2 1 1 1 1 1 1 1 2 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . 1 . 1 . . . . . . . . 
. . . . 7 . . . 7 . . . . . . . 
. . . 7 . . . . . 7 . . . . . . 
. . 2 2 . . . . . 2 2 . . . . . 
`, SpriteKind.Player)
actor.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))

```  

## Task #2: Set random position using a button event
1. starting with example #2 example 
2. add a ``||controller:on A button pressed||`` button
3. make the action code for the 'A' button move a sprite to a new position
4. Add another sprite and make it move with the B button
5. Challenge: make both sprites change position with the 'A' button and make the 'B' button give one of the sprites a random velocity (use small numbers (e.g. - 10) negative and positive)

### ~hint
For Challenge: velocity can be set using the set sprite blocks

```block
let actor: Sprite = null
actor.vx = 0
actor.vy = 0
```
### ~

```blocks
// :solution

enum SpriteKind {
    Player,
    Enemy
}
let hat: Sprite = null
let actor: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    actor.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
    hat.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    actor.vx = Math.randomRange(-10, 10)
    actor.vy = Math.randomRange(-10, 10)
})
actor = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 5 . . 5 . . 5 . . . . . . 
. . . . 5 . 5 . 5 . . . . . . . 
. . . . . 5 7 5 . . . . . . . . 
. . . . 5 7 2 7 5 . . . . . . . 
. . . . . 5 7 5 . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . 2 1 1 1 1 1 1 1 2 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . 1 . 1 . . . . . . . . 
. . . . 7 . . . 7 . . . . . . . 
. . . 7 . . . . . 7 . . . . . . 
. . 2 2 . . . . . 2 2 . . . . . 
`, SpriteKind.Player)
hat = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . 
. . . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . 6 4 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
actor.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
hat.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))


// :end-solution


## What did we learn? [create 2 questions]

1. Describe how a [concept 1] makes programming easier, more powerful, reduced code, or something.... .  
2. Compare and contrast [something in the real world with coding] grocery store line or ask student to come up with a comparison.  
3. [Come up with a question of your choice]


## Rubrics


### TODO Rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Turtle  | Made Squares with a loop & Answered Questions|  Was able to nest More than 3 squares using loops | Answered questions with clear explanations using examples and/or analogies | Completed Challenge Code  |

### Score = \_\_\_\_\_\_ /10 