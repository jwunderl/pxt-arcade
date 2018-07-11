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
// https://makecode.com/_Ca23io8e6H9f

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
```

## Example #3: check for random overlap 

1. Review the code below
2. Create the sample code and run the code 
4. Examine the use of SpriteKind in the overlap.

```blocks  

enum SpriteKind {
    Player,
    Enemy,
    Hat
}
let actor: Sprite = null
let hat: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    actor.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hat, function (sprite, otherSprite) {
    sprite.say("Excuse Me!", 500)
})
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
`, SpriteKind.Hat)
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
hat.setPosition(35, 60)

```
## Task #3: check for random overlap with many sprites
1. starting with task #2 where the game randomly moves 2 sprites with button pushes
2. add at least 2 more sprites with random or fixed position
3. add an ``||sprite:on overlap||`` event result in a new behavior that uses ``||math:pick random||`` (e.g. - set velocity, set location, change location by, ..) with sprite action of saying something.
4. be sure the overlap will work for several sprite of the same SpriteKind
5. Challenge: make multiple sprites randomly change position with the 'A' button and both of the sprites a random velocity (use a range across negative and positive for vx and vy)

```blocks
// :solution

enum SpriteKind {
    Player,
    Enemy,
    Hat
}
let hat3: Sprite = null
let actor: Sprite = null
let hat2: Sprite = null
let hat1: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    actor.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
    hat1.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
    hat2.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
    hat3.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hat, function (sprite, otherSprite) {
    sprite.say("Excuse Me!", 500)
    sprite.vx = Math.randomRange(-15, 15)
    sprite.vy = Math.randomRange(-15, 15)
    sprite.x += 8
    pause(500)
    otherSprite.x = Math.randomRange(-20, 20)
    otherSprite.vy = Math.randomRange(-20, 40)
})
hat1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
. . . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . . d 8 d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Hat)
hat2 = sprites.create(img`
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
. . . 1 1 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . 
. . . . 1 1 1 1 1 6 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . 6 6 6 6 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . 6 4 6 6 6 1 6 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 6 6 1 1 1 1 1 . 1 1 . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 6 6 6 1 1 1 1 1 . 1 . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 1 1 . 1 1 1 . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . 1 1 1 1 1 . . . . . . . . . . 
. . . . . . . 6 6 6 6 6 6 6 6 6 . 1 1 1 1 1 . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . 1 1 1 1 . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . 1 . . . . . . . . . . 
. . . . . . 6 6 . . 6 6 6 6 6 . . . . . . 1 . . . . . . . . . . 
. . . . . . . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Hat)
hat3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 2 2 2 5 2 2 5 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 5 2 2 2 5 2 2 5 . . . . . . . . . . . . . . . 
. . . . . . . 5 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 5 2 2 5 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 5 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 5 2 5 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 5 2 2 2 2 2 2 2 5 . . . . . . . . . . . . . . . 
. . . . . . 2 7 7 7 7 7 7 7 7 7 . 2 . . . . . . . . . . . . . . 
. . . . 2 5 . 7 7 7 7 7 7 7 7 7 . . 2 . . . . . . . . . . . . . 
. . 2 2 . . . 7 f 7 7 7 7 7 7 7 . . . 5 . . . . . . . . . . . . 
2 5 . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . 2 . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . 2 . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . 5 . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Hat)
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
hat1.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
hat2.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
hat3.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))

// :end-solution
```

## What did we learn? 

1. Describe how a set random makes programming can make a game more interesting and/or challenging.
2. What is a good use of random that you would like to design into a future game - especially something we don't know how to do yet. Be descriptive of the game and how random is needed.  



## Rubrics


### TODO Rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| pick random  | completed at least 2 tasks |  completed all 3 tasks | completed all 3 tasks well and at least 1 challenge | Completed all tasks & challenges  |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric 

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered a questions but parts are unclear or lack detail | Explanations address all 2 questions fully | all answers have clear and useful explanations | both answers have exceptional explanations using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 