# Activity: Projectile Sprites
# TODO:  use the old function control in a onUpdate like previous 

Projectiles are regular sprites that destroy themselves when they go off of the visible screen.  Projectile sprite blocks also expose the properties for velocity (vx & vy).

Depending on the game a projectile can be dangerous, friendly, a nuisance that bumps the player out of the way or just a decoration that floats across the screen. in our code we will control projectiles to move across the screen or come from a specific sprite. Typically, projectiles will be used because we want movement for meteors, laser beams, cars, coins, cats, balloons or whatever we decide and there will be many created so it is good that they are destroyed when they go off screen so we don't need to worry about game performance issues from old projectiles sitting in memory. 

In this activity the student will implement:

* projectile sprites
* onUpdate 
* set sprite kind
* onOverlap kind
* on game update every
* pick random

# TODO Basic meteor demo and then add something to own program (teacher can have students who lost their code add birds to helicopter)

## Concept: [Concept 1]

# TODO: Create Video covering (list items above mostly).  Provide high level script outline.

Start with the following TODO Placeholder Stuff commands:  
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

```block  


```  

### ~hint
**Teacher Note**
TODO: These notes get removed for students and go to teacher guide so use exact format - think of advice on how the teacher might help un-stick students or reenforce concept.  A question you might pose.  "Ask students: What happens to the old value when we re-assign a new number to the lives? (Answer: it is destroyed and replaced with new assigned value)"  can use markdown lists here.
### ~

## Student Task: add horizontal projectiles that move across the screen
1. starting with the [simple example 1] example 
2. add [something simple....]
3. add [something simple....]
4. Optional: Try adding [something that they have to infer or that might take a little longer than the simple items above]

```block
// :solution

enum SpriteKind {
    Player,
    Enemy
}
let item: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (playerSprite, foodSprite) {
    game.over()
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.y = 100
game.onUpdate(function () {
    mySprite.x += controller.dx()
})
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectile(img`
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
`, 0, 50, SpriteKind.Enemy, item)
    projectile.x = Math.randomRange(0, 160)
    info.changeScoreBy(1)
})



// :end-solution
```

## Projectiles as sprites
Projectiles are just sprites with a bit of extra behavior by default; this means that you can do anything with them that you can do with sprites. You can change their speed, the image they show, and how they interact with other sprites. 

You can even use the projectiles you have made as the source of other projectiles! For example, we can start with the following cloud moving across the screen:

```block
enum SpriteKind {
    Cloud
}
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . 1 . . . 
. . 1 1 1 1 1 9 9 9 1 1 1 1 . . 
. . 1 1 9 9 9 9 1 9 9 9 9 1 . . 
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . . 
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 10, 0, SpriteKind.Cloud, null)
```

There isn't all that much to this code; it spawns a cloud, which slowly moves across the screen. However, what if we want to make the cloud rain? We can do this by adding projectiles that are emitted from the cloud itself!

```block
enum SpriteKind {
    Cloud,
    Rain
}
let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . 1 . . . 
. . 1 1 1 1 1 9 9 9 1 1 1 1 . . 
. . 1 1 9 9 9 9 1 9 9 9 9 1 . . 
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . . 
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 10, 0, SpriteKind.Cloud, null)
game.onUpdateInterval(__internal.__timePicker(50), function () {
    raindrop = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 30, SpriteKind.Rain, cloud)
})
```

We can change where the rain drops show up, so that they don't all appear in the same location relative to the cloud:

```block
https://makecode.com/_MtUYHyHiwdmy

enum SpriteKind {
    Cloud,
    Rain
}
let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . 1 . . . 
. . 1 1 1 1 1 9 9 9 1 1 1 1 . . 
. . 1 1 9 9 9 9 1 9 9 9 9 1 . . 
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . . 
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 10, 0, SpriteKind.Cloud, null)
game.onUpdateInterval(__internal.__timePicker(50), function () {
    raindrop = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 30, SpriteKind.Rain, cloud)
    raindrop.y += 3
    raindrop.x += Math.randomRange(1, 14)
})
```

And we can even count the raindrops that make it to the bottom of the screen by counting when they're destroyed!

```block
https://makecode.com/_5Wb33FiqaJeu
enum SpriteKind {
    Cloud,
    Rain
}
let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . 1 . . . 
. . 1 1 1 1 1 9 9 9 1 1 1 1 . . 
. . 1 1 9 9 9 9 1 9 9 9 9 1 . . 
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . . 
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 10, 0, SpriteKind.Cloud, null)
game.onUpdateInterval(__internal.__timePicker(50), function () {
    raindrop = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 30, SpriteKind.Rain, cloud)
    raindrop.y += 3
    raindrop.x += Math.randomRange(1, 14)
})

sprites.onDestroyed(SpriteKind.Rain, function (sprite: Sprite) {
    info.changeScoreBy(1)
})

sprites.onDestroyed(SpriteKind.Cloud, function (sprite: Sprite) {
    game.over(true)
})
```

## task add projectiles to previous code - horizontal (clouds and birds coming across screen)

## Concept: [concept 2 -another item form the list]

# TODO: might need a short video here 

[line or two of high level concept]

## Example: simple example 2 

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it [simple name 1]) 
4. [specific comment - "look for..."]

```block  
// simple code here
```  

## Task: add [something] to the code 
1. starting with the [simple example 1] example 
2. add [something simple....]
3. add [something simple....]
4. Optional: Try adding [something that they have to infer or that might take a little longer than the simple items above]

### ~hint
 // Hint to student
### ~

```block
// :solution

/* example of a full solution that the teacher can use - good to follow on previous solution but not required
comments are good!
we need the solution / end-solution tags so we can remove this for student version
*/

// :end-solution


## What did we learn? [create 2 questions]

1. Describe how a [concept 1] makes programming easier, more powerful, reduced code, or something.... .  
2. Compare and contrast [something in the real world with coding] grocery store line or ask student to come up with a comparison.  
3. [Come up with a question of your choice]


## Rubrics


### TODO Rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| TODO Placeholder Stuff  | Made Squares with a loop & Answered Questions|  Was able to nest More than 3 squares using loops | Answered questions with clear explanations using examples and/or analogies | Completed Challenge Code  |

### Score = \_\_\_\_\_\_ /10 
