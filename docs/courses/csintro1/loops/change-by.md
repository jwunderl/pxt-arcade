# Activity: Button Speed   

Games often keep score to keep track of how well a player is doing. When programming in blocks, there are many ways game code needs to increase (or decrease) a count.  We refer to increasing count as increment and decreasing count as decrement. We will update our game score by using the  ``||change by||`` block.

In these activities, the student will use increments to increase a score, and move a sprite in a spiral: 
 
* repeat loops
* for index loops
* variables with increase by
* game update every
* info set score
* game countdown

## Concept: Increase By (increment)

# TODO: Create Video overview + increment.  Provide high level script outline.

* variables with increase by  
* game update every  
* info set score  

## Examples: Incrementing a Variable 

1. Review each example below
2. Create the sample and run the code
3. Save the code for the start of the next task (name it "increment") 
4. Note how changing the **increase by** amount changes the game score  

### Example: Increment with On Game Update 

```blocks  

let count = 0
game.onUpdateInterval(500, function () {
    count += 1
    info.setScore(count)
})

```

### Example: Increment with Button "A"   
```blocks  

let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 1
    info.setScore(count)
})

```  
### Example: Increment with Add Countdown   
```blocks  

let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 1
    info.setScore(count)
})

game.splash("Press \"A\" FAST", "GO!")
info.startCountdown(5)

```

### ~hint
**Teacher Note**  

> Splash pauses the game until a key is pressed  
> - show the students how the splash screen pauses the game start 

> Get students use to modifying the examples by modifying values  
> - update score increment, update interval and countdown time 
> - making the examples add 2 or 3 to the count on each button press, and identifying how that changes the results.
### ~

