# Activity: String Array Manipulation

Arrays can be made for any type of value. This allows arrays to be used in a wide variety of circumstances, with a wide variety of types.

To make interactions with arrays easier, a variety of functions are available that can manipulate different arrays.

## Concept: Push and Pop

A common use for arrays is to treat them as a stack: adding elements to the **top** of the stack, and removing the last element that was added to it.

This behavior could be thought of as the same as a stack of plates: the most recently cleaned plate will be placed on top of the stack, and the last plate that was stacked will be the first one to be taken off and used when dinner is made.

In JavaScript, an array can be treated like a stack by using ``||arrays:array.push||`` and ``||arrays:array.pop||``.

The ``||arrays:array.push||`` function is used to add a new value to the **end** of an array (the **top** of the stack), and the ``||arrays:array.pop||`` function is used to obtain (and remove) the value at the end of the array.

## Example #1a: Push

1. Review the code below
2. Identify how ``||arrays:push||`` is used to **add** a new item to ``||variables:script||``
3. Identify which index the value is added to in ``||variables:script||``

```typescript
let script: string[] = ["hello", "goodbye", "arcade"];
script.push("new!");

game.splash(script[script.length - 1]);
```

## Example #1b: Pop

1. Review the code below
2. Identify how ``||arrays:pop||`` is used to **remove** an element from the ``||variables:script||``
3. Identify which values from the ``||variables:script||`` will be logged

```typescript
let script: string[] = ["hello", "goodbye", "arcade"];
game.splash(script.pop());

for (let i = 0; i < script.length; i++) {
    console.log(script[i]);
}
```

## Student Task #1: Repeat Back What You Said

1. In a new project, create a ``||arrays:string array||`` ``||variables:youSaid||``
2. Use a ``||loops:for||`` loop to ``||game:game.askForString||`` 4 times, with the prompt "What did you say?"
3. In the loop, ``||arrays:push||`` each of the users response into the ``||variables:youSaid||`` array
4. Create another ``||loops:for||`` loop after the first one that also repeats 4 times. In it, ``||game:splash||`` each value from ``||variables:youSaid||`` using ``||arrays:pop||``
5. Is the output in the same order that it was originally inputted? Explain why or why not

## Concept: Loops with ``||arrays:Push||`` and ``||arrays:Pop||``

In the previous task, it was specified to loop exactly 4 times. This may seem odd: in most other cases, ``||arrays:array.length||`` has been used to identify the length of the array, rather than using a specific value.

This was avoided because it can result in tricky behavior. An example of this can be seen in the code snippet below. The intention of the snippet is to print out each word in ``||variables:script||`` backwards. 

```typescript
let script: string[] = ["Hello", "my", "name", "is", "bob", ":)"];

for (let i = 0; i < script.length; i++) {
    game.splash(script.pop());
}
```

When the code runs, it only prints out half the values in the array. This is because the length of the ``||variables:script||`` is **changed** as elements are ``||arrays:popped||`` off of it.

This can be seen by modifying the previous snippet very slightly. This snippet will splash the value of ``||variables:i||`` and ``||arrays:script.length||``. 

```typescript
let script: string[] = ["Hello", "my", "name", "is", "bob", ":)"];

for (let i = 0; i < script.length; i++) {
    script.pop();
    game.splash("i = " + i + " len = " + script.length);
}
```

When removing values from an array, it is common to use another type of loop: the ``||loops:while||`` loop. This is the same loop as the ``||loops:while do||`` loop from Blocks.

### ~hint

A ``||loops:while||`` loop can be thought of simply as an ``||logic:if||`` statement that repeats until it is false.

### ~

## Example #2: ``||loops:while||`` Loop

This example is a fixed version of the snippet that was broken above.

1. Review the code below
2. Identify what condition the ``||loops:while||`` loop will continue

```typescript
let script: string[] = ["Hello", "my", "name", "is", "bob", ":)"];

while (script.length > 0) {
    game.splash(script.pop());
}
```

## Student Task #2: ``||loops:while||`` You Are Talking

1. Start with the code from task #1
2. Change the first loop to a ``||loops:while||`` loop. Make the condition for this a ``||game:game.ask||`` with the prompt "Do you have more to say?"
3. Change the second loop to a ``||loops:while||`` loop, that will repeat every word that was previously entered

## Concept: Random Selection

In games, it is common to use an array of strings to represent the "script" for a given character - that is, a group of words and phrases they can say. So far, this has been handled sequentially: reading through each value in the array one by one, either forwards or backwards.

The ``||math:Math.pickRandom||`` function can be used to pick a random element out of an array. This allows the "script" to be used to respond to the player in a way that is different for every run of the game.

## Example #3: Random ``||game:Splashing||``

1. Review the code below
2. Identify how ``||math:Math.pickRandom||`` is used to generate a random word
3. Run the code multiple times. Are the values that are splashed the same?

```typescript
let script: string[] = ["potato", "corgi", "software", "elevator", "map"];

for (let i = 0; i < 5; i++) {
    game.splash(Math.pickRandom(script));
}
```

## Student Task #3: Random Responses

1. Create two sprites: a ``||sprites:Player||``, that is controlled using ``||controller:controller.moveSprite||``, and a ``||sprites:Friend||``. Set the ``||sprites:Friend||`` ``||sprites:x||`` position to 130
2. Create an ``||sprites:on overlap||`` event between the ``||sprites:Player||`` and the ``||sprites:Friend||``
3. Store an array of strings in the variable ``||variables:greetings||``. Include at least 4 short greetings (for example, "hello friend!")
4. In the ``||sprites:on overlap||`` event, make the ``||sprites:Friend||`` ``||sprites:say||`` a ``||math:random||`` string from ``||variables:greetings||`` for 500 ms
5. Use the ``||sprites:Ghost||`` ``||sprites:SpriteFlag||`` to prevent the ``||sprites:overlap||`` event from triggerring for 1000 ms

### ~hint

The implementation of ``||math:Math.pickRandom||`` is fairly simple; besides some typing and error handling, you can reimplement it in a single line! For a given array ``||variables:list||``, choosing a random element can be handled using the following snippet:

```typescript-ignore
list[Math.randomRange[0, list.length - 1]];
```

``||math:Math.pickRandom||`` is typically a **lot** easier to read, though.

### ~

## What did we learn?

1. How do ``||arrays:push||`` and ``||arrays:pop||`` allow for easy array manipulation?
2. How can random behavior improve games?
