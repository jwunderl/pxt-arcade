# Problem Set: Parameters

This section contains a number of selected problems for the Parameters section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Urgent Message!

Implement a ``||functions:function||`` called ``||functions:urgentLog||`` that accepts a string called ``||variables:message||`` and a number called ``||variables:numOfTimes||`` as parameters.

The function should take the ``||variables:message||``, and ``log`` it to the console a total of ``||variables:numOfTimes||`` times.

## Problem #2: Caps Lock

The `Caps Lock` key on a keyboard is used to modify whether the letters you type show up in ``UPPER CASE`` or ``lower case``.

Implement a ``||functions:function||`` called ``||functions:printHello||`` that accepts a ``||logic:boolean||`` value called ``||variables:capsLock||``.

``||logic:If||`` ``||variables:capsLock||`` is ``||logic:true||``, the ``||functions:function||`` should print ``HELLO WORLD`` to the console; otherwise, it should print ``hello world``.

## Problem #3: Pizza Place

You've decided to build a Pizzeria, and need a computer to help finish the orders.

The ``||functions:function||`` ``||functions:makeOnePizza||`` below will place a pizza in a random location on the screen. Feel free to customize the pizza ``||sprites:Sprite||`` to use your families secret recipe.

```typescript
function makeOnePizza() {
    pause(200);
    let pizza: Sprite = sprites.create(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
    `);
    pizza.startEffect(effects.fire, 500);
    pizza.x = Math.randomRange(0, screen.width);
    pizza.y = Math.randomRange(0, screen.height);
}
```

Create a new project, and copy over ``||functions:makeOnePizza||``. Implement another ``||functions:function||`` called ``||functions:makeOrder||`` that takes in a number ``||variables:orderCount||`` as a parameter.

The ``||functions:makeOrder||`` ``||functions:function||`` should ``||game:game.splash||`` how many pizzas have been ordered, and then make that many pizzas using ``||functions:makeOnePizza||`` in a ``||loops:loop||``, ``||loops:pause||`` for 2 seconds

To test this, create the following orders:

* An order of 3 pizzas
* An order of 5 pizzas
* An order of 2 pizzas

## Problem #4: Sprite Factory

Write a ``||functions:function||`` called ``||functions:spriteFactory||`` that takes in an image called ``||variables:form||`` and a number called ``numOfSprites`` as parameters. The ``||functions:function||`` should take the image ``||variables:form||`` and create sprites that use that image. The ``||functions:function||`` should create the number of sprites that is specified.

The sprites will all default to be in the center of the screen and overlap one another. Find a way to show that there are multiple sprites, either using motion or placing them in different position. 

## Example #5: Follow the Leader

Write a ``||functions:function||`` called ``||functions:follow||`` that accepts two ``||sprites:sprites||`` as parameters, a ``||variables:leader||`` and a ``||variables:follower||``.

Modify the ``||sprites:vx||`` and ``||sprites:vy||`` values of the ``||variables:follower||`` ``||sprites:sprite||`` such that it will go in the direction of the ``||variables:leader||`` sprite.