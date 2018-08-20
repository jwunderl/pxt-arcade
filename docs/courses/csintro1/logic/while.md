# Activity: Logic in Loops
Using ``||logic:if||`` and ``||logic:else||`` are great ways to make your code do something based on the state that it is in, but, they are limited in a way. Imagine the case in which you wanted to check to see if the same condition was met multiple times. 

In this activity, students will: 
* Use ``||loops:while||`` loops

## Concept: While loops
A ``||loops:while||`` loop is a loop that is kind of a combination of a ``||logic:if||`` block and a ``||loops:repeat||`` loop. It takes in a condition and will keep looping through the code provided **while** the condition is true. 

## TODO VIDEO

## Example 1: Guessing Game
1. Review the code below
2. Create the sample code and run the code
3. Identify why the code runs until the player guesses the correct answer.

```blocks
let guess = 0
let number = 0
number = Math.randomRange(0, 5)
game.splash("I'm thinking of a number between 1 and 5")
guess = parseInt(game.askForString("What's your guess"))
while (guess != number) {
    guess = parseInt(game.askForString("Guess again"))
}
game.splash("Correct!")
game.over(true)
```
This is a simple game that requires the player to guess a number that the game is thinking of. The game will generate a random number and will prompt the player to guess until they finally get it right. 

Another way to think about this task is that we want the code that prompts the player to guess to keep looping **while** they are getting the answer wrong. 

### ~hint
In English, the difference between "until" *some condition* and "while" *some condition* is simply that they are opposites.

Example: "We want to run this code until the player guesses it correctly" is the same as saying "We want to run this code while the player guesses it incorrectly".
### ~


## Example 2: Fireball Game

Review the following game
![Fire Shooter](/static/courses/csintro1/logic/fire-shooter.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Fireball,
    Fire,
    FireSource
}
let projectile: Sprite = null
let fireSource: Sprite = null
let mySprite: Sprite = null
let sprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.stopCountdown()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FireSource, function (sprite, otherSprite) {
    info.changeLifeBy(5)
    otherSprite.destroy()
})
sprites.onCreated(SpriteKind.FireSource, function (sprite) {
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
mySprite = sprites.create(img`
. . . . . . . f f f . . . . . . 
. . . . . . f 4 4 4 f . . . . . 
. . . . . f 4 4 4 4 4 f . . . . 
. . . . f 4 4 2 2 4 4 4 f . . . 
. . . . f 4 4 2 2 2 4 4 4 f . . 
. . . f 4 4 2 2 2 2 2 4 4 f . . 
. . . f 4 4 2 2 2 2 2 2 4 4 f . 
. . . f 4 4 2 2 2 5 5 2 4 4 f . 
. . f 4 4 4 2 2 2 5 5 5 4 4 4 f 
. f 4 4 4 2 2 2 5 5 5 5 4 4 4 f 
f 4 4 2 2 2 2 5 5 5 5 5 5 4 4 f 
f 4 4 2 2 2 2 5 5 5 5 5 5 4 4 f 
. f 4 4 4 2 2 5 5 5 5 5 5 4 f . 
. . f 4 4 4 4 4 4 4 4 4 4 4 f . 
. . . f 4 4 4 4 4 4 4 4 f f . . 
. . . . f f f f f f f f . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(15)
info.startCountdown(3)
game.onUpdateInterval(500, function () {
    fireSource = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 . . 5 . . . . . 
. . 2 . . . . 2 2 5 . . . . . . 
. . 2 . . . . 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 f 2 2 2 2 f 2 . . . . . . 
. . 2 2 f 2 2 f 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 f 2 2 f 2 2 . . . . . . 
. . 2 f 2 2 2 2 f 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.FireSource)
})
```

This is a game in which the object is to keep shooting fireballs for as long as you can. The player's ``||info:score||`` is how many fireballs they have fired. The issue being that they have a limited number of fireballs, which are stored as ``||info:life||``, and need to pickup fuel in order to get more. All that is missing is the code that will fire the fireballs.


Essentially, we want to check to see if the player has fireballs in their inventory, and if they do, then fire the projectile, decrease the ``||info:life||`` by 1, and increase the ``||info:score||`` by 1. 


We then have the problem that we need to do this multiple times. So we’ve seen that issue before when we learned about ``||loops:repeat||`` loops. However, ``||loops:repeat||`` loops take in a number and will repeat exactly that many times. The problem here is that when we start our loop, we won’t know how many times to repeat. We don’t know what our final score is going to be when we start. We simply want to repeat until the condition, that we still have fireballs/life left, is no longer true. 


This is a case in we want to use a ``||loops:while||`` loop because it takes in a condition and will keep looping through the code provided **while** the condition is true. 


So how does this apply to our fireball game? Well, we know the code that we need to run to fire a fireball and we know the condition that needs to be true, so we combine them into a ``||loops:while||`` loop and add it in the ``||Controller:A press event||``.


Now we see that the code runs exactly as intended.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Fireball,
    Fire,
    FireSource
}
let projectile: Sprite = null
let fireSource: Sprite = null
let mySprite: Sprite = null
let sprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.stopCountdown()
    while (info.life() > 0) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 4 4 4 4 f . . . . . 
. . . . f 4 4 2 4 4 4 f . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . f 4 4 2 2 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, 250, 0, SpriteKind.Fireball, mySprite)
        info.changeLifeBy(-1)
        info.changeScoreBy(1)
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FireSource, function (sprite, otherSprite) {
    info.changeLifeBy(5)
    otherSprite.destroy()
})
sprites.onCreated(SpriteKind.FireSource, function (sprite) {
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
mySprite = sprites.create(img`
. . . . . . . f f f . . . . . . 
. . . . . . f 4 4 4 f . . . . . 
. . . . . f 4 4 4 4 4 f . . . . 
. . . . f 4 4 2 2 4 4 4 f . . . 
. . . . f 4 4 2 2 2 4 4 4 f . . 
. . . f 4 4 2 2 2 2 2 4 4 f . . 
. . . f 4 4 2 2 2 2 2 2 4 4 f . 
. . . f 4 4 2 2 2 5 5 2 4 4 f . 
. . f 4 4 4 2 2 2 5 5 5 4 4 4 f 
. f 4 4 4 2 2 2 5 5 5 5 4 4 4 f 
f 4 4 2 2 2 2 5 5 5 5 5 5 4 4 f 
f 4 4 2 2 2 2 5 5 5 5 5 5 4 4 f 
. f 4 4 4 2 2 5 5 5 5 5 5 4 f . 
. . f 4 4 4 4 4 4 4 4 4 4 4 f . 
. . . f 4 4 4 4 4 4 4 4 f f . . 
. . . . f f f f f f f f . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(15)
info.startCountdown(3)
game.onUpdateInterval(500, function () {
    fireSource = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 . . 5 . . . . . 
. . 2 . . . . 2 2 5 . . . . . . 
. . 2 . . . . 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 f 2 2 2 2 f 2 . . . . . . 
. . 2 2 f 2 2 f 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 f 2 2 f 2 2 . . . . . . 
. . 2 f 2 2 2 2 f 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.FireSource)
})
```

