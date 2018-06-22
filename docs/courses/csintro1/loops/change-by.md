# Activity: Button Speed   

Games keep score and there are many ways game code needs to increase (or decrease) a count.  We refer to increasing count as Increment and decreasing count s decrement. We will update our game score by using  **change by**.

In these activities, the student will use increments to increase a score an make spirals: 

* turtle extension  
* repeat loops  
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

```block  

let count = 0
game.onUpdateInterval(500, function () {
    count += 1
    info.setScore(count)
})

```

### Example: Increment with Button "A"   
```block  

let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 1
    info.setScore(count)
})

```  
### Example: Increment with Add Countdown   
```block  

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


### ~

## Task: Make the game have a cheering coach
1. start with "Increment with Button A" example 
2. add a sprite to coach the player
3. use ||Sprites:say("")|| to give words of encouragement, setting a short display time.
4. Make ||Sprites:say("")|| so it flashes by placing it in ||Game: on game update(1000)|| 
4. Challenge: Have the sprite coach giving current score and some cheer ("Faster!)

### ~hint
Challenge requires using **join** from Text Blocks under Advanced 
Then "join" the score with a few words of encouragement.

**score** is located in the info Blocks
### ~

### ~hint
**Teacher Note**  

> Show students sprite say has a millisecond duration setting  
```block
sprite.say("FASTER!", 500)
```

### ~

```block
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
    sprite.say(info.score()   + " keep going", 500)
})

// :end-solution
```



## What did we learn? [TODO create 2 questions]

1. Describe how a [concept 1] makes programming easier, more powerful, reduced code, or something.... .  
2. Compare and contrast [something in the real world with coding] grocery store line or ask student to come up with a comparison.  
3. [Come up with a question of your choice]


## Rubrics


### Change by task rubric [TODO]

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Turtle  | Made Squares with a loop & Answered Questions|  Was able to nest More than 3 squares using loops | Answered questions with clear explanations using examples and/or analogies | Completed Challenge Code  |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric [TODO review based on number of questions]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 