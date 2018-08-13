# Activity: Boolean Statements and Expressions

In these activities students will work with:
* boolean flags and values
* ``||logic:and||`` & ``||logic:or||``
* ``||logic:not||``

## Concept: Boolean Flags

## Example #1: Are you hungry?

## Student Task #1: Off and on

### Standard:

```blocks
let isHungry = false
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isHungry) {
        game.splash("You're hungry!")
    } else {
        game.splash("You're not hungry!")
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isHungry) {
        isHungry = false;
    } else {
        isHungry = true;
    }
})
game.splash("Press A if you are hungry!")
isHungry = false
```

### Challenge:

```blocks
let isHungry = false
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isHungry) {
        game.splash("You're hungry!")
    } else {
        game.splash("You're not hungry!")
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isHungry = !isHungry;
})
game.splash("Press A if you are hungry!")
isHungry = false
```

## Concept: ``||logic:and||`` & ``||logic:or||``

## Example #2a: ``||logic:and||``

## Example #2b: ``||logic:or||``

## Student Task #2: 

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 3 3 3 3 . 3 3 3 3 . . . 
. . . 3 . . . . . . . . . 3 . . 
. . . 3 . . . . . . . . . . 3 . 
. . . . . . . . . . . . . . . . 
1 . . 3 . . . . . . . . . . . . 
. . . 3 . . . . . . . . . . . . 
. . . 3 . . . . . . . . . . . . 
. . . 3 . . . . . . . . . . 3 3 
. . . 3 3 . 3 . . 3 . . 3 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
game.onUpdate(function () {
    if (mySprite.x < 30 && mySprite.y < 30) {
        mySprite.say("hello", 200)
    }
    if (mySprite.x > 80 || mySprite.y > 80) {
        mySprite.say("bye", 200)
    }
})
```