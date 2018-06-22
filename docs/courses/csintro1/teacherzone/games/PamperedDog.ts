let hunger = 0
let brushMode = false
let foodMode = false
let sleepMode = false
let brush: Sprite = null
let sprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sleepMode) {
        info.changeScoreBy(-2)
    }
})
function foodPoints() {
    if (foodMode && hunger > 0) {
        sprite.say("" + hunger + " more foods pls")
        hunger += -1
        info.changeScoreBy(1)
    } else if (foodMode) {
        sprite.say("no more foods pls :(")
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(-1)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    brush.x += 5
    brushPoints()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    brush.y += -5
    brushPoints()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    brush.y += 5
    brushPoints()
})
function brushPoints() {
    if (brushMode && sprite.overlapsWith(brush)) {
        info.changeScoreBy(1)
    } else if (sprite.overlapsWith(brush)) {
        info.changeScoreBy(-2)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    brush.x += -5
    brushPoints()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    foodPoints()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    foodPoints()
})
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f . . . f . . . . . . . . . . . . . . . . . . . . . . . 
. . . f 1 f . f 1 f . . . . . . . . . . . . . . . . . . . . . . 
. . . f 1 f f f 1 f . . . . . . . . . . . . . . . . . . . . . . 
. . . f 1 1 1 1 1 1 f . . . . . . . . . . . . . . . . . . . . . 
. . f 1 1 f 1 1 f 1 1 f f . . . . . . . . . . . . . . . f . . . 
. . f 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . f f f . . . 
. . f 1 1 1 f f 1 1 1 1 f f . . . . . . . . . . . . f . f . . . 
. . f 1 1 1 f 1 1 f 1 1 1 f f f f f f . . . . . . f f . f . . . 
. . f 1 1 f f f f 1 1 1 1 1 1 1 1 1 f f . . . . . f 1 f f . . . 
. . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f . . f 1 1 f . . . . 
. . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 f . . . . . 
. . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f . . . . . 
. . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f . . . . . . 
. . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . . . . . . . 
. . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f . . . . . . . 
. . . f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . f f 1 1 1 f f 1 1 1 1 f f f 1 1 1 f f 1 1 f . . . . . . . 
. . . f 1 1 1 1 f f 1 1 1 1 f . f 1 1 f f f 1 1 f . . . . . . . 
. . . f 1 1 1 f f f f 1 1 f f . f f 1 f . f 1 1 f . . . . . . . 
. . . f f 1 1 f . . f 1 1 f . . . . f f . f f f f . . . . . . . 
. . . . f f f f . . f f f f . . . . f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, 0)
sprite.x = 20
brush = sprites.create(img`
e e e e e 5 5 5 
e e e e e 5 . . 
e e e e e 5 5 . 
e e e e e 5 5 5 
e e e e e 5 5 5 
e e e e e 5 5 . 
e e e e e 5 5 5 
e e e e e 5 . . 
e e e e e 5 5 5 
e e e e e 5 5 . 
e e e e e 5 5 5 
e e e e e 5 5 5 
e e e e e 5 5 5 
e e e e e 5 5 . 
e e e e e 5 5 . 
e e e e e 5 5 5 
`, 0)
info.startCountdown(30)
info.setScore(0)
game.onUpdateInterval(__internal.__timePicker(1000), function () {
    if (sleepMode && !(controller.anyButton.wasPressed())) {
        info.changeScoreBy(10)
    }
})
game.onUpdateInterval(__internal.__timePicker(5000), function () {
    sprite.say("woof!!")
    if (Math.percentChance(33)) {
        foodMode = true
        brushMode = false
        sleepMode = false
        hunger = Math.randomRange(10, 50)
        sprite.say("food me!")
    } else if (Math.percentChance(50)) {
        foodMode = false
        brushMode = true
        sleepMode = false
        sprite.say("brush me!")
    } else {
        foodMode = false
        brushMode = false
        sleepMode = true
        sprite.say("let me sleepo beepo!")
    }
})
