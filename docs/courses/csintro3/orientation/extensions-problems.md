# Problem Set: Extensions

This section contains a number of selected problems for the Extensions section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Vertical Movement

Corgio is much more fun when the corgi can jump around.

Add in a corgi into the game.

Use the ``||corgi:verticalMovement||`` function to allow for the user to make the corgi jump up and down.

## Problem #2: Conceited Corgi

Corgis need all the attention. 

After making the corgi move horizontally and making their sprite update, use the ``||corgi:follow||`` function to make the camera follow the corgi.


## Problem #3: Multiplayer

Games are better when you play with others.

Import the ``||controller:Local Multiplayer||`` extension.

Make a game that allows two players to move sprites around the screen. 

Use the ``||controller:controller.setPlayerSprite||`` and ``||controller:controller.controlPlayer||`` functions.

## Problem #4: Darts

Import the ``||darts:Darts||`` extension.

Use the extension to ``||darts:darts.create||`` a dart called ``||variables:myDart||``.

Use the ``||darts:myDart.setTrace||`` and ``||myDart.controlWithArrowKeys||`` functions to allow for control of the dart.

``||loops:Pause||`` for 10 seconds, (10,000 ms) and then use ``||darts:myDart.throwDart||`` to throw the dart.

```package
corgio
darts
```
