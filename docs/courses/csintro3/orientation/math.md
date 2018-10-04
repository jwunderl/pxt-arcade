# Math

When transitioning into JavaScript, we see that doing calculations and writing math formulas becomes a lot easier.

## Math Operators

When writing code with blocks, we saw that we needed to have a block for each math operator (e.g. +, -, &times;, &divide;). This can be pretty annoying and make our code formulas more complicated than they need to be. We'll see that in JavaScript, formulas are a lot more condensed.

Here is how we translate each operator from blocks to JavaScript

|Operation 					|Block					|Javascript			|
|:---						|:---:					|:---				|
|Addition (+)				|`[let x = (6 + 2)]`	|`let x = (6 + 2);`	|
|Subtraction (-)			|`[let x = (6 - 2)]`	|`let x = (6 - 2);`	|
|Multiplication (&times;)	|`[let x = (6 * 2)]`	|`let x = (6 * 2);`	|
|Division (&divide;)		|`[let x = (6 / 2)]`	|`let x = (6 / 2);`	|

### Complex Expressions

As mentioned above, when using blocks, we needed to use a separate block for each Math operator. In JavaScript, it is a lot easier to string these operators together.

For example, what was 

```blocks
let num = 0
num = 1 + (2 + 3)
```

is now

```typescript
let num: number = 1 + 2 + 3
console.log("" + num);
```

Some other examples are:

```typescript
let num: number = 5 + 3 * 2;
console.log("" + num);
```

```typescript
let num: number = 24 / 3 * 4;
console.log("" + num);
```

## Order of Operations

Think about how these might be ambiguous. What value do these expressions evaluate to? It depends based on which operation you do first. As it turns out, JavaScipt uses a **PEMDAS** structure to determine which operations should be done in what order.

|Order	|Operation 		|
|:---:	|:---			|
|1st	|Parenthesis	|
|2nd	|Exponents		|
|3rd	|Multiplication	|
|		|Division		|
|4th	|Addition	 	|
|		|Subtraction 	|

Operations that are of the same order (e.g. multiplication and division) will be completed left-to-right. That is ```24 / 3 * 4``` evaluates to 32 because 24 is divided by 3 before the multiplication happens.

While parenthesis are not an operator, they serve as a way to group operations together. Operations done within parenthesis will be completed first before moving onto those outside.

If we look at the example

```typescript
let num: number = 24 / 3 * 4;
console.log("" + num)
```

This will print out the number 32 because the division occurs before the multiplication. If we want to change this order and multiply before we divide, we can use parenthesis like

```typescript
let num: number = 24 / (3 * 4)
console.log("" + num)
```

This will output 2 instead


## Student Task 1: Evaluating an Expression

1. Pick 4 random numbers and write them horizontally on piece of paper
2. In the 3 spaces between those numbers, place a random operator to put there
3. Evaluate the expression on paper
4. Type out the expression in JavaScript like the above examples and compute the result

## Assignment Operators

There are many instances in which you may want to set a variable to an expression that references itself, such as

```typescript
num = num + 5;
```
When programming, there is actually a way to condense this expression that makes it easier to write.

The above example can also be written as

```typescript
num += 5;
```

**Note:** This actually how the ``||variables:change by||`` block works so the above is equivalent to 

```block
let num = 0
num += 5
```

This process of condensing the expression extends to all operators, so

`num = num - 5;` is equivalent to `num -= 5;`


`num = num * 5;` is equivalent to `num *= 5;`


`num = num / 5;` is equivalent to `num /= 5;`


### Special case: add or subtract 1 (increment / decrement operators)

Another common thing done in JavaScript is to increase or decrease a value by 1. 

We've seen that you can do this by saying either

`num = num + 1;` or `num += 1;`

We can also say `num++;`

All three of these are valid lines that would increment the value by 1.

It also extends to decreasing a value by 1 in that `num--` will decrement the value of `num` by 1.

These two increment/decrement operators are very commonly used as they are quicker and easier to read and write


## Math Functions / calling functions intro

When programming in blocks, there were a few Math/number related functions that we called. Things such as

```block
let x = Math.randomRange(0, 10)
let y = Math.ceil(0.5)
if (Math.percentChance(50)) {

}
```

These functions are included in JavaScript as well as many more.

You can use them by typing `Math` followed by a `.` and then followed by the name of the function.

For example, to generate a random number between 0 and 10, we would use the `Math.randomRange` method. As we saw in blocks, this function takes in a minimum value and a maximum value. So our JavaScript code would look something like

```typescript
let num: number = Math.randomRange(0, 10);
```

It may be helpful to switch back and forth between blocks and JavaScript to see what each function is called. Similarly, in the JavaScript editor, you can still click under the ``||math:Math||`` section and there it will have the JavaScript versions of each block.


Also, if you type `Math` followed by a `.` in the editor, the auto-complete feature will show all of the Math functions that can be called.

## Student Task 2: Scaling a value

1. Generate a random number between 1 and 100
2. Use `console.log` to print out what the value is
3. Using the assignment operators discussed above, set the value equal to itself multiplied by 1.5 
4. Use `console.log` to print out the new value is
