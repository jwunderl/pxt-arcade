# Task list:

## Sprite:
* Make a **32 x 32** sprite that has 3 circles filled with different colors
* Rename the the sprite from "agent" to "circles"
* Make the sprite be of kind "Circles"
* When the game starts, make ``||variables:circles||`` ``||sprite:say||`` something (for example, "I'm ready to play!") for **1000 ms**
## Motion and Button Events:
* Use the ``||controller:on left button pressed||`` and ``||controller:on right button pressed||`` blocks to make ``||variables:circles||`` move left and right, by using the ``||sprite:change x by||`` block. Make the circles move **5** in the direction specified each time the button is pressed (remember - moving in one direction )
### ~hint
Remember: moving in opposite directions is done by changing the value from positive to negative (or vice versa) - that means one button should change x by 5, and the other should change x by -5.
### ~
* Use the ``||controller:on up button pressed||`` and ``||controller:on down button pressed||`` blocks to make ``||variables:circles||`` change the y velocity by 2 in the specified direction when up or down is pressed. 
### ~hint
Changing the y velocity is done by changing the ``||variables:circles||`` ``||sprite:vy||``
###~
* How is changing a sprite's ``||sprite:x||`` value different from changing it's ``||sprite:vx||`` value?
* In the ``||loops:on start||`` block, set the ``||variables:circles||`` ``||sprite:ay||`` value to 5. This represents the circles **acceleration**, or how fast it increases in velocity. Try to keep the ``||variables:circles||`` in the screen.
* Challenge: set the ``||variables:circles||`` to have an acceleration of 2 in the x direction as well; how long can you keep it on screen? (Be sure to remove this when before moving on to the next task)

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy,
    Circles
}
let circles: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += 5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += -5
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += 5
})
circles = sprites.create(img`
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 2 2 3 . . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 2 2 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . . 
. . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . 
. . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 2 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 3 . . 
3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 2 3 . 
. 3 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 3 3 2 3 . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 3 . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 3 . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Circles)
circles.say("I'm ready to play!", 1000)
circles.ay = 5
circles.ax = 2
// :end-solution
```
## Sprite Kinds
* Use the ``||sprites:create empty sprite of kind Stars||`` block from the ``||sprites:Lifecycle||`` category inside of an ``||games:on game update every 500 ms||`` block to create a new sprite of kind Star twice per second. You'll need to make a new kind (in particular, ``||sprite:Stars||``) to do this.
* Now we can add some behavior to sprites of kind Stars. To do this, we need an ``||sprites:on created sprite of kind Stars||`` event. Inside of that, change the image of the sprite using the ``||sprites:set agent image to...||`` block, and dragging the sprite in place of the agent, as shown below. Make sure to make a nice image for your star!
![Using sprite parameter in on created event](/static/courses/csintro1/review/use-sprite-parameter.gif)
* Set the created sprite's ``||sprites:x||`` position to a random position on the screen, using the ``||scene:width||`` value in a ``||math:pick random between 0 and width||`` block.
* Set the created sprite's ``||sprites:y||`` position the same as above, using the ``||scene:height||`` in place of ``||scene:width||``.
* Set the created sprite's ``||sprites:z||`` index to -1, so that all ``||sprites:stars||`` will show up behind the ``||variables:circles||``.
* Set the created sprite's ``||sprites:lifespan||`` to 100, so that it will be destroyed after 100 'tics'. (This corresponds to 100 game updates)
### ~hint
Both the ``||sprites:z||`` and ``||sprites:lifespan||`` can be assigned using the drop down, similar to how the ``||sprites:x||`` can be set.
### ~

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy,
    Circles,
    Stars
}
let circles: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += 5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += -5
})
sprites.onCreated(SpriteKind.Stars, function (sprite) {
    sprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 5 1 . . . . . . . 
. . . . . 1 1 5 1 1 . . . . . . 
. . . . 1 5 5 5 5 5 1 . . . . . 
. . . . . 1 1 5 1 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    sprite.x = Math.randomRange(0, scene.screenWidth())
    sprite.y = Math.randomRange(0, scene.screenHeight())
    sprite.z = -5
    sprite.lifespan = 100
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += 5
})
circles = sprites.create(img`
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 2 2 3 . . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 2 2 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . . 
. . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . 
. . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 2 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 3 . . 
3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 2 3 . 
. 3 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 3 3 2 3 . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 3 . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 3 . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Circles)
circles.say("I'm ready to play!", 1000)
circles.ay = 5
game.onUpdateInterval(500, function () {
    sprites.createEmptySprite(SpriteKind.Stars)
})
// :end-solution
```