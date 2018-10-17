# Activity: Returns

In the previous section, functions were shown to accept input in the form of **parameters**. These allow developers to pass values **to** a function.

**Return values** allow a function to return (give back) a value at the end of a function call. This **ends** the call to the function, continuing the code from where the function was called.

## Concept: Returning a Value

Functions can be given return value by using the return value, and giving the function a type.

```typescript-ignore
function name(parameter: parameterType): outputType {
    // function contents
    return output;
}
let returnedValue: outputType = name(value);
```

There are four new elements added to this snippet since the previous lesson:

* ``return``: the start of the **return statement**; the value that follows this will be returned
* ``output;``: the value that is returned
* ``: outputType``: the type of the value that is going to be returned by the function
* ``let returnedValue: outputType = ``:  storing the returned value from ``||functions:name||`` in a variable

``returnedValue`` will store the result of the call to ``||functions:name||``, allowing that value to be used outside of the function.

## Example #1: Gimme 5

1. Review the code below
2. Identify what the return type of this function will be
3. Identify what will be stored in ``||variables:returnedValue||`` after ``||functions:giveMeFive||`` is finished

```typescript
function giveMeFive(): number {
    return 5;
}

let returnedValue: number = giveMeFive();
```

## Student Task #1: Who are You?

1. Create a function named ``aName``
2. Add a return value to ``aName``, which returns "Bill"
3. After calling the function, store the returned value in the variable ``theName``
4. Use ``||game:game.splash||`` to display ``theName``
5. **Challenge:** give ``aName`` a parameter ``name`` of type ``string``. Modify the return value to return ``name`` instead

## Concept: Multiple returns keywords

Since functions can change their behavior based on their parameters, they can also have different output values. Using logic statements like ``||logic:if||`` can cause only certain portions of code to run. Placing return statements inside these portions of code that only run if a condition is met can be problematic as the function **must** return a value every time it runs. The solution is to use multiple return statements to guarantee that in all cases, the function will return a value.

## Example #2: Absolute Value

```typescript
function makePositive(num: number): number {
    if (num < 0) {
        return (-1 * num);
    } else {
        return num;
    }
}
console.log("" + makePositive(-3));
console.log("" + makePositive(5));
console.log("" + makePositive(0));
```

### ~

## Student Task #2: Up or Down

Write a function that takes in two parameters, a `num` number and a `up` boolean. If the `up` value is `true`, then return `1` more than the number, else, return `1` less than the number.

## Example #3: Sprites

The return type of a function can be any type. In fact, it is how ``||sprites:sprites||`` get created. The `sprites.create` function takes input of an image and returns a sprite with that image.	

```typescript
function copyCat(originalSprite: Sprite) {
    return sprites.create(sprite.image);
}
```

This function will take a sprite as a parameter, create a new one with the same image, an returns this new clone.

## Concept: Stopping a function

The `return` keyword causes the function to stop running. This is because the function has already found its output and does not need to proceed anymore. 

## Example #4: Finding 3

```typescript 
function containsThree(min: number, max: number): boolean {
    for (let i = min; i <= max; i++) {
        console.log("" + i);
        if (i == 3) {
            return true;
        }
    }
    return false;
}
let found: boolean = containsThree(0, 5);
console.log("" + found);
```

This is a function that takes in a range as input and returns whether it found the number 3 or not. During this process, it will log which values it has checked. The console output of this function call would be.

```
0
1
2
3
true
```

The function only logs `0`, `1`, `2`, and `3` because the function stopped once it found `3` and returned `true`

## What did we learn?

1. What needs to be added to a function so that it will return a value? 
2. What is the syntax for this change?
3. If a function returns a value in one case, does it need to return a value in all cases?
