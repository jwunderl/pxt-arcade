# Activity: Images in Arrays

``||images:Images||`` are used to represent many things on screen in @boardname@ - ``||scene:backgrounds||``, ``||sprites:Sprites||``, many other elements of the games.

A number of complex behaviors can be handled easily using ``||arrays:arrays||`` of ``||images:Images||``, allowing for games with a larger variety of content for the person playing to experience.

## Concept: Simple Animations

Animations in games are represented as a series of different images that get shown in a sequence.

Using ``||arrays:arrays||``, these ``||images:images||`` can be stored in a single location and referenced much more easily than they could be using individual variables.

## Example #1: Flapping Duck

1. Review the code below
2. Identify how the ``||images:Image||`` array is created
3. Identify how the ``||loops:for||`` loop is used to iterate through the different ``||images:images||`` of the  ``||sprites:ducks||``

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let characterImages: Image[] = [
    sprites.duck.duck1,
    sprites.duck.duck2,
    sprites.duck.duck3,
    sprites.duck.duck4,
    sprites.duck.duck5,
    sprites.duck.duck6
];

let duck: Sprite = sprites.create(characterImages[0], SpriteKind.Player)
for (let index = 0; index < characterImages.length; index++) {
    pause(150);
    duck.setImage(characterImages[index]);
}
```

## Student Task #1: Walking Hero

1. Start with the code from example #1
2. Modify the code to show a **hero walking** instead of a **flying duck**, by replacing the images in ``||variables:characterImages||``
3. Use a second ``||loops:for||`` loop that causes the current ``||loops:for||`` loop to repeat **20** times, so that the animation will continue to repeat

### ~hint

The ``||images:images||`` of a hero walking can be referenced using the following variables:

* ``||sprites:sprites.castle.heroWalkFront1||``
* ``||sprites:sprites.castle.heroWalkFront2||``
* ``||sprites:sprites.castle.heroWalkFront3||``
* ``||sprites:sprites.castle.heroWalkFront4||``

### ~