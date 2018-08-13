# if and if else logic
 
todo: Briefly Describe `if` and comparison test `x>3` Boolean result (T/F)

`// we are building to make this example part 1b https://makecode.com/_beuXJ0WvvMcU`

When coding, your program can exist in different states when you run it different times. Variables could be different values, sprites may be in different locations, or the player’s score may be different. So we pose the question, how can you make your program behave in different ways depending on the specific state it is in?

The answer is by the use of what are called `if` statements. The way an `if` statement works is that it will take some sort of logic test and if the logic test evaluates to true, then it will run code that is given. A logic test is something that will evaluate to a Boolean, meaning it’s either true or false. Some examples are `score = 10`, `x < 5`, `life ≥ 0`. These are what are known as comparisons because they compare the value of two things.

To use an `if` statement, simply drag the use an ``||logic:if||`` block and fill it with a comparison test.

```blocks
if (info.highScore() > 5) {
    game.splash("Good luck!")
}
```
When we use an if statement, we also have the option to add an else statement. An else block will only run in the event that the logic test given evaluates to false. In other words if the test is true, then the if block’s code will run, else, the else block’s code will run. 

To use an if else block, either drag it from the logic menu, or click on the plus sign of an existing if block.

```blocks
if (info.highScore() > 5) {
    game.splash("Good luck!")
} else {
    game.splash("You got this!")
}
```

Using an if block with an else block allows us to split all possibilities into just two categories and run code that is specific to each category. But what if we needed to split everything into three or four or more categories?
 To do this, we can use the else if block. By clicking the plus sign of an if else block, an else if block will appear. This requires another logic test and that splits the cases after the original logic test evaluates to false. 

```blocks
if (info.highScore() > 5) {
    game.splash("Good luck!")
} else if (info.highScore() < 1) {
    game.splash("Piece of cake!")
} else {
    game.splash("You got this!")
}
```
This code will first check if the high score for the game is greater than five. If it is, then it will wish you “Good luck!”. If it is not, then it will check the second logic test to see if the score is less than one. If it is, then it will let the player know that the game should be a “Piece of cake!”. If it is not less than one, then the game will tell the player “You got this!”


## Button Game

Make sprite alternate between saying "A" and "B"

# TODO: Video (eric)

### Example #1a: random alternating message

 todo code: sprite alternate msg

### Example 1b: Check if correct button is pressed

todo code: check correct  button pushed and score

### Example 1c:  ``|logic:else|`` for random alternating message

https://makecode.com/_eMhT2Xc2maru

## Student Task 1: ``|logic:else|`` for Check if correct button is pressed

todo step by step instructions to : Add `else` to button press that changes score by -1 when the incorrect button is pushed

### Task #2: End of Game Message

todo step by step instructions to : Add `else` to button press that changes score by -1

https://makecode.com/_f6qLRv744frJ 

todo Challenge Make the sprite have a shake or bump effect each time it has a say so can see when letter updates even when it is the same.

## What did we learn?

todo 3 questions