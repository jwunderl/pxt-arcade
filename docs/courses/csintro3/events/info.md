# Activity: Info

The ``||info:Info||`` category has three values that it can keep track of by default: a player's ``||info:score||`` and ``||info:health||``, as well as a ``||info:countdown||`` for the game.

In addition to keeping track of those values, it also allows for a few interesting events: ``||info:on life zero||`` and ``||info:on countdown end||``. These events allow you to control the behaviors of these functions


====================================================================================================================================
init contents

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let mySprite = sprites.create(img`
1 1 1
`, SpriteKind.Player);
controller.controlSprite(mySprite, 100, 100);

let enemy = sprites.create(img`
5 2 5
2 5 2
5 2 5
`, SpriteKind.Enemy);
enemy.x += 50;

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, eventForOverlap)

function eventForOverlap(sprite: Sprite, otherSprite: Sprite) {
    sprite.say("ouch!", 250);
}

info.onLifeZero(function () {

})
```

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let mySprite = sprites.create(img`
1 1 1
`, SpriteKind.Player);
controller.controlSprite(mySprite, 100, 100);

let enemy = sprites.create(img`
5 2 5
2 5 2
5 2 5
`, SpriteKind.Enemy);
enemy.x += 50;

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, eventForOverlap)

function eventForOverlap(sprite: Sprite, otherSprite: Sprite) {
    sprite.say("ouch!", 250);
}

info.onCountdownEnd(function () {

})
```

## wrap up

add both events in some way (timed puzzle with countdown end, continue screen for onLifeZero that bumps up their health)