# Problem Set: Sprites

This section contains a number of selected problems for the Sprites section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Duck, Duck, Goose

You've decided to make a game based off of "Duck, Duck, Goose".

You notice that there is an image of a duck already included in the gallery, which is perfect for the game. Create **two** ``||sprites:sprites||`` using the ``||sprites:sprites.duck.duck1||`` image from the gallery.

There is still one thing missing, though: the "Goose." Create a third ``||sprites:sprite||``, and use the image editor to draw the "Goose" for your game.

## Problem #2: The Main Character

``||sprites:Sprites||`` allow for the representation of characters in games. The main character of a game will often be a ``||sprites:Sprite||`` that the player controls.

Create a ``||sprites:sprite||`` that uses an image of a character from the gallery. Make the character move around using the ``||controller:controller||``.

## Problem #3: Quick Animation

Many of the ``||sprites:sprites||`` in the gallery form a sequence: slightly different images of the same character that can be used to 'animate' the sprite.

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let duck = sprites.create(sprites.duck.duck1, SpriteKind.Player)
for (let i = 0; i < 10; i++) {
    duck.setImage(sprites.duck.duck1)
    pause(150)
    duck.setImage(sprites.duck.duck2)
    pause(150)
}
```

``||sprites:setImage||`` can be used to change the image for a sprite that has already been made. The previous snippet shows an example of switching between two images for the ``||sprites:sprite||`` ``||variables:duck||``.

``||loops:Pause||`` is used after each ``||sprites:setImage||``, so that the images will be displayed on the screen for a little while before changing.

Fill out the animation with more calls to ``||sprites:setImage||`` and ``||loops:pause||`` in the ``||loops:for||`` loop. Add the following images to create an animation like the one below.

1. ``||sprites:sprites.duck.duck3||``
2. ``||sprites:sprites.duck.duck4||``
3. ``||sprites:sprites.duck.duck5||``
4. ``||sprites:sprites.duck.duck6||``

![Gif of Duck images 1-6](/static/courses/csintro3/structure/duck-animation.gif)

## Problem #4: What Kind of Sprite Are You

You're finding it difficult distinguishing between ``||sprites:sprites||`` when writing code. This is where different ``||sprites:SpriteKinds||`` can be helpful. Make two identical ``||sprites:sprites||`` except that they have different ``||sprites:SpriteKinds||``

## Problem #5: To the Left

There are some ``||sprites:sprites||`` such as enemies or obstacles that should move on their own instead of with the ``||controller:controller||``.

Create a ``||sprites:sprite||`` with the ``||sprites:kind||`` ``||sprites:Enemy||`` and set its ``||sprites:vx||`` to be -100

## Problem #6: Positioning

You don't want your ``||sprites:sprite||`` to move, but you don't want it in the center of the screen either.

Create a ``||sprites:sprite||`` and set its x to be 20 and its y to be 30

## Problem #7: TENemy 

Use a ``||loops:loop||`` that creates 10 ``||sprites:sprites||`` that all look like an enemy. Set each enemy ``||sprites:sprite||`` to be moving to the left. ``||loops:Pause||`` for 100 ms between enemies so they don't all appear at once.

## Problem #8: Enemy Swarm

Use a ``||loops:loop||`` that creates 5 enemies, but each with a different ``||sprites:x||`` position. They should all have the ``||sprites:y||`` position 0 and a ``||sprites:y||`` velocity of 100, but their ``||sprites:x||`` position should based on the following table

|Enemy Number| x position | y position | y velocity |
|------------|------------|------------|------------|
|0th enemy   |0           |0           |100         |
|1st enemy   |40          |0           |100         |
|2nd enemy   |80          |0           |100         |
|3rd enemy   |120         |0           |100         |
|4th enemy   |160         |0           |100         |
