# Activity: Logic

Just like in Blocks, using ``||logic:Logic||`` in JavaScript allows for games that react to user input and the state of the game.

## If and else statements 

The ``||logic:if then||`` and ``||logic:else||`` blocks were amongst the most important in the
``||logic:Logic||`` category in the previous course, and remain just as important in JavaScript

In JavaScript, these can be expressed as:

```typescript-ignore
if (condition) {
	console.log("The condition is true");
}
```

and

```typescript-ignore
if (condition) {
	console.log("The condition is true");
} else {
	console.log("The condition is false");
}
``` 

where `condition` is some sort of boolean. If we recall, a boolean is a value that can be either true, or false. In blocks, these often took the form of blue elongated hexagons like the following

```block
let x = true
```


## Comparisons

In blocks, there were many ways to compare two numbers. In JavaScript, these same comparisons are available.

|Name 						|Symbol |JavaScript 		|
|:---						|:---:	|:---:				|
|Equal To 					|=		|`value1 == value2`	|
|Not Equal To 				|&ne;	|`value1 != value2`	|
|Less Than 					|<		|`value1 < value2`	|
|Less Than or Equal To		|&le;	|`value1 <= value2`	|
|Greater Than 				|>		|`value1 > value2`	|
|Greater Than or Equal To	|&ge;	|`value1 >= value2`	|  

## Example #1a: Less Than

```typescript
let num: number = -5;
if (num < 0) {
    console.log("num is negative!");;
} 
```

## Example #1b: Equal to

```typescript
let num: number = 1;
if (num == 1) {
    console.log("num is one!");;
} else {
    console.log("num is not one!");;
}
```

Notice how we have been using curly braces (`{` and `}`) and indentations in our code. This is done for two reasons. 

The first being that it makes our code more readable. We can look at our code and easily decipher what is part of the if statement and what isn't. 

The second reason is for functionality. While it is true that our code would run the same if we didn't use indentations, we cannot say the same about curly braces. Curly braces are used to group code together. 

## Student Task 1: A Simple Comparison

1. Create a variable that stores a number
2. Use an `if` statement to check if the number is less than 2
3. If the condition is true (in the if section), print a message to the console
4. If the condition is false (in the if section), print a different message to the console

## Concept: Booleans

In blocks, we saw that we could store the value of a boolean as a variable so that we could keep track of it. In JavaScript, we do the same.

```block
let x = true
```

is equivalent to 

```typescript
let x: boolean = true;
```

### Boolean Operators

We saw in blocks a way of performing operations on boolean. This was done with the use of Boolean Operators. 

Here is a table of these operators and their JavaScript equivalents

|Name 	|Order	|JavaScript 					|
|:---	|:---:	|:---:							|
|Not 	|1st	|`!bool1`						|
|And	|2nd	|`bool1 && bool2`				|
|Or 	|3rd	|`bool1` &vert;&vert; `bool2` 	|

### ~hint

When writing Or statements, you need to use the `|` character. This character is called either a vertical bar or pipe and is usually located below the backspace key.

### ~

The order of operators becomes an issue when your have different operators that aren't separated by parenthesis. For example, in the case of `bool1 && bool2 || !bool3`. 

### Example #2: Order of Boolean Operators

Let's break down `bool1 && bool2 || !bool3` for the following boolean values

* `bool1 = false` 	
* `bool2 = true` 	
* `bool3 = false` 	

1. Negate `bool3` which evaluates to `true`
2. Check `bool1` **and** `bool2` which evaluates to `false`
3. Check the result of step 1 **or** the result of step 2 (i.e. `true` **or** `false`) which evaluates to `true`

So the whole expression evaluates to `true` with these values

By adding parentheses, we can change the order in which this expression is evaluated. For example, let's add parentheses around the or operator and see how the output changes.

`bool1 && (bool2 || !bool3)`

1. Negate `bool3` which evaluates to `true`
2. Check `bool2` **or** the result of step 1 which evaluates to `true`
3. Check `bool1` **and** the result of step 3 which evaluates to `false`

So the whole expression evaluates to `false` with these values

### Example #3a: Greater than And Equal to 

```typescript
let val1: number = 5;
let val2: number = 0;
if (val1 > 2 && val2 == 0) {
	console.log("The condition is true");
}
```

### Example #3b: Greater than Or Equal to 

```typescript
let num: number = 5;
let bool: boolean = true;
if (num > 2 || bool == 0) {
	console.log("The condition is true");
}
```


## Student Task 2: 

1. Create two or more variables that each store a number
2. Use an `if` statement to perform **two** comparison on these variable
3. If the condition is true, print a message to the console
4. If the condition is false, print a different message to the console


## What did we learn?
1. What is an example of using logic to modify a programs output?
2. In JavaScript, how can the order in which an expression is evaluated be changed?
3. **Challenge** Think about the evaluations of `!bool1 && !bool2` and `!(bool1 || bool2)` for different values of `bool1` and `bool2`. When will they be the same, when will they be different?