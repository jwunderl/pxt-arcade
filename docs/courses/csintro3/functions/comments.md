# Activity: Function Documentation

In this section, ``||functions:functions||`` have been shown to have a wide variety of uses, with many different features.

For those reasons, we will maintain a particular syntax for ``||functions:function||`` comments. This way, anyone who wants to learn about what the function do will have a consistent and easy way in which to identify these features.

## Concept: Commenting Simple Functions

The first functions discussed in the [Intro Lesson](/courses/csintro3/functions/intro) were fairly basic; they accepted no input, and did not produce any output.

The ``||functions:sayHello||`` function is a simple demonstration of this; whenever it is called, it will ``||game:splash||`` "hello" to the person playing the game.

To add a comment to a function like this, simply describe in a short sentence what the function is actually doing.

## Example #1: Commenting on ``||functions:sayHello||``

1. Review the code below
2. Identify what the method will do
3. Read the comment for the method: identify how it describes the method's behavior

```typescript
/**
 * Displays a greeting for the player to read.
 */
function sayHello() {
    game.splash("hello");
}

sayHello();
```

Notice that the comment does not go into much detail on the behavior - saying the exact greeting, or how it is done. If someone wants to know these things, they can read the code itself.

Even if the function were changed to display different text in a slightly different way (as done below), the same comment could still be used to describe the function.

```typescript
/**
 * Displays a greeting for the player to read.
 */
function sayHello() {
    game.showLongText("Welcome to our new Adventure! You will have a good time here!", DialogLayout.Bottom);
}

sayHello();
```

## Student Task #1: Writing a Comment

1. Review the code below
2. Fill in the comment for the ``||functions:helloWorld||`` function
3. Fill in the comment for the ``||functions:goodbye||`` function
4. **Challenge:** should a description of ``||variables:word||`` show up in the comment for ``||functions:goodbye||``?

```typescript
/**
 * 
 */
function helloWorld() {
    game.splash("Hello World!");
}

/**
 * 
 */
function goodbye() {
    let word = "Goodbye!";
    game.splash(word);
}
```

### ~hint

Hints for Challenge:

* Is ``||variables:word||`` accessible outside of ``||functions:goodbye||``?
* How is the behavior of ``||functions:goodbye||`` different from ``||functions:helloWorld||``? Is ``||variables:word||`` part of that difference?

### ~

## Concept: Parameter Comments

To comment on a parameter, start the line with "@param", followed by the parameter's name, and then a short description of what the method will do


## Example #2: Commenting on ``||functions:printMessage||``

1. Review the code below
2. Identify what the method will do
3. Read the comment for the method: identify how it describes the method's behavior
4. Hover over the function call and the parameter that is passed to the function call, to see how the editor uses method comments

```typescript
/**
 * Prints a message
 * @param message the message that will be printed
 */
function printMessage(message: string) {
    console.log(message);
}

printMessage("Hello");
printMessage("World");
```

![Function Highlighting](/static/courses/csintro3/functions/function-highlighting.gif)