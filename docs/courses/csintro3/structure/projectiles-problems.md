# Problem Set: Projectiles

This section contains a number of selected problems for the Projectiles section.

It is recommended that you review the problems, and complete a few before moving
on to the next section.

## Problem #1: To the Left

In games, ``||sprites:Enemy||`` ``||sprites:sprites||`` will often need to
move on their own to make the game harder for the player.

Create a ``||sprites:projectile||`` with the ``||sprites:kind||``
``||sprites:Enemy||``, and set it's ``||sprites:vx||`` to be 100.

Create another ``||sprites:projectile||`` with the ``||sprites:kind||``
``||sprites:Enemy||``, and set it's ``||sprites:vx||`` to be -100.

Create a unique image for each ``||sprites:sprite||``,
and pay attention to where they start and how they move.

## Problem #2: Ten of Me

Use a ``||loops:for||`` loop to create **twelve** ``||sprites:sprites||``
with an image of your choice.

Give each ``||sprites:sprite||`` a velocity to make it move to the left.
Set their ``||sprites:y||`` position to 10 times the loop variable
(``||variables:i||``), and their ``||sprites:x||`` position to
``||scene:screen.width||``.

``||loops:Pause||`` for 500 ms between enemies so they do not all appear at once.
