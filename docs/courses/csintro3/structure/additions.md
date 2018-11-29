# Additions to Case Study

At this point, you have the knowledge necessary to deal with a larger pieces of code - in particular, by using comments to leave information for anyone reading it in the future, as well as namespaces to split code into logical chunks.

To get a head start on future topics, there are a few more namespaces that we will add in to make the game a bit more interesting, and give a framework for future tasks to build upon.

Below are two snippets of code.

The first is the current state of the example game, with a few minor changes; in particular, removing the ``||game:splash||`` screen and ``||game:prompt||`` for user input, as well as the initial blast of ``||sprites:Asteroids||``. These can be left in your game if you'd like (just make sure that they remain at the end of the code, so they are executed after everything is set up), but have been removed to make it easier to focus on the game.

The second is the version that will be referenced going forward. This includes a number of new namespaces that will make the game a bit more interesting. Play the game and see what has changed, and duplicate the changes from this page into your own game.

### ~hint

In future activities, the solutions will be limited to show the sections of the code that have been updated - in particular, any namespaces that were changed, as well any top level code that was modified.

This will help focus on the sections of the code that are relevant to each task, without having to search through the entire game's code for every single change.

### ~

## Current Game

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Asteroid,
    PowerUp,
    Laser
}

enum PowerUpType {
    Health,
    Score
}

/**
 * Contains the images used in the game
 */
namespace spritesheet {
    export let player: Image = img`
        . . . . 8 . . . .
        . . . 8 8 8 . . .
        . . . 8 1 8 . . .
        . . 2 8 1 8 2 . .
        . 2 2 8 8 8 2 2 .
        2 2 2 8 8 8 2 2 2
        . . . 5 . 5 . . .
    `;

    export let enemy: Image = img`
        5 5 . . . . 5 5
        7 7 7 7 7 7 7 7
        . 9 9 7 7 9 9 .
        . 7 7 7 7 7 7 .
        . . . 9 9 . . .
    `;

    export let asteroid: Image = sprites.space.spaceAsteroid0;

    export let powerUp: Image = img`
        . . . 5 5 5 5 5 . . .
        . . 5 5 5 f 5 5 5 . .
        . 5 5 5 f f f 5 5 5 .
        5 5 5 f 5 f 5 f 5 5 5
        5 5 5 5 f 5 5 5 5 5 5
        5 5 5 5 5 f 5 5 5 5 5
        5 5 5 5 5 5 f 5 5 5 5
        5 5 5 f 5 f 5 f 5 5 5
        . 5 5 5 f f f 5 5 5 .
        . . 5 5 5 f 5 5 5 . .
        . . . 5 5 5 5 5 . . .
    `;

    export let laser: Image = img`
        4
        4
    `;
}

/**
 * Creates and controls the asteroids within the game
 */
namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setImage(spritesheet.asteroid);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.createEmptySprite(SpriteKind.Asteroid);
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

/**
 * Creates and controls the player's ship
 */
namespace ship {
    export let player = sprites.create(spritesheet.player, SpriteKind.Player);

    controller.moveSprite(player, 80, 30);
    player.x = screen.width / 2;
    player.y = screen.height - 20;

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        sprites.createProjectile(spritesheet.laser, 0, -40, SpriteKind.Laser, player);
    });
}

/**
 * Creates and controls the enemies in the game
 */
namespace enemy {
    let enemy = sprites.create(spritesheet.enemy, SpriteKind.Enemy);
    enemy.x = ship.player.x;
    enemy.y = 20;
    enemy.vy = 10;
}

/**
 * Generates powerups for the player to collect
 */
namespace powerups {
    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        sprite.setImage(spritesheet.powerUp);
        sprite.data = Math.pickRandom([
            PowerUpType.Health,
            PowerUpType.Score
        ]);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    function setMotion(powerUp: Sprite) {
        powerUp.vy = 60;
    }

    export function getType(powerUp: Sprite): number {
        return powerUp.data;
    }

    game.onUpdateInterval(1000, function () {
        if (Math.percentChance(33)) {
            sprites.createEmptySprite(SpriteKind.PowerUp);
        }
    });

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = Math.randomRange(edge, screen.width - edge);
        sprite.y = 0;
    }
}

/**
 * Handle overlaps between different sprites
 */
namespace overlapevents {
    // When the player hits an asteroid, damage the player and destroy the asteroid
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        otherSprite.destroy();
    });

    // When a laser hits an asteroid, destroy both sprites
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    });

    // When a laser hits an enemy, destroy both sprites
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    });

    // When a player hits a powerup, apply the bonus for that powerup
    sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite: Sprite, otherSprite: Sprite) {
        let powerUp: number = powerups.getType(otherSprite);
        otherSprite.destroy();
        if (powerUp == PowerUpType.Health) {
            sprite.say("Got health!")
            info.changeLifeBy(1);
        } else if (powerUp == PowerUpType.Score) {
            sprite.say("Score!")
            info.changeScoreBy(15);
        }
    });
}

/**
 * Set up the state of the game
 */
namespace status {
    info.setLife(3);
    info.setScore(0);
}
```