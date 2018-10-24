# Problem Set: Logic

This section contains a number of selected problems for the Logic section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: This or that

Determine what the following code will output

```typescript-ignore
let bool: boolean = true;

if (bool) {
    console.log("This");
} else {
    console.log("That");
}
```

## Problem #2: Boolean logic

Determine whether or not the following evaluates to true or to false

|   |                               |
|:-:|     ---                       |
|(a)|`true ` &vert;&vert; `false`   |
|(b)|`true ` &vert;&vert; `true`    |
|(c)|`false` && `true`              |
|(d)|`false` && `false`             |
|(e)|`true` && `!true`              |
|(f)|`!false ` &vert;&vert; `!true` |
|(g)|`!false ` &vert;&vert; `true`  |

## Problem #3: The tables have turned

Make a table for the output of the following code based on values of `bool1` and `bool2`. A cell may contain more than one output.

|                       |`bool1 == true`|`bool1 == false`|
|---                    |---            |---             |
|**`bool2 == true`**    |               |                |
|**`bool2 == false`**   |               |                |   |


```typescript-ignore
if (bool1 && 10 > 4) {
    if (!bool2) {
        console.log("Option 1");
    } else {
        console.log("Option 2");
    }
    console.log("Option 3");
} else {
    if (6 > 8) {
        console.log("Option 4");
    } else {
        console.log("Option 5");
    }
}
```

## Problem #4: Rain or shine

Translate the following into a program that outputs a clothing choice. Use a number variable `temp` for the tempature and a boolean variable `isRaining` for whether or not it is raining.

When it is raining, I wear my rain jacket. However, regardless of the rain, if it is less than 30 degrees, then I wear my winter coat. In all other cases, I'll just wear a sweatshirt.


## Problem #5: Implication

Write a boolean expression that has the following truth table

|`a` value  |`b` value  | ???   |
|-------    |-------    |-------|
|`true`     |`true`     |`true` |
|`true`     |`false`    |`false`|
|`false`    |`true`     |`true` |
|`false`    |`false`    |`true` |

<br />

This expression is know as an *implication*. That is `a` *implies* `b`. So when this expression is true, if `a` is true, then `b` must also be true.