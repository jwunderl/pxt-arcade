# Problem Set: Parameters

This section contains a number of selected problems for the Parameters section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Urgent Message!

Implement a ``||functions:function||`` called ``||functions:urgentLog||`` that accepts a string called ``||variables:message||`` and a number called ``||variables:numOfTimes||`` as parameters.

The function should take the ``||variables:message||``, and ``log`` it to the console a total of ``||variables:numOfTimes||`` times.

## Problem #2: Caps Lock

The `Caps Lock` key on a keyboard is used to modify whether the letters you type show up in ``UPPER CASE`` or ``lower case``.

Implement a ``||functions:function||`` called ``||functions:printHello||`` that accepts a ``||logic:boolean||`` value called ``||variables:capsLock||``.

``||logic:If||`` ``||variables:capsLock||`` is true, the ``||functions:function||`` should print ``HELLO WORLD`` to the console; otherwise, it should print ``hello world``.

## Problem #3: Pizza Place

The following ``||functions:function||`` will randomly place a pizza sprite on the screen.

```typescript
function makePizza() {
    let pizza: Sprite = sprites.create(sprites.food.smallPizza);
    pizza.x = Math.randomRange(0, scene.screenWidth());
    pizza.y = Math.randomRange(0, scene.screenHeight());
    loops.pause(200);
}
```

Copy this ``||functions:function||`` into your code. 

You're running your own pizza place and have received the following orders from customers:

* An order of 3 pizzas
* An order of 5 pizzas
* An order of 2 pizzas

Write a ``||functions:function||`` called ``||functions:makeOrder||`` that takes in a number``||variables:numOfOrders||`` as a parameter. The ``||functions:function||`` should ``||game:game.splash||`` how many pizzas have been ordered and then use a ``||loops:for||`` loop to make that many pizzas.

## Problem #4: Sprite Factory

Write a ``||functions:function||`` called ``||functions:spriteFactory||`` that takes in an image called ``||variables:form||`` and a number called ``numOfSprites`` as parameters. The ``||functions:function||`` should take the image ``||variables:form||`` and create sprites that use that image. The ``||functions:function||`` should create the number of sprites that is specified.

The sprites will all default to be in the center of the screen and overlap one another. Find a way to show that there are multiple sprites, either using motion or placing them in different position. 

## Example #5: Follow the Leader

Write a ``||functions:function||`` called ``||functions:follow||`` that accepts two ``||sprites:sprites||`` as parameters, a ``||variables:leader||`` and a ``||variables:follower||``.

Modify the ``||sprites:vx||`` and ``||sprites:vy||`` values of the ``||variables:follower||`` ``||sprites:sprite||`` such that it will go in the direction of the ``||variables:leader||`` sprite.