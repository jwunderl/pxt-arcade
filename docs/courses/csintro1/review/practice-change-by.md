# Practice 1: Egg Counter

## TODO: fix single block references

Have you ever wanted to make a computer count eggs for you? No? Well now you can!

1. Set up sprite of your choice on start, and set a variable called 'eggCount' to 0. This is what we'll use to count our eggs.
2. Using the `on game update every ` block, use `Sprites:say("")` to display the egg count. To get more practice with "join", use the score in a sentence that says something like "There are 6 eggs!"
3. Add an `on-A-button-press block` that increases the number of eggs by 12 when A is pressed. Yay for buying eggs!
4. Add an `on-B-button-press block` that decreases the number of eggs by 1 when B is pressed. A delicious egg was eaten that day.
### ~hint
`change by` will always add the number you tell it to to the variable you specify. It might be tricky to decrease the number eggs at first, but consider what types of numbers you can add to make the total smaller.
### ~
5. Add instructions `on start` with `splash` to tell a new player what each of the buttons do, so that they know how to start buying eggs.
6. We have one issue; we can eat eggs that don't exist! Use the `if` block to make sure that we only eat eggs if we have eggs remaining - that is, if `eggCount > 0`. If the player tries to eat an egg that they don't have, use the `else` condition to make it so the sprite says that they don't have any eggs left.


```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy
}

let sprite: Sprite = null
let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 12
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (count > 0) {
        count += -1
    } else {
        sprite.say("No more eggs :(")
    }
})
scene.setBackgroundColor(12)
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . . . . . f f . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . f . . f f . . . . . . . . f . . f f . . . . . . . . 
. . . . . f f . . . f f . . . . . . f . . . . f . . . . . . . . 
. . . . . f . . . . . f . . . . . . f . . . . . f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f . . . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . f . . . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . f . . . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . f . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f f . . . . f f f f . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
count = 0
sprite.setPosition(20, 40)
game.splash("Press A to buy 12 eggs", "Press B to eat 1 egg. Yum")
game.onUpdateInterval(1000, function () {
    sprite.say("You have " + count + "eggs", 1000)
})


// :end-solution
```

# Practice 2: Not a sprite, but a marathon

In this practice, you'll be moving a sprite across your screen with `change_by` to update coordinates.

1. Make a sprite that the player will control in this game.
2. Set variables `xCoordinate` and `yCoordinate` both to 32. These are what we will use to store the x and y locations of our sprite throughout the game.
3. On game update, use the set `_ position` block to set the position of our sprite. Use `xCoordinate` and `yCoordinate` to specify the values so our program will become flexible.
4. Add an `on right button pressed` that changes our `xCoordinate` variable by an amount. Choose anything you want - you can always change it later to be smoother.
5. Add an `on down button pressed` that changes our `yCoordinate` variable by some amount as well.

Now test out the code! You should be able to move your sprite down and to the right with the arrow keys.

```blocks
// :solution

enum SpriteKind {
    Player,
    Enemy
}
let ycoordinate = 0
let xcoordinate = 0
let sprite: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    xcoordinate += 5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ycoordinate += 5
})
sprite = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
xcoordinate = 32
ycoordinate = 32
game.onUpdate(function () {
    sprite.setPosition(xcoordinate, ycoordinate)
})

// :end-solution
```