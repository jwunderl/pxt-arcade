# Comparisons 

**if and if else logic**
 
In our games we will often want to compare values to see if they match

* if player score is greater than opponent score we know our player is winning
* if the player has 0 lives left, then we set to game over
* if we complete all requirements, we pass the course

A program that is running a game can exist in different states at different times. Variables have different values, sprites may be in different locations, or the player’s score may be different. ``if`` and ``if else`` statements allow us  to make our programs behave in different ways based on the state of the game.

``||logic:if||`` statement work performing a test and if the logic test evaluates to true, then it will run code that is given. Some examples are:

* if the score is greater than 10, give additional countdown time
* if the player has 0 lives left, then game over

These are what are known as comparisons because they compare the value of two things.


To use an ``||logic:if||`` statement, simply drag the use an ``||logic:if||`` block and fill it with a comparison test.

### Example 1a

```blocks
if (info.highScore() > 5) {
    game.splash("Good luck!")
}
```
When we use an ``||logic:if||`` statement, we also have the option to add an else statement. An else block will only run in the event that the logic test given evaluates to false. In other words if the test is true, then the if block’s code will run, else, the else block’s code will run. 

To use an ``||logic:if else||`` block, either drag it from the logic menu, or click on the plus sign of an existing ``||logic:if||`` block.

### Example 1b

```blocks
if (info.highScore() > 5) {
    game.splash("Good luck!")
} else {
    game.splash("You got this!")
}
```

Using an ``||logic:if||`` block with an else block allows us to split all possibilities into just two categories and run code that is specific to each category. But what if we needed to split everything into three or four or more categories?
 To do this, we can use the ``||logic:else if||`` block. By clicking the plus sign of an ``||logic:if else||`` block, and an ``||logic:else if||`` block will appear. This requires another logic test and that splits the cases after the original logic test evaluates to false. 

### Example 1c

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

### Example a: random alternating message

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = Math.randomRange(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    }
    if (randomPick == 1) {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 4 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . e . . e . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 4 . 1 1 . 4 4 . . . 
. . . . . . 4 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```
https://makecode.com/_HXMRAzYY4YkU

### Example 2b: Check if correct button is pressed

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = Math.randomRange(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    }
    if (randomPick == 1) {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 4 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . e . . e . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 4 . 1 1 . 4 4 . . . 
. . . . . . 4 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

https://makecode.com/_FDoAgwhKdh1X

### Example 2c:  ``|logic:else|`` for random alternating message

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = Math.randomRange(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    } else {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 4 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . e . . e . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 4 . 1 1 . 4 4 . . . 
. . . . . . 4 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

https://makecode.com/_FDoAgwhKdh1X

## Student Task 1: ``|logic:else|`` for check if correct button is pressed


Now that we have the basic functionality of our game, let’s make it so that the player loses points when they press the wrong button.


1. Add else ``||logic:else||`` statements in the button press events that run code when the player enters the wrong button
2. Decrease the players ``||info:score||`` by 1 when they press the wrong button by using the ``||info:change score by||`` block

### ~hint

To decrease a value, you change its value by a negative amount

### ~

## Task #2: End of Game Message

Now let’s congratulate the player at the end of the game, giving them a specific message based on their ``||info:score||``.

1. Create an event for when the countdown ends by using the ``||info:on countdown end||`` block
2. Check to see if the player’s ``||info:score||`` is less than `20`. If it is, use a splash block to say “Beginner score of” and then the player’s ``||info:score||``

### ~hint

You can combine a string and a number to form a string using the ``||text:join||`` block.

### ~

3. Use an ``||logic:else||`` block to do the same for if the player’s ``||info:score||`` was greater than or equal to `20` but say “Pro score of” and then the player’s ``||info:score||``
4. Use a game over block to let the game know that it is over and that the player won

### ~hint 

By clicking the plus sign of a game over block, you can let the game know whether or not the player won. 

This will change the dialog shown on the game over screen. 

### ~


## Challenge
Make the sprite have a shake or bump effect each time it has a say so can see when letter updates even when it is the same.

## What did we learn?

1. What's a case in which you use an ``||logic:if||`` but not an ``||logic:else||``?
2. For example 2c, we changed the ``|logic:if||`` ``|logic:if||`` structure to an ``|logic:if else||`` structure. Why does it make sense to do this?
3. What is the same and what is different between the following code samples? Which one is easier to read?

```blocks
if (info.score() > 10) {
    game.splash("Case 1")
} else {
    if (info.score() > 5) {
        game.splash("Case 2")
    } else {
        game.splash("Case 3")
    }
}
```

```blocks
if (info.score() > 10) {
    game.splash("Case 1")
} else if (info.score() > 5) {
    game.splash("Case 2")
} else {
    game.splash("Case 3")
}
```
