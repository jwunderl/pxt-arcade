# Case Study

```typescript
enum SpriteKind {
    Player,
    Enemy,
    PowerUp,
    Asteroid,
    Laser
}

namespace Asteroids {
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
        asteroid.x = Math.randomRange(10, screen.height - 10); // student fill in these
        asteroid.y = 0;
    }

    function setMotion(asteroid: Sprite) {
        asteroid.vx = Math.randomRange(-8, 8);
        asteroid.vy = Math.randomRange(35, 20);
    }
}

namespace PowerUps {
    export enum PowerUpType {
        Health,
        Score,
        Attack
    }

    let powerUpImages: Image[] = [
        img`
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
        `,
        img`
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
        `,
        img`
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
        `
    ];

    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        sprite.setImage(Math.pickRandom(powerUpImages));
        setPosition(sprite);
        setMotion(sprite);
    })

    // make them add this event
    sprites.onDestroyed(SpriteKind.PowerUp, function (sprite: Sprite) {
        Ship.player.say("missed it :(", 500);
    })

    // eventually have them recognize this is the same as Asteroids.setPosition
    function setPosition(powerUp: Sprite): void {
        powerUp.x = Math.randomRange(10, screen.height - 10); // student fill in these
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

namespace Ship {
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

    export let boostedLasers: number = 0;

    playerImages.push(playerImages[0].clone());
    playerImages[2].flipX();

    export let player: Sprite = sprites.create(playerImages[1], SpriteKind.Player);
    player.setFlag(SpriteFlag.StayInScreen, true);

    info.setLife(3);
    info.setScore(0);

    let laserImage: Image = img`
        1
        1
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
        if (player.vx < -1) {
            player.setImage(playerImages[0]);
        } else if (player.vx <= 1) {
            player.setImage(playerImages[1]);
        } else {
            player.setImage(playerImages[2]);
        }
    })
}

namespace OverLaps {
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1); // rm this and make them add it
        info.changeScoreBy(-1); // rm this and make them add it
        otherSprite.destroy(); // rm this and make them add it
    })

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        info.changeScoreBy(1); // rm this and make them add it
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite: Sprite, otherSprite: Sprite) {
        let powerUp: number = PowerUps.getType(otherSprite);
        otherSprite.destroy();
        // convert to storing a msg, then calling Ship.player.say in one place / less redundant
        if (powerUp === PowerUps.PowerUpType.Health) {
            info.changeLifeBy(1);
            Ship.player.say("health!", 250);
        } else if (powerUp === PowerUps.PowerUpType.Score) {
            info.changeScoreBy(15);
            Ship.player.say("score!", 250);
        } else if (powerUp === PowerUps.PowerUpType.Attack) {
            Ship.boostedLasers += 5;
            Ship.player.say("laser boost!", 250);
        }
    })
}
```