# Activity: Reduce redundancy using functions

Besides simplifying long sections of code, functions are also regularly used to reduce redundancy in code, similar to loops. Using functions, we can take code that is repeated in multiple locations, and keep it in one centralized location. That way, when there are changes needed or bugs found, the code can be updated in a single place, instead of in several (or a hundred different) locations.

In this activity, students will be introduced to:
* reducing redundancy using functions

## Example #1: Movement

1. Review the code below 
2. Create the sample code and run the code
3. Save the code for the example (name it "moveSprite")

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
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(20, 20)
mySprite.say("Hello!")
pause(1000)
mySprite.x += 10
mySprite.y += 10
music.playTone(262, music.beat(BeatFraction.Half))
mySprite.say("Hi!")
pause(1000)
mySprite.x += 10
mySprite.y += 10
music.playTone(262, music.beat(BeatFraction.Half))
mySprite.say("I'm here!")
pause(1000)
mySprite.x += 10
mySprite.y += 10
music.playTone(262, music.beat(BeatFraction.Half))
mySprite.say("Bye!")
pause(2000)
mySprite.destroy()
```

This code may seem like it's easy to simplify using loops at first, but there is a problem with that approach; each ``||sprites:say||`` block says something different!

In this case, it is easier to use ``||functions:functions||`` to reduce redundancy; that way, we can capture the portions of the code that are repeated, without losing the details that are actually different. In this case, the ``||loops:pause||``, ``||sprites:movement||``, and ``||music:tone||`` all happen in the same order throughout the code, so putting those pieces into a function reduces that redundancy. If it is later decided that playing a tone of `Middle E` works better, then only one block needs to be changed in one location, instead of 3 different blocks.

## Example #2: Movement using functions

1. Review the code below 
2. Create the sample code and run the code
3. Save the code for the example (name it "moveSpriteUsingFunctions")

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
function move() {
    pause(1000)
    mySprite.x += 10
    mySprite.y += 10
    music.playTone(262, music.beat(BeatFraction.Half))
}
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(20, 20)
mySprite.say("Hello!")
move()
mySprite.say("Hi!")
move()
mySprite.say("I'm here!")
move()
mySprite.say("Bye!")
pause(2000)
mySprite.destroy()
```

## Student Task #1: Simplification
1. Review the code below 
2. Create the sample code and run the code
3. Create a function to replace the series of blocks that are repeated each time a projectile is made
### ~hint

The function should include 4 blocks that appear in the same order 3 separate times.

### ~
4. Reduce the redundancy in the code using your newly created function, without changing the behavior of the game
5. **Challenge:** Change the behavior of the game by making the projectiles move to the right across the screen, and by making the ``||music:play tone||`` block play a `Middle A` instead

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 2 2 2 2 5 2 2 2 2 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
projectile.y += -30
pause(500)
music.playTone(262, music.beat(BeatFraction.Half))
pause(500)
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 f 5 f 5 5 5 f 5 5 . . . 
. . 5 5 f f f 5 f 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
projectile.y += -30
pause(500)
music.playTone(262, music.beat(BeatFraction.Half))
pause(500)
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 2 2 2 2 5 2 2 2 2 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
projectile.y += -30
pause(500)
music.playTone(262, music.beat(BeatFraction.Half))
pause(500)
game.over()
```

## Student Task #2
1. Review the code below 
2. Create the sample code and run the code
3. Create a function called "buttonPress" and copy over the behavior from the ``||controller:on A button pressed||`` event
4. Replace the contents of both the ``||controller:on A button pressed||`` and ``||controller:on B button pressed||`` blocks with a single ``||functions:call function buttonPress||``
5. **Challenge:** add in both a ``||sprites:set projectile ax to||`` and a ``||sprites:set projectile ay to||`` to ``||functions:function buttonPress||``, and set the newly created projectile to have random accelerations between -50 and 50. 

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    info.changeScoreBy(1)
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . . 3 2 3 . . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
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
`, Math.randomRange(-100, 100), Math.randomRange(-100, 100), SpriteKind.Player)
    projectile.setFlag(SpriteFlag.Ghost, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    info.changeScoreBy(1)
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . . 3 2 3 . . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
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
`, Math.randomRange(-100, 100), Math.randomRange(-100, 100), SpriteKind.Player)
    projectile.setFlag(SpriteFlag.Ghost, true)
})
game.splash("Press A and B!")
info.setScore(0)
info.startCountdown(15)
```

### TODO: Update as necessary when tasks & examples complete
## Rubrics

### task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
|  | Made three functions in task #1 | Completed all parts of task #1 | Completed task #2 | Completed challenge code |

### Score = \_\_\_\_\_\_ /10

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered one of the questions fully, or answered both questions but parts are unclear or lack detail | Explanations address both questions fully | All answers have clear explanations | Has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 