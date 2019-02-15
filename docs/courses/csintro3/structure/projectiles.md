# Activity: Projectiles
























## What did we learn?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/structure/projectiles-problems) for this section
to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Initial Position

Earlier on in the case study,
the variables ``||variables:x||`` and ``||variables:y||`` were created to
store the location the player should start at.
Move these assignments after the creation of the ``||variables:player||``,
and then change it to set ``||variables:player.x||`` instead of ``||variables:x||``,
and ``||variables:player.y||`` instead of ``||variables:y||``.

### Solution

```typescript
enum SpriteKind {
    Player,
    Projectile,
    Asteroid
}

namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = Math.randomRange(-8, 8);
        asteroid.vy = Math.randomRange(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = Math.randomRange(edge, screen.width - edge);
        sprite.y = 0;
    }
}

let name: string = "Captain ";
let playerName: string = game.askForString("What is your name?");

if (playerName == "myName!") {
    playerName += " 2";
}

name += playerName;

let intro: string = "Hello, ";
intro += name;
intro += "! This is my Space Game!";
game.splash(intro);

for (let i = 0; i < 10; i++) {
    sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    pause(250);
}

let player = sprites.create(img`
    . . . . 8 . . . .
    . . . 8 8 8 . . .
    . . . 8 1 8 . . .
    . . 2 8 1 8 2 . .
    . 2 2 8 8 8 2 2 .
    2 2 2 8 8 8 2 2 2
    . . . 5 . 5 . . .
`, SpriteKind.Player);

controller.moveSprite(player, 80, 30);
player.x = screen.width / 2;
player.y = screen.height - 20;
```

### ~