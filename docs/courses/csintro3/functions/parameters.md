# Activity: Parameters

In the previous lesson, the parentheses in function definitions (``()``) were skimmed over. These are used to indicate the **Parameters** for the ``||functions:function||``.

Parameters are variables that can be passed (given) to the ``||functions:function||``. This allows for functions that can react appropriately to different conditions and settings.

## Concept: Functions with Parameters

Functions can be provided with parameters by including them between the parentheses in the function definition.

```typescript-ignore
function name(parameter: parameterType) {
    // function contents
}
name(value);
```

There are three new elements added to this snippet since the previous lesson:

* ``parameter``: the name of the parameter variable
* ``parameterType``: the type the parameter must be
* ``value``: a variable (or value) that is being passed to ``name``

``value`` must be of type ``parameterType``, or else the code will not be able to run.

``parameter`` can be handled like any other variable within the scope of the function ``name`` - however, the value it is initially assigned will be whatever value is provided when the function is called.

## Example #1: Reducing Redundancy with Parameters

Parameters can be used to reduce redundancy between different functions.

1. Review the two code snippets below
2. Verify that the two snippets produce the same results
3. Identify how ``||functions:printMessage||`` uses parameters to reduce the redundancy between ``||functions:printHello||`` and ``||functions:printWorld||``

```typescript
function printHello() {
    console.log("Hello");
}

function printWorld() {
    console.log("World");
}
printHello();
printWorld();
```

```typescript
function printMessage(message: string) {
    console.log(message);
}

printMessage("Hello");
printMessage("World");
```

Beyond just reducing redundancy, this allows for the code to be more flexible: if the developer chooses to start all messages by printing "Hey Listen!" before the message, this can be changed in a single place, rather than in every method that prints to the console.

## Student Task #1: Hey Jude!

1. Create a function named ``greet``
2. Add a parameter ``firstName`` that is of type ``string``
3. In the function, ``||game:game.splash||`` a greeting that includes ``firstName`` (if "Jude" is passed, it might ``||games:splash||`` "Hey Jude!")
4. Call the function with three different names

## Concept: Multiple Parameters

Functions are not limited to a single parameter; more than one parameter can be passed, with each separated by a comma (``,``).

```typescript-ignore
function name(parameterOne: parameterOneType, parameterTwo: parameterTwoType) {
    // function contents
}
name(valueOne, valueTwo);
```

Notice that when calling the function, the order the parameters are passed must match the order the parameters were defined in; in this case, ``parameterOne`` will store ``valueOne``, and ``parameterTwo`` will store ``valueTwo``.

## Example #2: Choose between

```typescript
function choose(choice1: string, choice2: string) {
    if (Math.percentChance(50)) {
        console.log("I think " + choice1 + " is the better choice");
    } else {
        console.log("I think " + choice2 + " is the better choice");
    }

}
choose("cats", "dogs");
choose("pizza", "tacos");
choose("Summer", "Winter");
```

This is a function that takes in two choices and will randomly choose one of them to be the "better" choice. Observe how the function takes in two parameters and that each function call has two parameters as well.

## Student Task #2: Greeting

Modify the greet function Task #1 so that it takes in two strings: `firstName` and `lastName`. This time, the function should print to the console a greeting of some sort that uses **both** parameters. Example: `Hello John Doe`.

## Example #3a: Capslock

Parameters don't have to just be strings. They can be any type.

```typescript
function printHello(n: number, capslock: boolean) {
    for (let i = 0; i < n; i++) {
        if (capslock) {
            console.log("HELLO");
            console.log("WORLD");
        } else {
            console.log("hello");
            console.log("world");
        }
    }
}

printHello(3, true);
printHello(7, false);
```

## Example #3b: Follow the leader

Including ``||sprites:sprites||`` work too!

```typescript
function follow(follower: Sprite, leader: Sprite) {
    let diffX = leader.x - follower.x;
    let diffY = leader.y - follower.y;
    follower.vx = diffX;
    follower.vy = diffY;
}
```

## Student Task #3: 

Create a function that takes in two parameters, a ``||sprites:sprite||`` with the name `sprite` and a boolean with the named `left`.
Make it so that if `left` is true, the sprite will move 10 units to the left, otherwise it will move 10 units to the right.

## What did we learn?

1. What is the proper syntax for using a parameter? What about using multiple parameters?
2. How do you specify the type of a parameter?
3. What does a function call look like?
4. What types can be used as parameters?