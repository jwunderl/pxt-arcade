# Conditionals

## Student Task: Figure out who did it! Solve the mystery

## Student Challenge: Using only one event, make each button play a different sound

```blocks
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
```

## Student Task: Add the up and down arrow keys as buttons to mash

```blocks
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
```