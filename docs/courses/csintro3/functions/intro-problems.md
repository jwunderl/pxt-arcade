# Problem Set: Intro

This section contains a number of selected problems for the Intro section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Letter

Given the following code, how would you call these functions in order to print out the full letter?

```typescript
function printHeader() {
    console.log("Dear Friend,");
}

function printBody() {
    console.log("I am learning JavaScript!");
}

function printFooter() {
    console.log("Sincerely, Awesome Coder");
}
```

## Problem #2: My Favorite Color is

Write a function called ``myFavoriteCOlor`` that will ``console.log`` the string ``My favorite color is `` followed by what your favorite color is.

## Problem #3: Fruit

```typescript-ignore
let apples: number = 10;
let oranges: number = 5;

...

countFruit();
```

Replace the ``...`` with a function called ``countFruit`` that will ``console.log`` the total number of fruit (i.e. the sum of ``apples`` and ``oranges``).

## Problem #4: Pizza Place

The following function will randomly place a pizza sprite on the screen.

```typescript
function makePizza() {
    let pizza: Sprite = sprites.create(sprites.food.smallPizza);
    pizza.x = Math.randomRange(0, scene.screenWidth());
    pizza.y = Math.randomRange(0, scene.screenHeight());
    loops.pause(200);
}
```

Copy this function into your code. 

You're running your own pizza place and have received the following orders from customers:
* An order of 3 pizzas
* An order of 5 pizzas
* An order of 2 pizzas

Write code that for each order, will ``||game:game.splash||`` how many pizzas have been ordered and then use a ``||loops:for||`` loop to make that many pizzas.

## Problem #5: A Beautiful Day in This Neighborhood

Write 2 functions. The first function should be called ``buildHouse`` and should ``console.log`` the phrase ``Building a house``. The second function should be called ``buildNeighborhood`` and should use the ``buildHouse`` function to build 12 houses