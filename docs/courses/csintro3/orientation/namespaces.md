# Namespaces

Intro to namespaces; fairly light, transitions nicely into functions (as basically an intro to explaining scope)

Intro -> use Math.max to explain (max is a fairly common word, so transitioning to making a function called max will lkely seem reasonable)

```typescript
let a = 5;
let b = 6;
let num: number = Math.max(a, b);

game.splash(num + "")
```

easy, good, etc

```typescript
function max() {
    return "Maximilian";
}

let a = 5;
let b = 6;
let num: number = Math.max(a, b);

game.splash(max() + num)
```

These two functions have the same name - max() - oh wow how does that work, how do you make them choose different things

## Using namespaces

```typescript
namespace names {
    export function max() {
        return "Maximilian";
    }

    export function min() {
        return "Minnie";
    }

    function bob() {
        return "Robert";
    }
}

let a = 5;
let b = 6;
let num: number = Math.max(a, b);

game.splash(names.max() + num)
```

* the title (names) identifies namespace, describes what the methods in it do, shows how they belong together
* explain the export function - making the function available __outside__ this context
* ask them which functions in the names namespace __can__ be accessed outside (max and min) and which are only available inside the namespace (bob)
* ask for if they can think of a reason why that would be useful (push poll them towards helper methods for their other stuff that aren't relevant outside the namespace)
* explain why using namespaces is helpful - in this case, capable of using to functions (names.max() and Math.max(a, b)) with the same name, without having to name them in a less descriptive manner (max1, max2, etc), add a heirarchy to the program

## multiple namespaces

```typescript
namespace consoleOutput {
    export function printNum(value: number) {
        console.log(value + "");
    }

    export function printTwoNums(a: number, b: number) {
        console.log(a + " : " + b);
    }
}

namespace splashOutput {
    export function printNum(value: number) {
        game.splash(value + "");
    }

    export function printTwoNums(a: number, b: number) {
        game.splash(a + " : " + b);
    }
}

consoleOutput.printNum(0);
consoleOutput.printTwoNums(1, 2);
splashOutput.printNum(234);
splashOutput.printTwoNums(12, 123);
```

* multiple namespaces in one file
* differentiate between two different behaviors in a consistent way / with a consistent pattern


## Concept: Commenting Your Own Code

Sharing code in @boardname@ allows for the code you write to be used in other projects - whether those projects are your own, your friends, or anyone else you give the link to.

There are still some important topics to cover before the code we write can be written in a way that is easy to use without causing issues. One of those issues is making the code easy to understand, so that others can use it without having to ask questions about every detail of the code.

Comments allow developers to leave **documentation** for those reading their code: whether that be someone else who's never seen it before, or themselves in a year or two.

In JavaScript, there are two different formats for comments:

```typescript
// Single line comments, like this

game.splash("//hello!//") // Another single line comments

/**
 * And multiline comments,
 * like this
 */

/* Also works with a single line */
```

When a line contains two slashes in a row (``//``) that are not in a string, that signifies that the line is finished, and anything else on that line is simply a comment - something for humans to read, that the computer will otherwise ignore.

Similarly, multiline comments (which start with ``/*`` and end with ``*/``) allow for sections of text that the computer will ignore. Anything between the start and end will not be run by the program, and only intended as an annotation for the user.

In this course, multiline comments will use the style shown below, so that it is easier to identify where the comments start and end.

```typescript
/**
 * The course uses this style of comment;
 * the asterisks that start these lines are not required,
 * but do make it easier to follow what exactly the comment includes
 */
```

## What did we learn?

1. Why is the ``export`` keyword used within namespaces?
2. What do comments add as code starts to get complex?