# Case Study

```typescript
enum SpriteKind {
    Player,
    Enemy,
    PowerUp,
    Asteroid,
    Laser,
    Star,
    EnemyLaser, // they add this
    BrokenAsteroid // for challenge
}

namespace asteroids {
    let asteroidImages: Image[] = [
        sprites.space.spaceAsteroid0,
        sprites.space.spaceAsteroid1,
        sprites.space.spaceAsteroid2
    ];

    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setImage(Math.pickRandom(asteroidImages));
        setPosition(sprite);
        setMotion(sprite);
        // for setMotion, store variable in namespace for sprite, make them convert to parameters
    })

    sprites.onDestroyed(SpriteKind.Asteroid, function (sprite: Sprite) {
        info.changeScoreBy(1);
        // Make them do this
    })

    game.onUpdateInterval(1500, function () {
        sprites.createEmptySprite(SpriteKind.Asteroid);
    })

    function setPosition(asteroid: Sprite): void {
        asteroid.x = Math.randomRange(10, screen.width - 10); // student fill in these
        asteroid.y = 0;
    }

    function setMotion(asteroid: Sprite) {
        asteroid.vx = Math.randomRange(-8, 8);
        asteroid.vy = Math.randomRange(35, 20);
    }
}

namespace stars {
    let starImages: Image[] = [
        img`
        1 1
        `,
        img`
        1
        `,
        img`
        3 . . 1
        `,
        img`
        3 .
        . .
        . .
        . 1`
    ]

    sprites.onCreated(SpriteKind.Star, function (sprite: Sprite) {
        sprite.setImage(Math.pickRandom(starImages));
        setPosition(sprite);
        setMotion(sprite);
        sprite.setFlag(SpriteFlag.Ghost, true);
        sprite.z = -1;  // have them set this to teach properties
    })

    // eventually have them recognize this is the same as Asteroids.setPosition
    function setPosition(star: Sprite): void {
        star.x = Math.randomRange(0, screen.width); // student fill in these
        star.y = 0;
    }

    function setMotion(star: Sprite): void {
        star.vy = 20;
    }

    game.onUpdateInterval(50, function () {
        if (Math.percentChance(33)) {
            sprites.createEmptySprite(SpriteKind.Star);
        }
    })

    for (let row = 0; row < screen.height / 10; row++) {
        sprites.createEmptySprite(SpriteKind.Star);
    }
    for (let star of sprites.allOfKind(SpriteKind.Star)) {
        star.y = Math.randomRange(0, screen.height);
    }
}

namespace powerups {
    export enum PowerUpType {
        Health,
        Score,
        Attack
    }
    let powerUpImages: Image[] = [];

    powerUpImages[powerups.PowerUpType.Health] = img`
            . . . 7 7 7 7 7 . . .
            . . 7 7 7 7 7 7 7 . .
            . 7 7 2 7 7 7 2 7 7 .
            7 7 7 2 7 7 7 2 7 7 7
            7 7 7 2 7 7 7 2 7 7 7
            7 7 7 2 2 2 2 2 7 7 7
            7 7 7 2 7 7 7 2 7 7 7
            7 7 7 2 7 7 7 2 7 7 7
            . 7 7 2 7 7 7 2 7 7 .
            . . 7 7 7 7 7 7 7 . .
            . . . 7 7 7 7 7 . . .
        `;
    powerUpImages[powerups.PowerUpType.Score] = img`
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
    powerUpImages[powerups.PowerUpType.Attack] = img`
            . . . 6 6 6 6 6 . . .
            . . 6 6 6 6 6 6 6 . .
            . 6 6 1 6 6 6 1 6 6 .
            6 6 1 1 1 6 1 1 1 6 6
            6 1 6 1 6 1 6 1 6 1 6
            6 6 6 1 6 6 6 1 6 6 6
            6 6 6 1 6 6 6 1 6 6 6
            6 6 6 1 6 6 6 1 6 6 6
            . 6 6 1 6 6 6 1 6 6 .
            . . 6 6 6 6 6 6 6 . .
            . . . 6 6 6 6 6 . . .
        `;

    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        sprite.setImage(Math.pickRandom(powerUpImages));
        setPosition(sprite);
        setMotion(sprite);
    })

    // make them add this event
    sprites.onDestroyed(SpriteKind.PowerUp, function (sprite: Sprite) {
        ship.player.say("missed it :(", 500);
    })

    // eventually have them recognize this is the same as Asteroids.setPosition
    function setPosition(powerUp: Sprite): void {
        powerUp.x = Math.randomRange(10, screen.width - 10); // student fill in these
        powerUp.y = 0;
    }

    function setMotion(powerUp: Sprite): void {
        powerUp.vy = 60;
    }

    export function getType(powerUp: Sprite): number {
        return powerUpImages.indexOf(powerUp.image);
    }

    game.onUpdateInterval(1000, function () {
        if (Math.percentChance(33)) {
            sprites.createEmptySprite(SpriteKind.PowerUp);
        }
    })
}

