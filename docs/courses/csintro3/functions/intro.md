# Activity: Intro to JavaScript Functions

In Blocks, ``||functions:functions||`` served as a powerful tool in making complex games easier to read, as well as reducing redundancy within the games.

These benefits remain in JavaScript, along with many more features of functions that were unavailable in Blocks.

## Concept: Functions in JavaScript

``||functions:Functions||`` in JavaScript are a bit more complex to start with than ``||functions:Functions||`` in Blocks.

However, functions in JavaScript are used much more commonly than in blocks, so it won't take long to get used to the new syntax.

```typescript-ignore
function name() {
    // function contents
}
name();
```

In this code snippet, focus on the following elements of the function:

* ``function``: indicates the start of a new function (similar to ``let`` indicating a new variable)
* ``name``: the name for the function you are creating
* ``{}``: the statements between the opening and closing curly brace are the contents of the function (equivalent to the blocks inside the function); in this case, the function does nothing, as there is only a comment inside of it
* ``name()``: calls the function ``name``, running the code that is assigned to it

### ~hint

The parentheses (``()``) between the function name and the curly braces will become important in future lessons, but only serve as a necessary part of the syntax for now.

### ~

## Example #1: Say Hello

1. Review the code below
2. Convert the code to Blocks
3. Identify which blocks came from which parts of the code

```typescript
function sayHello() {
    game.splash("hello");
}

sayHello();
```


### ~hint

Does the function ever run if the code is not called with ``||functions:sayHello()||``? Remove that line from the previous example and check.

### ~


## Example #2: My Little Friend

## Variable scoping / functions different from blocks

```typescript
function makeNumbers() {
    let first: number = 5;
    let second: number = 6;
    game.splash((first + second) + "");
}

makeNumbers();
```

run the code. Makes variables in function, etc, etc.

```typescript-ignore
function makeNumbers() {
    let first: number = 5;
    let second: number = 6;
    game.splash((first + second) + "");
}

makeNumbers();
game.splash(first + "");
```

Why doesn't this work -> variables not defined outside the scope of makeNumbers, so they are only usable in there.

Why this is good:

```typescript
function makeNumbers() {
    let first: number = 5;
    let second: number = 6;
    game.splash((first + second) + "");
}

function makeOtherNumbers() {
    let first: number = 5;
    let second: number = 6;
    game.splash((first * second) + "");
}

makeNumbers();
makeOtherNumbers();
```

explain how keeping the variables in a small scope allows for the names to be used in multiple different contexts, without the possibility of interfering with one another (e.g. button presses with pauses causing them to happen in the same time period). Also helps minimize the number of values available at any given scope -> if a value is only ever useful within a method, there's no reason to keep track of it outside that method.

If the other behavior is preferred (for example, a given function modifies a variable), the value can be identified outside any functions and referenced inside - that is

```typescript
let first: number;
let second: number;
function makeNumbers() {
    first = 5;
    second = 6;
    game.splash((first + second) + "");
}

function makeOtherNumbers() {
    first = 5;
    second = 6;
    game.splash((first * second) + "");
}

makeNumbers();
makeOtherNumbers();
```

(maybe note that this can lead to weird bugs like the following
```typescript-ignore
let first: number;
let second: number;
function makeNumbers() {
    let first = 5;
    let second = 6;
    game.splash((first + second) + "");
}

function makeOtherNumbers() {
    first = 5;
    second = 6;
    game.splash((first * second) + "");
}

makeNumbers();
game.splash("" + first); // Why is first not defined???!
makeOtherNumbers();
```
with local variables in makeNumber shadowing the variables outside, making them **different variables with the same name**
)

Note that this is the default behavior for converting blocks to JavaScript, as blocks don't have a sense of scope in variables / local variables are JavaScript only