# Button Events

As shown in blocks, button events are very important for games and programs. They serve as a way for the user to interact with the game or program.

Button events very important for games and programs because they are so important, there are multiple options available when writing these events; this makes the code necessary to run these events a bit more complex than other events

## Example #1: Basic Input

A quick example of a button event is the following

```typescript
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    // Code that runs when the button is pressed
    game.splash("A button was pressed");
});
```

Description of parts:

* `controller`: namespace which houses methods and values relating to the controller
* `anyButton`: the button the event is derived from - in this case, `anyButton` refers to all buttons
* `onEvent`: function used to assign a function for this event, similar to `game.onUpdate(..)`
* `ControllerButtonEvent`: an enum (like `SpriteKind`) to distinguish between the different types of button events (``.Pressed``, ``.Released``, and ``.Repeated``)
* `.Pressed`: the property of the `ControllerButtonEvent` to select - indicates that the event should trigger whenever the button is pressed.

### ~hint


The auto-complete feature in the editor can be extremely helpful when writing button events

![Auto complete for button events](/static/courses/csintro3/events/controller-auto-complete.gif)

### ~

## Student Task #1: convert provided code similar to above from anyButton to A (with lots of hints)

1. Copy the code from the example above
2. Modify it so that instead of ``||game:game.splash||``ing on any button press, it the event only occurs when the ``||controller:A||`` button is pressed. 

### ~hint

The ``||controller:controller||`` namespace contains several buttons that can be used when defining events like this. `anyButton` is one that represents when all buttons are pressed. You'll need to find the one that represents when the ``||controller:A||`` button is pressed.

### ~

## Example #2: To the left

1. Review the code snippet below
2. Identify what code gets run when the event is triggered

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -5
})
```

## Student Task #2: To the right
1. Start with the code from example #2
2. Add in an event that makes the sprite move to the right when then right button is pressed
3. Test moving the sprite back and forth from left to right

## Example #3: Pressed vs. Released

1. Review the code snippet below and open it in the simulator
2. Notice which event is triggered when a button is pressed vs when a button is released

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let topSprite: Sprite = null
let bottomSprite: Sprite = null
topSprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
bottomSprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
topSprite.setPosition(scene.screenWidth() / 2, 40);
bottomSprite.setPosition(scene.screenWidth() / 2, 80);

controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    topSprite.say("Pressed", 2000);
})

controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    bottomSprite.say("Released", 2000);
})
```

### What did we learn?

1. How are button events different than other events?
2. How is the specific button specified when creating a button event?
3. What is the difference between ``.Pressed`` and ``.Released``?