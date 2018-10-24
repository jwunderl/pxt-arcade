# Activity: Math

In Blocks, each step of an equation needed it's own block. This can make formulas difficult to properly express, as it can be hard to identify (or change) the order in which they are evaluated.

In JavaScript, the same formulas can be easier to express, as the syntax (structure) is much closer to what is used when evaluating math by hand or with a scientific calculator.

| Operation         | Block                 | JavaScript            |
| :---------------- | :-------------------: | :-------------------- |
| Addition          | `[let x = (6 + 2)]`   | `let x = 6 + 2;`      |
| Subtraction       | `[let x = (6 - 2)]`   | `let x = 6 - 2;`      |
| Multiplication    | `[let x = (6 * 2)]`   | `let x = 6 * 2;`      |
| Division          | `[let x = (6 / 2)]`   | `let x = 6 / 2;`      |

## Example #1: Complex Expressions

1. Review the examples below
2. Identify what is different between the Blocks and the JavaScript in each pair
3. Run the examples: identify what the end result will be (it may be useful to add ``game.splash`` or ``console.log`` to display the value)

### Example #1a: Addition and Subtraction

```blocks
let num: number = 1 + 2 - 3;
```

```typescript
let num: number = 1 + 2 - 3;
```

### Example #1b: Addition and Multiplication

```blocks
let num: number = 5 + 3 * 2;
```

```typescript
let num: number = 5 + 3 * 2;
```

### Example #1c: Division and Multiplication

```blocks
let num: number = 5 + 3 * 2;
```

```typescript
let num: number = 24 / 3 * 4;
```

## Student Task #1: Creating Blocks

1. Create a new project in @boardname@. Go to the JavaScript view
2. Recreate the expression below in **JavaScript**
3. To confirm the JavaScript expression is correct, switch to Blocks and check that the result is the same
4. **Challenge:** change the ``+`` to a ``-``, and switch back to JavaScript. What has changed?

```blocks
let num: number = 15 + 8 / 3
```

## Concept: Order of Operations

JavaScipt uses a **PEMDAS** structure to determine the order in which operations are evaluated. This standards for **P**arentheses, **E**xponents, **M**ultiplication or **D**ivision, **A**ddition or **S**ubtraction.

| Order	| Operation         |
| :---:	| :---------------- |
| 1st   | Parenthesis       |
| 2nd   | Exponents         |
| 3rd   | Multiplication    |
|       | Division          |
| 4th   | Addition          |
|       | Subtraction       |

<br />

Operations of the first order will occur before operations of the second order, operations of the second order will occur before operations of the third order, and operations of the third order will occur before operations of the 4th order.

Operations that are of the same order (for example, multiplication and division) will be completed left-to-right. This means that ``24 / 3 * 4`` evaluates to ``32``, because ``24`` is divided by ``3``, then the result is multiplied by ``4``.

Parentheses have the highest order, which means that they are always evaluated first. This can be used to control the order in which an expression is evaluated. For example, ``24 / (3 * 4)`` will evaluate to ``2``, because the parentheses require that ``3 * 4`` is evaluated first, before the division occurs.

## Example #2: Using PEMDAS

1. Review the examples below
2. In each example, identify how the value of ``num`` is changed using the order of operations

### Example #2a: Subtraction and Division

```typescript
let num: number = 10 - 6 / 2;
console.log("" + num);
```

This will print out the number 7, because the division occurs before the subtraction.

If instead the goal is to subtract before dividing, parentheses can be used to change the order

```typescript
let num: number = (10 - 6) / 2;
console.log("" + num);
```

This will print out the number 2 instead.

### Example #2b: Division and Multiplication

```typescript
let num: number = 24 / 3 * 4;
console.log("" + num);
```

This will print out the number 32, because the division occurs before the multiplication.

If instead the goal is to multiply first, the equation can be changed using parentheses

```typescript
let num: number = 24 / (3 * 4);
console.log("" + num);
```

This will print out the number 2 instead.

## Student Task #2: Fixing an Expression

1. Recreate the code below
2. Run the code and identify what value ``num`` stores
3. Review the description of the goal of the code in the box below: does the code match the goal?
4. If the code does not match the expected output, modify the order in which it is evaluated **by adding parentheses**. Do not add or remove any other operators or numbers 

### ~hint

The goal of the code was to complete the steps in the following order:

1. add 6 to 4 = **10**
2. divide the result by 2 = **5**
3. subtract 1 from the result = **4**
4. multiply the result by 18 = **72**

### ~

```typescript
let num: number = 18 * 6 + 4 / 2 - 1;
game.splash("" + num);
```

## Concept: ``||variables:change by||`` and Assignment Operators

The ``||variables:change by||`` block was very commonly used to modify the value a variable was assigned to when programming in Blocks.

This can be accomplished in JavaScript by using the variable itself in the equation:

```typescript-ignore
num = num + 5;
```

This works because the equation on theright side of the assignment operator is evaluated first, and the result of that equation is assigned to the variable on the right side.

For example, if ``num`` stored ``4`` before the code above, the right hand side of the equation would first be evaluated to ``9``, and then num would be reassigned ``9`` as it's new value.

Modifying a value in this way is a very common task, so JavaScript and other languages introduce the ``+=`` operator, which will **add** the value on the right side to the value currently stored on the left side.

Using the ``+=`` operator, the example code above can also be written as

```typescript-ignore
num += 5;
```

This process of condensing the expression extends to all operators, so

* ``num -= 5;`` is equivalent to ``num = num - 5;``
* ``num *= 5;`` is equivalent to ``num = num * 5;``
* ``num /= 5;`` is equivalent to ``num = num / 5;``

These are called **Assignment Operators**, like ``=``.

### ~hint

### Increment and Decrement

In JavaScript, it is very common to add or subtract one from a value: for example, to count the number of times a button was pressed, or the index in a loop.

In JavaScript, there are two **Assignment Operators** that can do this.

``num = num + 1;`` and ``num += 1;``

However, because this is such a common task, there is another (shorter) way to write it. This is done using the **Increment Operator**, represented by two plus signs: in this case, ``num++;``.

All three of the lines above will result in ``num`` being 1 greater than whatever value it was prior.

Similarly, the **Decrement Operator** is represented by two minus signs: in this case,

``num = num - 1;`` is equal to both ``num -= 1;`` and ``num--;``;

### ~

## What did we learn?

1. What is an advantage of writing expressions out in JavaScript as opposed to blocks?
2. In JavaScript, how can the order in which an expression is evaluated be changed?
3. **Challenge:** explain why the different increment, decrement, and assignment operators are be useful for adding to or subtracting from a variable. 