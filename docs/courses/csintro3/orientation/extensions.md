# Activity: Using Corgio in JavaScript

In previous lessons, the ``||corgio:Corgio||`` extension handled the intricate parts of making a character for a platformer.

In JavaScript, extensions remain a useful tool in developing complex programs.

## Concept: Creating a Corgio

Using an extension in JavaScript is very similar to using an extension in Blocks: the first step remains to load the extension.

![Loading Corgio using Extensions menu](/static/courses/csintro3/orientation/loading-extension.gif)

After loading the extension, the contents of the extension can be accessed just like any other code, and a new category in the toolbox will often show up showing some of the newly accessible functions (if the developer of the extension chose to implement that behavior).

## Example #1: Corgio Extension in Blocks and JavaScript

The ``||corgio:Corgio||`` extension remains easy to use in JavaScript. For example, ``corgi.create`` can be used to create a new ``||corgio:Corgi||``, similar to how ``sprites.create`` creates a new ``||sprites:Sprite||``.

```blocks
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
```

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
```



```typescript
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
myCorg.horizontalMovement();
```

Specifically how you're calling a method on the corgio -> `myCorg.horizontalMovement();` is effectively the same as "tell myCorg to do the horizontalMovement task"

making an interesting corgio that can do the things

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
myCorg.horizontalMovement();
myCorg.verticalMovement();
myCorg.updateSprite();
```


barking and stuff as a student activity (loops reminder, calling more methods, more practice with looking for properties / methods (either in toolbox, or autocomplete shown in sprites lesson))

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = corgi.create(SpriteKind.Player);
myCorg.horizontalMovement();
myCorg.verticalMovement();
myCorg.updateSprite();
myCorg.addToScript("bark");
for (let i = 0; i < 50; i++) {
    myCorg.bark();
    pause(1000);
}
```

```package
corgio
```
