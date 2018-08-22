# Activity: if and if else logic
 
## Button Game

### Example #1a: random alternating message

https://makecode.com/_HXMRAzYY4YkU

### Example 1b: Check if correct button is pressed
https://makecode.com/_Ykp1vpKuF1JX

### Example 1c:  ``|logic:else|`` for random alternating message
https://makecode.com/_FDoAgwhKdh1X

## Student Task 1a: ``|logic:else|`` for Check if correct button is pressed

solution: https://makecode.com/_fbsXo7bcX9Kz


## Task #1b: End of Game Message

challenge solution: https://makecode.com/_f2XKXrcPtYhh

## What did we learn?

1. What's a case in which you use an ``||logic:if||`` but not an ``||logic:else||``?
2. For example 2c, we changed the ``|logic:if||`` ``|logic:if||`` structure to an ``|logic:if else||`` structure. Why does it make sense to do this?
3. What is the same and what is different between the following code samples? Which one is easier to read? Explain.

```blocks
if (info.score() > 10) {
    game.splash("Case 1: Win")
} else {
    if (info.score() > 5) {
        game.splash("Case 2: Tie")
    } else {
        game.splash("Case 3: Loss")
    }
}
```

```blocks
if (info.score() > 10) {
    game.splash("Case 1: Win")
} else if (info.score() > 5) {
    game.splash("Case 2: Tie")
} else {
    game.splash("Case 3: Loss")
}
```

## ~hint

### Possible Solution: Answers vary and can have opposite justifications

1. We could check if a player has a score = 20 and give encouragement with a say block.  The else would be empty if they don't have the score of 20 so we would omit else (not use the else).
2. With 2 "if" statements we **can** get the same result but with the "else" the 2 checks are connected and we know the first failed if the second one runs. Some tests can both be true like is it bigger than 100,and bigger than 50. Sometimes we only want to check if bigger than 50 after we know it is **not** bigger than 100.
3. The second is easier to read because the blocks are one after another and not squeezing and "if" inside of an "else."  [Answer may vary]
