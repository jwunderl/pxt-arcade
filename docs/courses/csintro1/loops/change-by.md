# Activity: Button Speed   

Games often need to keep multiple variables to keep track of how well a player is doing. When programming in blocks, there are many ways game code needs to increase (or decrease) a count. We refer to increasing a count as incrementing it, and decreasing count as decrementing it. We will update our game score by using the  ``||variables:change by||`` block.

In these activities, the student will be introduced to:
* ``||loops:repeat||`` loops
* ``||loops:for index||`` loops
* Variables with ``||variables:increase by||``
* ``||game:on game update every||``
* Info ``||info:set score||``
* Game ``||info:countdown||``

## Concept: Increase By (increment)

# TODO: Create Video overview + increment.  Provide high level script outline.

* Variables with increase by  
* Game update every  
* Info set score  

## Examples: Incrementing a Variable 
1. Review each example below
2. Create the sample and run the code
3. Save the code for the start of the next task (name it "increment") 
4. Note how changing the ``||variables:change by||`` amount changes the game score  

### Example #1: Increment with On Game Update 

```blocks  
let count = 0
game.onUpdateInterval(500, function () {
    count += 1
    info.setScore(count)
})
```

### Example #2: Increment with "A" Button  

```blocks  
let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 1
    info.setScore(count)
})
```  

### Example #3: Increment with a Countdown   

```blocks
let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 1
    info.setScore(count)
})

game.splash("Press \"A\" FAST", "GO!")
info.startCountdown(5)
```

## Student Task #1: Make the game have a cheering coach
1. Start with code from example #2
2. Add a sprite to coach the player
3. Use ``||sprites:say("")||`` to give words of encouragement, setting a short display time (for example, 500 ms)
4. Make ``||sprites:say("")||`` so it flashes by placing it in ``||game:on game update(1000)||``
4. **Challenge:** Have the sprite coach give the current score in addition to a cheer ("Faster!")

## Student Task #2: Move in a spiral
We want to move the sprite in the following blocks in a spiral - starting with a small square, and moving further and further away as the iterations move on. Right now, though, the sprite just drifts up and to the left. We need to increase the distance that the sprite travels on each iteration so that it moves further and further away in all directions.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 8 . . . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 8 8 8 8 9 8 . . . 
. . . 8 8 8 8 8 8 8 9 9 9 8 . . 
. . 8 8 8 8 8 8 8 8 8 9 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
`, SpriteKind.Player)
for (let i = 0; i < 10; i++) {
    pause(200)
    mySprite.x += 5
    pause(200)
    mySprite.y += 6
    pause(200)
    mySprite.x += -7
    pause(200)
    mySprite.y += -8
}
```

1. First, add in a new variable - we'll refer to it as count. Set it at 0 to start
2. Use the ``||variables:change by||`` block to increment count by 1 at the end of each iteration of the loop
3. Add math expressions like ``||math:+||`` and ``||math:-||`` to use the variable count to increase the distance the sprite moves on each step - that might look like the code in this ``||loops:on start||`` block

```blocks
let mySprite: Sprite = null
let count = 0
mySprite.x += -7 - count * 5
```

The code above will multiply count by 5, and then subtract that result from 7 as in  `7 - (count * 5)`. Finally, it will add the result of that expression to the sprite's ``||sprites:x||`` coordinate.

## Student Task #3: for index loops
There is another type of loop that can help in implementing the behavior from task #2.

The ``||loops:for index from 0 to 4||`` loop behaves similar to the repeat loop, but gives you access to a variable inside the loop called index. Each iteration this value will be updated. 

* on the first iteration it will be 0
* on the second iteration it will be 1
* and so on, until it reaches the final iteration - with the default value of 4

This is very similar to how we used the count variable in the last task, so let's clean up that code by switching to this block.

1. Swap the ``||loops:repeat 10 times||`` block in your code for the ``||loops:for index from 0 to 4||`` block. Change the value in the loop block from 4 to 10
2. Remove the initialization and incrementing of the count variable. Your code should now behave like it did before you made any modifications - drifting up and to the left
3. Replace the count variable in all blocks that are changing the position of the sprite to use the index variable from the ``||loops:for index from 0 to 10||`` block

## What did we learn?

1. In task #3, you may have noticed that when you switched from a repeat loop to a for loop, the sprite actually continued in it's spiral for a little bit longer than it did before. Why is that? 
2. Is there a difference between how many times ``||loops:repeat 0 times||`` and ``||loops:for index from 0 to 0||`` will run? When might you want to choose to use a ``||loops:repeat||`` loop over a ``||loops:for index||`` loop?