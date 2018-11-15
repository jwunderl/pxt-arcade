# Appendix: For Each Loops

``||arrays:Arrays||`` can be traversed using a simple ``||loops:for||`` loop, using each index from 0 to one less than the ``||arrays:length||`` of the ``||arrays:array||``.

This can have a few downsides; for one, the index will often not be relevant outside of keeping track of the different elements of the ``||arrays:array||``.

Additionally, the ``||arrays:array||`` might be created and intended to be used only within the loop, like destroying random ``||sprites:Enemies||`` using ``||sprites:sprites.allOfKind||``; keeping the array around after the loop might result in bugs when the array is unintentionally used later on.

``||loops:For each||`` loops will iterate through each element in an ``||arrays:array||``.

## Concept: For Each loop syntax



## Example #1: ``||loops:For Each||`` ``||sprites:Enemy||``

```typescript
enum SpriteKind {
    Player,
    Enemy
}

for (let i = 0; i < 15; i++) {
    let skeleton: Sprite = sprites.create(sprites.castle.skellyFront, SpriteKind.Enemy);
    skeleton.x = Math.randomRange(0, screen.width);
    skeleton.y = Math.randomRange(0, screen.height);
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let enemy of sprites.allOfKind(SpriteKind.Enemy)) {
        enemy.say("hi!", 1000);
    }
});
```