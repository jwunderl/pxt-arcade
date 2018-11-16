# Appendix: Nested Functions

When ``||functions:functions||`` get to be particularly complex, it can be helpful to break them up into smaller functions to clarify exactly what each section of the code is doing. This helps break up long sections of code into smaller, more readable chunks.

The downside of this would be that the new, smaller functions will be available to use everywhere in the code. Instead of a single function to manage the behavior, there will be one useful one with a number of smaller functions that are only used within the useful function.

To better manage this behavior, JavaScript allows for **nested functions**: functions that exist only within another function.

## Concept: Creating a Nested Function

The creation of a nested function is fairly simple: just declare the function as it is normally done, only within the scope of another function.

## Example #1: ``||functions:hello||`` and ``||functions:world||``

1. Review the code below
2. Identify how the nested functions ``||functions:hello||`` and ``||functions:world||`` are **created**
3. Identify how the two nested functions are **called**

```typescript
function helloWorld() {
    hello();
    world();

    function hello() {
        game.splash("hello");
    }
    function world() {
        game.splash("world");
    }
}

helloWorld();
```

## Student Task #1: Split up a Function

1. Review the code below
2. In a new project, recreate the code
3. Create two **nested functions** in ``||functions:splashAndDash||``: one to ``||game:splash||`` ``||variables:words||``, and one to move ``||variables:sprites||`` to the right by ``||variables:distance||``
4. Verify that the behavior has not changed after creating the two functions

```typescript
function splashAndDash(words: string, sprite: Sprite, distance: number) {
    game.splash(words);
    sprite.x += distance;
}

let mySprite: Sprite = sprites.create(sprites.duck.duck1);
pause(1000);
splashAndDash("I'm Moving!", mySprite, 25);
```