// They make the enemies outside of any name space to start, then move them into a namespace
// they make when they move up
namespace enemy {
    game.onUpdateInterval(1500, function () {
        if (Math.percentChance(40)) {
            let enemy = sprites.create(img`
                5 5 . . . . 5 5
                7 7 7 7 7 7 7 7
                . 9 9 7 7 9 9 .
                . 7 7 7 7 7 7 .
                . . . 9 9 . . .
            `, SpriteKind.Enemy);
            setPosition(enemy);
            enemy.setFlag(SpriteFlag.AutoDestroy, true);
            enemy.vy = 15;
        }
    })

    // eventually have them recognize this is the same as Asteroids.setPosition
    function setPosition(enemy: Sprite): void {
        enemy.x = Math.randomRange(10, screen.width - 10); // student fill in these
        enemy.y = 0;
    }

    sprites.onDestroyed(SpriteKind.Enemy, function (sprite: Sprite) {
        info.changeScoreBy(3);
    })

    game.onUpdate(function () {
        for (let enemy of sprites.allOfKind(SpriteKind.Enemy)) {
            let diff: number = enemy.x - ship.player.x;
            if (diff < -2) {
                enemy.vx = 8;
            } else if (diff > 2) {
                enemy.vx = -8;
            } else {
                enemy.vx = 0;
            }
            if (Math.percentChance(4)) {
                sprites.createProjectile(img`
                        7
                        7
                        `, 0, 45, SpriteKind.EnemyLaser, enemy);
            }
        }
    })
}

namespace ship {
    let playerImages: Image[] = [
        img`
            8 8 . . . . . .
            8 1 8 . . . . .
            . 8 1 8 2 2 2 2
            . . 8 8 8 2 2 .
            . . 2 8 8 8 5 .
            . . 2 2 8 . . .
            . . 2 2 5 . . .
            . . 2 . . . . .
        `, img`
            . . . . 8 . . . .
            . . . 8 8 8 . . .
            . . . 8 1 8 . . .
            . . 2 8 1 8 2 . .
            . 2 2 8 8 8 2 2 .
            2 2 2 8 8 8 2 2 2
            . . . 5 . 5 . . .
        `
    ];

    playerImages.push(playerImages[0].clone()); // guide through doing this
    playerImages[2].flipX(); // guide through doing this

    export let boostedLasers: number = 0; // they add this variable (handwave the export till namespaces)
    export let player: Sprite = sprites.create(playerImages[1], SpriteKind.Player);
    player.setFlag(SpriteFlag.StayInScreen, true); // using flags, make em do this

    info.setLife(3);
    info.setScore(0);

    let laserImage: Image = img`
        4
        4
    `;

