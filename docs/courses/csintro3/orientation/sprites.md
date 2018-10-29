# Activity: Sprites

Sprites are commonly used to represent the characters of games in @boardname@. The characters can be controlled by the person playing the game, or the computer itself.

## Concept: Simple Sprite Motion

Creating and controlling ``||sprites:Sprites||`` are two of the most important steps in developing your own game. The ``||sprites:Sprite||`` a player controls provide a way for the player to interact with the game.

## Example #1: Starter Sprites

1. Review the code below
2. Identify how the ``||sprites:Sprite||`` is created
3. Identify how the player can move the ``||sprites:Sprite||`` in the game

```typescript
let player: Sprite = sprites.create(sprites.castle.princessFront0, 0);
controller.controlSprite(player, 100, 100);
```

In the example above, the sprite is created using ``||sprites:sprites.create||``. There is a lot to take in, though:

* Notice the type of ``||variables:player||``: it is a ``||sprites:Sprite||``
* The function that creates the ``||sprites:Sprite||`` takes in two things: an image (``||sprites:sprites.castle.princessFront0||`` is one of the provided images to start with), and a ``||sprites:kind||`` of 0
* ``||controller:controller.controlSprite||`` is a function that takes a ``||sprites:Sprite||`` and allows it to to move around the screen as using the direction keys. Besides the ``||sprites:Sprite||``, it also needs two numbers: one for the horizontal velocity, and one for the vertical velocity

## Student Task #1: Slow the New Sprite

1. Start with the code from example #1
2. Change the image of the ``||sprites:Sprite||`` from ``||sprites:princessFront0||`` to ``||sprites:princess2Front||`` (the ``||sprites:sprites.castle.||`` part should remain in front)
3. Change the ``||sprites:vx||`` in ``||controller:controller.controlSprite||`` to 50
4. Change the ``||sprites.vy||`` in ``||controller:controller.controlSprite||`` to 150
5. Play the game, and identify how it has changed in this task

## Concept: Personalizing Sprites

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Player);
controller.controlSprite(player, 100, 100);
```

* Really have to explain enums, as otherwise things get messy too quickly with regards to sprite overlaps / etc
    * Enums allow for defining a group of named constants
    * Allow developers to more clearly convey what values mean - SpriteKind.Player is easier to identify / read than 0, and SpriteKind.Enemy is easier to identify than 1, etc
* Also introducing template strings here

## Example using / adding a new kind

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Square
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Square);
controller.controlSprite(player, 100, 100);
```

## Task make them add 2 new kinds

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Square,
    Circle,
    Diamond
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Player);
controller.controlSprite(player, 100, 100);
```

## Sprite Properties and Methods

Explain that properites are basically variables contained within the sprite object

Auto complete gif here to show how they can identify all the public properties by typing the name of the variable and a dot

![Auto Complete](/static/courses/csintro3/orientation/auto-complete.gif)

### Using a property

changing x to move, also showing `pause()` to make the movement visible

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Square
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Square);

pause(500)
player.x += 20
```

pauses half a second, then bumps player over 20. Show it being equivalent to change by block -> making them convert back and forth to see

more practice with properties; use in a loop, move in a square, etc, etc; for example,

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Square
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Square);

for (let i = 0; i < 5; i++) {
    pause(500)
    player.x += 20
}
```

Last important thing to show: pre def'd sprite images (help make the example code more reasonable from now on)
    * sprites.castle
    * sprites.duck
    * sprites.food
    * sprites.space
    * sprites.vehicle