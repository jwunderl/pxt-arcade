# Problem Set: Comments

This section contains a number of selected problems for the Comments section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Comments are Cool

Write a function called ``splashPhrase`` that the following comment would describe

```typescript
/**
 * Splashes to the screen the phrase "Comments are cool!"
 */
```

## Problem #2: Create a Skelly

Write a descriptive comment for the following function.

```typescript
/**
 * 
 */
function createSkeleton() {
    sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . f f f f . . . . . . . . . .
        . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
        . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . .
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d d d 1 1 1 1 d d d f . . . . . .
        . . . . . . f b d b f d d f b d b f . . . . . .
        . . . . . . f c d c f 1 1 f c d c f . . . . . .
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
        . . . . . . f f f c d b 1 b d f f f f . . . . .
        . . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . .
        . . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . .
        . . . . f b f b f f f f f f b f b f b f . . . .
        . . . . . . . . . f f f f f f . . . . . . . . .
        . . . . . . . . . . . f f f . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `);
}
```

## Problem #3: Place a Skelly

Write a function called ``placeSkeleton`` that the following comment would describe

```typescript
/**
 * Places a skeleton sprite at the given location
 * @param x the x coordinate of the skeleton
 * @param y the y coordinate of the skeleton
 */
```

## Problem #4: Color the Hero

Write a descriptive comment for what the following function does

```typescript
/**
 *
 */
function createHero(color: number) {
    let hero: Sprite = sprites.create(sprites.castle.heroWalkFront1);
    hero.image.replace(2, color);
}
```

## Problem #5: Mean Comments

Write a function called ``average`` that the following comment would describe

```typescript
/**
 * Computes the sum of two numbers
 * @param x the first number to be averaged
 * @param y the second number to be averaged
 * @returns the average of the the two numbers
 */

```

## Problem #6: Speedy Sprite

Write a descriptive comment for what the following function does

```typescript
/**
 * 
 */
function getSpeed(mySprite: Sprite): number {
    return Math.sqrt(mySprite.vx ** 2 + mySprite.vy ** 2);
}
```