    controller.controlSprite(player, 80, 30);
    player.y = screen.height - 20;

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        sprites.createProjectile(laserImage, controller.dx() * 4, -40, SpriteKind.Laser, player); // make them create the laser
    })

    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        if (boostedLasers > 0) {
            let left: Sprite = sprites.createProjectile(laserImage, controller.dx() * 4, -40, SpriteKind.Laser, player);
            let right: Sprite = sprites.createProjectile(laserImage, controller.dx() * 4, -40, SpriteKind.Laser, player);
            left.x -= 2;
            right.x += 2;
            boostedLasers--;
        } else {
            player.say("no more boost", 500);
        }
    })

    game.onUpdate(function () {
        if (player.vx < -1) { // arrays -> make them switch between the different images instead of having a constant forward facing one
            player.setImage(playerImages[0]);
        } else if (player.vx <= 1) {
            player.setImage(playerImages[1]);
        } else {
            player.setImage(playerImages[2]);
        }
    })
}

namespace overlapevents {
    let powerUpStrings: string[] = [];
    powerUpStrings[powerups.PowerUpType.Health] = "health!";
    powerUpStrings[powerups.PowerUpType.Score] = "score!";
    powerUpStrings[powerups.PowerUpType.Attack] = "laser boost!";

    let brokenAsteroids: Image[] = [  // FOR ASTEROID-ENEMYLASER
        sprites.space.spaceSmallAsteroid0,
        sprites.space.spaceSmallAsteroid1,
        sprites.space.spaceSmallAsteroid2,
        sprites.space.spaceSmallAsteroid3,
        sprites.space.spaceSmallAsteroid4,
        sprites.space.spaceSmallAsteroid5
    ];

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1); // rm this and make them add it
        info.changeScoreBy(-1); // rm this and make them add it
        otherSprite.destroy(); // rm this and make them add it
    })

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    })

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    })

    // ADDED IN CHALLENGE
    sprites.onOverlap(SpriteKind.Player, SpriteKind.BrokenAsteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1); // rm this and make them add it
        info.changeScoreBy(-1); // rm this and make them add it
        otherSprite.destroy(); // rm this and make them add it
    })

    // ADDED IN CHALLENGE
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.BrokenAsteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        info.changeScoreBy(1); // rm this and make them add it
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite: Sprite, otherSprite: Sprite) {
        let powerUp: number = powerups.getType(otherSprite);
        otherSprite.destroy();
        // make them convert to storing a msg, then calling Ship.player.say in one place / less redundant (and then to string arrays)
        if (powerUp === powerups.PowerUpType.Health) {
            info.changeLifeBy(1);
            // ship.player.say("health!", 500);
        } else if (powerUp === powerups.PowerUpType.Score) {
            info.changeScoreBy(15);
            // ship.player.say("score!", 500);
        } else if (powerUp === powerups.PowerUpType.Attack) {
            ship.boostedLasers += 5;
            // ship.player.say("laser boost!", 500);
        }
        if (powerUp != -1) {
            ship.player.say(powerUpStrings[powerUp], 500);
        }
    })

    // TODO make enemy related overlap events

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-2);
        info.changeScoreBy(-3);
        otherSprite.destroy();
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyLaser, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        otherSprite.destroy();
    })


    // CHALLENGE: add overlap event for enemy lasers and asteroids, that 'splits' the asteroids
    // in two moving diagonally downwards from curr asteroid position
    sprites.onOverlap(SpriteKind.Asteroid, SpriteKind.EnemyLaser, function (sprite: Sprite, otherSprite: Sprite) {
        sprite.setFlag(SpriteFlag.Ghost, true);
        let left = sprites.createProjectile(Math.pickRandom(brokenAsteroids), Math.randomRange(-20, -10), sprite.vy * (1 + Math.random()), SpriteKind.BrokenAsteroid, sprite);
        let right = sprites.createProjectile(Math.pickRandom(brokenAsteroids), Math.randomRange(10, 20), sprite.vy * (1 + Math.random()), SpriteKind.BrokenAsteroid, sprite);
        sprite.destroy();
        otherSprite.destroy();
    })
}

// Eventually / at end of functions, make them create a misc type namespace 
// for helper functions / general game state elements
```