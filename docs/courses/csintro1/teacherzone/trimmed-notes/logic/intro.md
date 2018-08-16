# if and if else logic
 
`// we are building to make this example part 1b https://makecode.com/_beuXJ0WvvMcU`

## Button Game

Make sprite alternate between saying "A" and "B"

# TODO: Video (eric)

### Example #1a: random alternating message

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = Math.randomRange(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    }
    if (randomPick == 1) {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 4 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . e . . e . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 4 . 1 1 . 4 4 . . . 
. . . . . . 4 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

https://makecode.com/_HXMRAzYY4YkU

### Example 1b: Check if correct button is pressed

todo code: check correct  button pushed and score

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = Math.randomRange(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    }
    if (randomPick == 1) {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 4 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . e . . e . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 4 . 1 1 . 4 4 . . . 
. . . . . . 4 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

https://makecode.com/_Ykp1vpKuF1JX

### Example 1c:  ``|logic:else|`` for random alternating message

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = Math.randomRange(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    } else {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 4 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . e . . e . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 4 . 1 1 . 4 4 . . . 
. . . . . . 4 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

https://makecode.com/_FDoAgwhKdh1X

## Student Task 1: ``|logic:else|`` for Check if correct button is pressed

todo step by step instructions to : Add `else` to button press that changes score by -1 when the incorrect button is pushed

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = Math.randomRange(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    } else {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 4 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . e . . e . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 4 . 1 1 . 4 4 . . . 
. . . . . . 4 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

https://makecode.com/_CCmRq34vm5tY

## Task #2: End of Game Message

todo step by step instructions to : Add `else` to button press that changes score by -1

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = Math.randomRange(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    } else {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    generate()
})
info.onCountdownEnd(function () {
    if (info.score() < 20) {
        game.splash("Beginner score of " + info.score())
    } else {
        game.splash("Pro score of " + info.score())
    }
    game.over(true)
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 4 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . e . . e . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 . . . . . . 4 . . . 
. . . . . 4 4 . 1 1 . 4 4 . . . 
. . . . . . 4 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

https://makecode.com/_6heMUmbDWh34J 

todo Challenge Make the sprite have a shake or bump effect each time it has a say so can see when letter updates even when it is the same.

https://makecode.com/_f2XKXrcPtYhh


## What did we learn?
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
