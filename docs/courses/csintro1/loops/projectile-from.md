# Activity: Projectiles from Sprites

Another option for projectiles is to set a sprite for them to originate from. This is particularly useful for creating special effects.

In this activity, students will use:

* ``||sprites:projectile from mySprite||`` sprites
* ``||sprites:on sprite destroyed||``
* ``||math:pick random||``
* ``||sprites:ghost on||``

## Concept: Projectile from Sprite

https://youtu.be/Y7_-noa6_FU 

[Alternative Video Location](https://aka.ms/40544a-projectile-from-sprite) 

There are many games that have sprites sending out projectile sprites. We can set projectiles to originate from a sprite to drop coins, create obstacles, kick a ball or send a laser beam to destroy an asteroid by using ``||sprites:projectile from sprite||``.

```block
enum SpriteKind {
    Player,
    Projectile,
    Enemy
}
let ball: Sprite = null
let mySprite: Sprite = null
ball = sprites.createProjectileFromSprite(img`
. . . . . . 7 7 
. . . . . . 7 7 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite, -50, 0)
```

### Example #1: Throw ball #example-1

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Throw Ball") 

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Enemy
}
let mySprite: Sprite = null
let ball: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectileFromSprite(img`
. . . . . . 7 7 
. . . . . . 7 7 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite, -50, 0)
    pause(200)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e . . 7 7 . . 
. . . . . . e d d e . . 7 9 . . 
. . . . . . e d d e . . 4 . . . 
. . . . . . . d d . 4 4 . . . . 
. . . . . . 4 5 5 4 4 . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . 9 4 4 . 4 4 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 3 3 . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . 3 3 . 3 3 . . . . . . 
. . . . . 3 . . . 3 3 . . . . . 
. . . . . 3 . . . . 3 . . . . . 
. . . . 1 1 . . . 1 1 . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(145, 60)
```

## Student Task #1: Throw a ball at a target

1. Start with the code from [example #1](#example-1)
2. Modify the code to make a target sprite on the other side of the screen from the player sprite 
3. Add a countdown timer
4. Create an ``||sprites:on overlap||`` event for the ball and the target to add a point and destroy the ball
5. **Challenge**: make the target into projectiles that move down the screen and add vertical motion to the player sprite

## Concept: Projectiles from other Projectile Sprites

https://youtu.be/EkG5UxwfxG8 

[Alternative Video Location](https://aka.ms/40544a-projectile-from-projectile)

We can use projectiles to create an animation. The following examples build a projectile raining cloud (that is also a projectile). 

## Example #2: Cloudy Day

1. Review the code snippets below
2. For each snippet, create the sample code and run the code
3. Identify what is new in each snippet

### Example #2a: Cloud projectile

```blocks
enum SpriteKind {
    Player,
    Projectile
}
let cloud: Sprite = null
cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . 1 . . . 
. . 1 1 1 1 1 9 9 9 1 1 1 1 . . 
. . 1 1 9 9 9 9 1 9 9 9 9 1 . . 
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . . 
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 10, 0)
```

There's not much to this code; it spawns a cloud, which slowly moves across the screen. However, what if we want to make the cloud rain? We can do this by adding projectiles that are emitted from the cloud itself!

### Example #2b: Cloud projectile that emits projectile rain

Review the code carefully for the use of ``||sprites:ghost on||`` and ``||sprites:projectile from sprite||`` for the raindrop projectiles. 

```blocks
enum SpriteKind {
    Player,
    Projectile
}

let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . 1 . . . 
. . 1 1 1 1 1 9 9 9 1 1 1 1 . . 
. . 1 1 9 9 9 9 1 9 9 9 9 1 . . 
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . . 
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 10, 0)
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, cloud, 0, 30)
    raindrop.setFlag(SpriteFlag.Ghost, true)
})
```

Note that we set the raindrops to be ``||sprites:ghosts||``. This means that these ``||sprites:Sprites||`` **won't be detected when overlapping** with other sprites, and will pass through sprites as if there were no overlap events. The game can avoid checking for collisions with ghost sprites, which will help boost in performance and frame rate.

Try removing the ``||sprites:ghosts||`` block and see how much the performance goes down.

### Example #2c: Cloud projectile that widely emits projectile rain

We can make the rain drops show up at different places so that they don't all appear in the same location relative to the cloud. We'll set the raindrop `X` property to a random value. 

```block
let raindrop: Sprite = null
raindrop.x += Math.randomRange(1, 14)
```

```blocks
enum SpriteKind {
    Player,
    Projectile
}

let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . 1 . . . 
. . 1 1 1 1 1 9 9 9 1 1 1 1 . . 
. . 1 1 9 9 9 9 1 9 9 9 9 1 . . 
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . . 
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 10, 0)
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, cloud, 0, 30)
    raindrop.setFlag(SpriteFlag.Ghost, true)
    raindrop.y += 3
    raindrop.x += Math.randomRange(1, 14)
})
```

### Example #2d: Count destroyed raindrops

The ghost raindrop sprites don't cause an overlap event. We can use other events though, like ``||sprites:on sprite destroyed||``. We can count the raindrops that make it to the bottom of the screen by adding them up in their destroyed event.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Cloud
}

let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . 1 . . . 
. . 1 1 1 1 1 9 9 9 1 1 1 1 . . 
. . 1 1 9 9 9 9 1 9 9 9 9 1 . . 
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . . 
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 10, 0)
cloud.setKind(SpriteKind.Cloud)
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . 9 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, cloud, 0, 30)
    raindrop.setFlag(SpriteFlag.Ghost, true)
    raindrop.y += 3
    raindrop.x += Math.randomRange(1, 14)
})

sprites.onDestroyed(SpriteKind.Projectile, function (sprite: Sprite) {
    info.changeScoreBy(1)
})

sprites.onDestroyed(SpriteKind.Cloud, function (sprite: Sprite) {
    game.over(true)
})
```

Note the new ``||sprites:set cloud kind to Cloud||`` block was added in as well; the cloud ``||sprites:Projectile||``'s ``||sprites:kind||`` needed to be changed so that a different ``||sprites:on destroyed||`` event can be applied to the clouds and the rain drops.

## Student Task #2: Projectile from Projectile

https://youtu.be/qlijC56n88k

[Alternative Video Location](https://aka.ms/40544a-projectile-from-proj-task)

Make a projectile move across the bottom of the screen that, while moving, gives off different projectiles that "float" to the top of the screen. Use parts of example code above for inspiration to start you project.

1. Create a ``||sprites:projectile from side||`` that moves across the bottom of the screen
2. Create a new ``||sprites:projectile from sprite||`` that floats from the original bottom projectile
3. Use ``||loops:loops||`` or ``||game:on update||`` event to create more of the projectile from part 2
4. **Challenge:** as the projectiles "float" up from the bottom of the game screen, give them a small random X velocity so they move at a slight angle to the left or right

## What did we learn?

1. How can we make a sprite that came from a regular ``||sprites:sprite||`` act like a projectile sprite? Explain the block code to use.
2. Give examples of using ghost and/or on overlap events in a game to make a projectiles that are decorations, laser beams, and coins (reward). Explain each. 
3. **Challenge:** create a hypothesis on why making projectiles have ``||sprites:ghost on||`` might make your game run faster than leaving it off.

### [Teacher Material](/courses/csintro1/about/teachers)
