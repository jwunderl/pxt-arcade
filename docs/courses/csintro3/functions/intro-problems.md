# Problem Set: Intro

This section contains a number of selected problems for the Intro section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Print a Letter

Using the ``||functions:functions||`` in the code snippet below, ``log`` a short (four line) letter to the console.

```typescript
function printIntro() {
    console.log("Dear Friend,");
}

function printMiddle() {
    console.log("How are you?")
    console.log("I am learning JavaScript!");
}

function printEnding() {
    console.log("Sincerely, Awesome Coder");
}
```

## Problem #2: My Favorite Color Is...

Create a ``||functions:function||``, ``||functions:myFavoriteColor||``, that will ``log`` the string ``My favorite color is `` to the console, followed by the name of your favorite color on the next line.

## Problem #3: Counting Fruit

Recreate the code snippet below, and replace the commented out line with a ``||functions:function||`` called ``||functions:countFruit||`` that will ``log`` the total number of fruit (the sum of ``||variables:apples||`` and ``||variables:oranges||``) to the console.

```typescript-ignore
let apples: number = 10;
let oranges: number = 5;

// countFruit goes here

countFruit();

oranges = 15;

countFruit();
```

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