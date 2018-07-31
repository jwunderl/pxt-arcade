# Activity: Button Speed
 
* repeat loops
* for index loops
* variables with increase by
* game update every
* info set score
* game countdown

## Concept: Increase By (increment)

## Examples: Incrementing a Variable 
### Example: Increment with On Game Update 
### Example: Increment with Button "A"
### Example: Increment with Add Countdown

### ~hint

* Splash pauses the game until a key is pressed  
    * show the students how the splash screen pauses the game start 
* Get students use to modifying the examples by modifying values  
    * update score increment, update interval and countdown time 
    * making the examples add 2 or 3 to the count on each button press, and identifying how that changes the results.

### ~

## Student Task 1: Make the game have a cheering coach
### ~hint

> Show students sprite say has a millisecond duration setting  
```blocks
sprite.say("FASTER!", 500)
```

### ~

https://makecode.com/_2b6iiV41k50X

```blocks
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
```

## Student Task 2: Move in a spiral

https://makecode.com/_gb63TcFpcRmw

```blocks
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
    sprite.x += 5 + count
    pause(200)
    sprite.y += 6 + count
    pause(200)
    sprite.x += -7 - count
    pause(200)
    sprite.y += -8 - count
    count += 5
}
```

## Student Task 3: for index loops

https://makecode.com/_37ddd0RF88K7

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
let increase = 0
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
    sprite.x += 5 + increase
    pause(200)
    sprite.y += 6 + increase
    pause(200)
    sprite.x += -7 - increase
    pause(200)
    sprite.y += -8 - increase
    increase = index*5
}
```

## What did we learn?

1. In task 3, you may have noticed that when you switched from a repeat loop to a for loop, the sprite actually continued in it's spiral for a little bit longer than it did before. Why is that?
2. When might you want to choose to use a ``||loops:repeat||``  loop over a ``||loops:for index||`` loop?

### ~hint

Is there a difference between how many times ``||loops:repeat 0 times||`` and ``||loops:for index from 0 to 0||`` will run? A ``||loops: for index||`` loop will go from 0 to the parameter, including both the start of 0 and whatever the final value is. This means that ``||loops:for index from 0 to 0||`` will iterate one time, with ``||variables:index||`` having a value of 0.

### ~

## Rubrics

### Change by task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Loops | Made the "coach" using the say block | Used count to successfully complete task #2 | Transitioned to a ``||loops:for index from 0 to 10||`` loop in task #3 | Completed challenge code in task #1 |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered at least 1 questions fully, or answered both questions but parts are unclear or lack detail | Explanations address both questions fully | Both answers have clear explanations | Has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 