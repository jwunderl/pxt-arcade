# if and if else logic
 
todo: Briefly Describe `if` and comparison test `x>3` Boolean result (T/F)

`// we are building to make this example part 1b https://makecode.com/_beuXJ0WvvMcU`

## Button Game

Make sprite alternate between saying "A" and "B"

# TODO: Video (eric)

### Example #1a: random alternating message

 todo code: sprite alternate msg

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

todo 3 questions