## Student Task 1: Make the game have a cheering coach
1. start with "Increment with Button A" example 
2. add a sprite to coach the player
3. use ``||sprites:say("")||`` to give words of encouragement, setting a short display time.
4. Make ``||sprites:say("")||`` so it flashes by placing it in ``||game:on game update(1000)||``
4. Challenge: Have the sprite coach giving current score and some cheer ("Faster!)

### ~hint
Challenge requires using **join** from Text Blocks under Advanced 
Then "join" the score with a few words of encouragement.

**score** is located in the info Blocks
### ~

### ~hint
**Teacher Note**  

> Show students sprite say has a millisecond duration setting  
```blocks
sprite.say("FASTER!", 500)
```

### ~

```blocks
// :solution

let sprite: Sprite = null
let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 1
    info.setScore(count)
})
scene.setBackgroundColor(12)
sprite = sprites.create(img`
. . . . . . . . 8 8 . . . . 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 . . 8 8 . . 8 8 . . 8 8 8 . . . . . . . . 
. . . . . 8 8 . . . 8 . . 8 . . . 8 . 8 8 8 . . . . . . . . . . 
. . . . . . 8 . . . 8 . . 8 9 . . 8 . 8 . . . . . . . . . . . . 
. . . . . . 8 . . 8 8 9 9 9 e 9 9 9 8 . . . . 8 8 8 8 8 . . . . 
. . . . . . 8 . . 8 9 e e e e e e e 9 9 . . 8 8 . . . . . . . . 
. . 8 8 . . 8 9 9 e e e e e e e e e e e 9 8 . . . . . . . . . 8 
. . . 8 . . 9 e e e e e e e e e e e e e e e 9 . . . . 8 8 8 8 8 
. . . 8 8 8 e e e e e e e e e e e e e e e e e 8 8 8 8 . . . . . 
. 8 . . . 9 e e e e e e e e e e e e e e e e e 9 . . . . . . . . 
. 8 8 . 9 e e e e 7 7 7 e e e e 7 7 7 7 e e e e 9 . . . 8 . . . 
. . 8 8 9 e e e 7 e e 4 e e e e 7 e e 4 e e e e 9 . 8 8 8 . . . 
. . . 9 e e e e e e e e e e e e e e e e e e e e e 9 . . . . . . 
. . . 9 e e e e e e e e e e 7 e e e e e e e e e e 9 . . . . . . 
. . . 9 e e e e e e e e e e e 7 e e e e e e e e e 9 8 8 . . . . 
. . 9 e e e e e e e e e e e e 7 7 e e e e e e e e e 9 . . . . . 
. . . 9 e e e e e e e e e e 7 7 7 e e e e e e e e 9 . . . . . . 
. . . 9 e e e e e e e e e e e e e e e e e e e e e 9 . . . . . . 
. . . 9 e e e e e e e e e e e e e e e e e e e e e 9 . . . . . . 
. . . . 9 e e e e b b b b b b b b b e e e e e e 9 . . . . . . . 
. . . . 9 e e e e e b b b b b b b e e e e e e e 9 . . . . . . . 
. . . . . 9 e e e e e b b b b b e e e e e e e 9 . . . . . . . . 
. . . . . 9 e e e e e e b b e e e e e e e e e 9 . . . . . . . . 
. . . . . . 9 e e e e e e e e e e e e e e e 9 . . . . . . . . . 
. . . . . . . 9 9 e e e e e e e e e e e 9 9 . . . . . . . . . . 
. . . . . . . . . 9 9 e e e e e e e 9 9 . . . . . . . . . . . . 
. . . . . . . . . . . 9 9 9 e 9 9 9 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
game.splash("Press \"A\" FAST", "READY, SET, GO!")
info.startCountdown(10)
game.onUpdateInterval(2000, function () {
    sprite.say(info.score() + " keep going", 500)
})

// :end-solution
```

## Student Task 2: Move in a spiral
We want to move the sprite in the following blocks in a spiral - starting with a small square, and moving further and further away as the iterations move on. Right now, though, the sprite just drifts up and to the left. We need to increase the distance that the sprite travels on each iteration so that it moves further and further away in all directions.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
sprite = sprites.create(img`
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
    sprite.x += 5
    pause(200)
    sprite.y += 6
    pause(200)
    sprite.x += -7
    pause(200)
    sprite.y += -8
}
```
1. First, add in a new variable - we'll refer to it as count. Set it at 0 to start.
2. Use the ``||variables:change by||`` block to increment count by 1 at the end of each iteration of the loop.
3. Add math expressions like ``||math:+||`` and ``||math:-||`` to use the variable count * 5 in the the movement of the sprite - that might look like

```block
sprite.x += -7 - count * 5
```


```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy
}
let count = 0
let sprite: Sprite = null
sprite = sprites.create(img`
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
count = 0
for (let i = 0; i < 10; i++) {
    pause(200)
    sprite.x += 5 + count * 5
    pause(200)
    sprite.y += 6 + count * 5
    pause(200)
    sprite.x += -7 - count * 5
    pause(200)
    sprite.y += -8 - count * 5
    count += 1
}
// :end-solution
```

## Student Task 3: for index loops
There is another type of loop that can help in implementing this behavior. The ``||loops:for index from 0 to 4||`` loop behaves very similarly to the repeat loop, but gives you access to a variable inside the loop called index. Each iteration this value will be updated - on the first iteration it will be 0, on the second iteration it will be 1, and so on, until it reaches the final iteration - with the default value of 4, this last iteration will have index be 4. This is very similar to how we used the count variable in the last task, so let's clean up that code by switching to this block.

1. Swap the ``||loops:repeat 10 times||`` block in your code for the ``||loops:for index from 0 to 4||`` block. Change the value in the loop block from 4 to 10.
2. Remove the initialization and incrementing of the count variable. Your code should now behave like it did before you made any modifications - drifting up and to the left.
3. Replace the count variable in all blocks that are changing the position of the sprite to use the index variable from the ``||loops:for index from 0 to 10||`` block.

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
sprite = sprites.create(img`
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
for (let index = 0; index <= 10; index++) {
    pause(200)
    sprite.x += 5 + index * 5
    pause(200)
    sprite.y += 6 + index * 5
    pause(200)
    sprite.x += -7 - index * 5
    pause(200)
    sprite.y += -8 - index * 5
}
// :end-solution
```

## What did we learn? [TODO create 2 questions]

1. In task 3, you may have noticed that when you switched from a repeat loop to a for loop, the sprite actually continued in it's spiral for a little bit longer than it did before. Why is that?
2. When might you want to choose to use a ``||loops:repeat||``  loop over a ``||loops:for index||`` loop?
### ~hint
Is there a difference between how many times ``||loops repeat 0 times||`` and ``||for index from 0 to 0||`` will run? 
### ~


## Rubrics


### Change by task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Loops  | Made the "coach" using the say block |  Used count to successfully complete task 2 | Transitioned to a 'for index from 0 to 10' loop in task 3 | Completed Challenge Code in Task 1 |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric [TODO review based on number of questions]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 1 questions fully or answered both questions but parts are unclear or lack detail | Explanations address both questions fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 