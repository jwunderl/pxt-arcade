# Activity: On Game Update Event

An event is something that happens. Holidays, Birthdays, and the end of the school year are all big events for all those involved.

In JavaScript, ``||functions:functions||`` can be used to identify code to run whenever these events occur. This is very common in **event-driven programming**, where much of the program comes down to responding to user input.

## Concept: ``||game:on game update||`` Event

The ``||game:on game update||`` block from previous courses is an **event** (the event occurs every time the game updates, just like a holiday might occur once every year).

Inside of the block, the code to run when the event occurs can be slotted in. This group of code is called an **event handler**: when the **event** occurs, it is **handled** by calling the code associated with it.

```sig
game.onUpdate(undefined);
```

In JavaScript, the same behavior applies: ``||functions:functions||`` are called to assign **event handlers** to different **events**, and from that point on, when the events occur, the **event handler** code runs.

When creating a new project in MakeCode @boardname@, a single event is created to start in the JavaScript: the ``||game:game.onUpdate||`` event. If a project does not include that event, the snippet can be found under the ``||game:Game||`` category in the toolbox, or using the autocomplete feature.

When adding code to run in the event, it should be added in between the open and closing curly brace created in the event, just like in ``||loops:loops||`` or ``||functions:functions||``.

### ~hint

The syntax for this will likely seem a bit weird to start. In the next lesson, this will be explored in much more detail.

### ~

## Example #1: ``console.log`` Every Update

1. Review the code below
2. Identify what code is assign to run every game update
3. Recreate the code below in a new project
4. Identify how often the event occurs by opening the console simulator

```typescript
game.onUpdate(function () {
    console.log("Updating!");
})
```

![Logging Updates](/static/courses/csintro3/events/logging-update.gif)

In this example, the **event handler** assigned to the ``||game:on game update||`` event simply logged "Updating!" every update.

## Student Task #1: Keep Track

1. Start with the code from example #1
2. **Before** the event, create a variable ``||variables:count||`` that stores the number 0
3. **In** the event, add a line after ``console.log`` that **increments** ``||variables:count||``
4. Change the message that is logged to include the count: for example, the first two messages logged might be the following:
    * "Updating: 0"
    * "Updating: 1"

## Concept: ``||sprites:Sprite||`` in ``||game:on game update||``

Using Sprites

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Star
}

game.onUpdate(function () {
    let star = sprites.createProjectile(img`1`, 50, 0, SpriteKind.Star);
    star.y = Math.randomRange(0, scene.screenHeight());
    star.setFlag(SpriteFlag.Ghost, true);
})
```

## Concept: Troubleshooting

## Example #2: 
USING PAUSE IN A LOOP