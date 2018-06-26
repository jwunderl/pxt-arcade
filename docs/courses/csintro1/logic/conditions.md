# conditionals

TODO: Conditionals to Play music, update life and/or Score

## Student Task: Figure out who did it! Solve the mystery
Identify what inputs are necessary for the three prompts so that you can win the game!


```blocks
// https://makecode.com/_Vde5gA2VhPRD
let one = game.askForString("It was:")
let two = game.askForString("At location:")
let three = game.askForString("With the:")
let secret = one == two && two == three && three == "zach"
let numOne = parseInt(two.substr(0, 1))
let numTwo = parseInt(two.substr(2, 2))

let boolOne = one.substr(0, 4) == "dr m"
let boolTwo = numOne == 7 && numTwo == 11
let boolThree = !(three == "soda" || three == "pop")
game.over(boolOne && boolTwo && boolThree || secret)
```

## Student Challenge: Using only one event, make each button play a different sound
### ~hint
    To capture all the different button presses with only a single event, you'll need to use the block for dealing with times when any button is pressed, and figure out which button was pressed using the "is [any] button pressed" block (and changing the button in the drop down.)
### ~
```blocks
// :solution
// https://makecode.com/_VYtcDCRcTJjJ
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        music.playSound(music.sounds(Sounds.PowerUp))
    } else if (controller.up.isPressed()) {
        music.playSound(music.sounds(Sounds.PowerDown))
    } else if (controller.right.isPressed()) {
        music.playSound(music.sounds(Sounds.JumpUp))
    } else if (controller.down.isPressed()) {
        music.playSound(music.sounds(Sounds.JumpDown))
    } else if (controller.A.isPressed()) {
        music.playSound(music.sounds(Sounds.BaDing))
    } else {
        music.playSound(music.sounds(Sounds.Wawawawaa))
    }
})
// :end-solution
```

```blocks
let count = 0
let director: Sprite = sprites.create(img`.`)

let buttons: string[] = [
    "A",
    "B"
]
let choice: number = Math.randomRange(0, buttons.length - 1)
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((controller.A.isPressed() && choice == 0) ||
            (controller.B.isPressed() && choice == 1)) {
        count += 1
        choice = Math.randomRange(0, buttons.length - 1)
    } else {
        count -= 2
    }
    info.setScore(count)
})

game.onUpdate(function () {
    director.say(buttons[choice]);
})
game.splash("Press the buttons", "GO!")
info.startCountdown(10)
```

## Student Task: Add the up and down arrow keys as buttons to mash
1: Start with the game above.
2: Add two more items to the buttons array: "UP" at index 2, and "DOWN" at index 3
3: Add conditions so that the game keeps track of the new buttons appropriately.
### ~hint
 controller.up and controller.down are the buttons you'll need to look at in your new conditions; see how controller.A and controller.B are handled in the current implementation
### ~

// Expanded Button Press game
```blocks
// :solution
let count = 0
let director: Sprite = sprites.create(img`.`)

let buttons: string[] = [
    "A",
    "B",
    "UP",
    "DOWN"
]
let choice: number = Math.randomRange(0, buttons.length - 1)
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((choice == 0 && controller.A.isPressed()) 
            || (choice == 1 && controller.B.isPressed())
            || (choice == 2 && controller.up.isPressed())
            || (choice == 3 && controller.down.isPressed())) {
        count += 1
        choice = Math.randomRange(0, buttons.length - 1)
    } else {
        count -= 2
    }
    info.setScore(count)
})

game.onUpdate(function () {
    director.say(buttons[choice]);
})

game.splash("Press the buttons", "GO!")
info.startCountdown(10)

// :end-solution
```