# Problem Set: Sprites

This section contains a number of selected problems for the Sprites section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Rubber Ducky

![Ducky](/static/courses/csintro3/structure/ducky.png)

You're prototyping a game and need to add a quick sprite. Create a ``||sprites:sprite||`` called ``||variables:ducky||`` that uses the ``||images:image||`` ``||sprites:sprites.duck.duck1||``

## Problem #2: An Object in Motion

``||sprites:Sprites||`` looks cool, but don't serve much purpose without motion. Create a ``||sprites:sprite||`` called ``||variables:princess||`` that uses the ``||images:image||`` ``||sprites:sprites.castle.princessFront0||``. Make the ``||variables:princess||`` move around using the ``||controller:controller||`` with velocities ``||sprites:vx||`` and ``||sprites:vy||`` both set to 100

## Problem #3: Smiley

The pre-made ``||sprites:sprites||`` are great, but can be limiting. Try making your own personal smiley-face sprite.

### ~hint

It may be helpful to use the Circle tool in the sprite editor. To use it, select the Rectangle tool and hold shift while drawing on the canvas.

### ~

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
