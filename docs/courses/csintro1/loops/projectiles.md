# Activity: Projectile Sprites

Projectiles are regular sprites that destroy themselves when they go off of the visible screen. Projectile sprite blocks also expose the properties for velocity (``||sprites:vx||`` & ``||sprites:vy||``) right as they are created, to allow software developers to simplify the code they write.

Depending on the game, a projectile can be dangerous, friendly, or even just a decoration that floats across the screen. In our code, we will use projectiles to represent temporary sprites that move across the screen. Typically, projectiles will be used because we want movement for meteors, laser beams, cars, or whatever we decide we need in our games. In many games, we will create a large number of these, so ability for them to be automatically destroyed as they leave the screen will often be very helpful in making sure our games run efficiently.

In this activity, the student will be introduced to:
* ``||sprites:projectile||`` sprites
* ``||game:on game update every||``
* ``||math:pick random||``

## Concept: Flying Birds!

We can use projectiles to create sprites that move across the screen. Let's start off with making a simple bird projectile.

## Example #1: Bird projectile
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Bird Projectile 1") 
4. Look for what portion of the blocks makes the bird move across the screen, instead of just staying still

```blocks  
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . 8 8 . . 
. . . . . 8 8 8 8 8 . 8 8 8 . . 
. . . . . 8 8 f 8 8 8 8 8 f 8 . 
. . . . . 8 8 8 f f 8 8 8 8 4 4 
. . . . . . 8 8 8 f 8 8 8 8 8 . 
. . . . . . . 8 8 8 8 3 3 3 . . 
. . . . . . 8 8 8 8 8 3 3 3 . . 
. . . . . . 8 8 8 8 8 3 3 . . . 
. . . . . . . 8 f . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0, SpriteKind.Player)
```

It may seem surprising that there's only a single block inside the ``||loops:on start||`` block - projectiles make it particularly easy to create temporary sprites, by including a lot of common behaviors in one. They have another benefit that code example below will demonstrate.

```blocks  
enum SpriteKind {
    Player,
    Enemy
}
let item: Sprite = null
let projectile: Sprite = null
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    info.changeScoreBy(1)
})
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . 8 8 . . 
. . . . . 8 8 8 8 8 . 8 8 8 . . 
. . . . . 8 8 f 8 8 8 8 8 f 8 . 
. . . . . 8 8 8 f f 8 8 8 8 4 4 
. . . . . . 8 8 8 f 8 8 8 8 8 . 
. . . . . . . 8 8 8 8 3 3 3 . . 
. . . . . . 8 8 8 8 8 3 3 3 . . 
. . . . . . 8 8 8 8 8 3 3 . . . 
. . . . . . . 8 f . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0, SpriteKind.Player, item)
```

This modified version adds in an event that triggers when the projectile is destroyed - you should see that when the sprite goes off the screen, it is actually automatically destroyed! This is available for all sprites using the ``||sprite:set sprite auto destroy on||`` flag, but projectiles have it added in for you automatically. Finally, we'll see later on that projectiles can be created to originate from another sprite (for example, we could set the bird from this example to start off at a nest somewhere else on the screen). If they are not provided a sprite to start from, they will be created either in the middle of the screen (if the velocities in the x and y direction are both set to 0) or from the side of the screen opposite their initial speed (so that they can move across the screen).

## Student Task #1: Make a ball fall down
1. Start with the provided code below
2. Modify the code so that the ball falls down the screen at a rate of 50 (that is, it moves along the y axis at a rate of 50)
3. Create a second projectile that goes up the screen at a rate of 50 (moving in the direction opposite the ball)
4. **Challenge:** Make something happen when the two projectiles overlap one another as learned previously - perhaps have them ``||sprite:say||`` hello to each other

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let item: Sprite = null
let projectile: Sprite = null
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    info.changeScoreBy(1)
})
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 8 9 9 9 8 9 8 . . . . 
. . 8 9 9 8 9 8 9 8 9 9 8 . . . 
. . . 8 9 8 9 9 9 8 9 8 . . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 0, SpriteKind.Player, item)
```

# TODO: Create Video covering projectile motion with loops (task 2)

## Student Task #2: add vertical projectiles that move across the screen
1. Start with the provided code below. Currently, it will spawn meteors of ``||sprites:Kind||`` ``||sprites:Enemy||`` that stay in random locations along the top of the screen
2. Each time a projectile is created, add one to the score using the ``||info:change score by||`` block
3. Modify the ``||sprite:create projectile||`` block so that each spawned meteor moves down the screen at a rate of 50
4. **Challenge:** Make the projectile move at a random rate between 40 and 60 as we have previously learned, instead of the current constant rate of 50

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let item: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (playerSprite, foodSprite) {
    game.over()
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.y = 100
game.onUpdate(function () {
    mySprite.x += controller.dx()
})
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectile(img`
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
`, 0, 0, SpriteKind.Enemy, item)
    projectile.x = Math.randomRange(0, scene.screenWidth())
})
```

## Projectiles as sprites
Projectiles are just sprites with a bit of extra behavior by default; this means that you can do anything with them that you can do with sprites. You can change their speed, the image they show, and how they interact with other sprites. 

You can even use the projectiles you have made as the source of other projectiles! For example, we can start with the following cloud moving across the screen:

```blocks
enum SpriteKind {
    Cloud
}
let item: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
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
`, 10, 0, SpriteKind.Cloud, item)
```

There isn't all that much to this code; it spawns a cloud, which slowly moves across the screen. However, what if we want to make the cloud rain? We can do this by adding projectiles that are emitted from the cloud itself!

```blocks
enum SpriteKind {
    Cloud,
    Rain
}
let item: Sprite = null
let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
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
`, 10, 0, SpriteKind.Cloud, item)
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectile(img`
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
`, 0, 30, SpriteKind.Rain, cloud)
    raindrop.setFlag(SpriteFlag.Ghost, true)
})
```

Be sure to notice that in the above example, we set the raindrops to be ``||sprites:ghosts||`` - this means that they won't be considered to overlap with other sprites, and will pass through sprites as if there were no overlap events. It turns out that there is a fairly significant performance benefit to doing this when you spawn a large amount of projectiles (and don't need them to overlap with other sprites) - try removing that block, and see how much the performance goes down.

We can change where the rain drops show up, so that they don't all appear in the same location relative to the cloud:

```blocks
// https://makecode.com/_MtUYHyHiwdmy

enum SpriteKind {
    Cloud,
    Rain
}
let item: Sprite = null
let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
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
`, 10, 0, SpriteKind.Cloud, item)
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectile(img`
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
`, 0, 30, SpriteKind.Rain, cloud)
    raindrop.setFlag(SpriteFlag.Ghost, true)
    raindrop.y += 3
    raindrop.x += Math.randomRange(1, 14)
})
```

And we can even count the raindrops that make it to the bottom of the screen by counting when they're destroyed!

```blocks
// https://makecode.com/_5Wb33FiqaJeu
enum SpriteKind {
    Cloud,
    Rain
}
let item: Sprite = null
let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
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
`, 10, 0, SpriteKind.Cloud, item)
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectile(img`
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
`, 0, 30, SpriteKind.Rain, cloud)
    raindrop.setFlag(SpriteFlag.Ghost, true)
    raindrop.y += 3
    raindrop.x += Math.randomRange(1, 14)
})

sprites.onDestroyed(SpriteKind.Rain, function (sprite: Sprite) {
    info.changeScoreBy(1)
})

sprites.onDestroyed(SpriteKind.Cloud, function (sprite: Sprite) {
    game.over(true)
})
```

## Student Task #3: Projectiles with loops
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "screen fill")
4. Surround the code in the ``||loops:on start||`` block with a ``||loops:for index from 0 to 12||`` block, to create 13 projectiles, one every 300 ms
5. Modify the ``||sprites:set projectile y to||`` block to set the projectiles ``||sprites:y||`` position to the value `10 * index`, so that they start further down the screen on each iteration

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 6 6 6 6 6 6 6 6 . . . . . . . 
. 6 8 8 8 8 8 8 8 6 . . . . . . 
. 6 8 6 6 6 6 6 6 8 6 . . . . . 
. 6 8 6 6 6 6 6 6 6 8 6 . . . . 
. 6 8 6 6 6 6 6 6 8 6 . . . . . 
. 6 8 8 8 8 8 8 8 6 . . . . . . 
. 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 40, 0, SpriteKind.Player)
projectile.y = 10
pause(300)
```

## Student Task #4: Water balloons
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "water balloon")
4. Currently, when the balloon collides with the block, it creates only a single drop of a splash. Use a loop in the overlap event between sprites of kind Balloon and sprites of kind Enemy to create 50 drops of kind ``||sprites:Splash||`` instead

### ~hint

In total, this loop should include 4 blocks - the generation of a random xDirection and yDirection, the creation of the projectile, and the block that sets the projectiles ghost flag to be on.

### ~

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Balloon,
    Splash
}
let projectile: Sprite = null
let yDirection = 0
let xDirection = 0
let balloon: Sprite = null
let block: Sprite = null
sprites.onOverlap(SpriteKind.Balloon, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)

    // pick a random speed between -50 and 50 for the splash to go in both directions
    xDirection = Math.randomRange(0, 100) - 50
    yDirection = Math.randomRange(0, 100) - 50
    // create the splash
    projectile = sprites.createProjectile(img`
9
`, xDirection, yDirection, SpriteKind.Splash, sprite)
    // make the splash a ghost, so that it doesn't interact with other sprites
    projectile.setFlag(SpriteFlag.Ghost, true)

    // destroy the balloon
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.vx = 40
    balloon.vy = -50
    balloon.ay = 40
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.destroy()
    balloon = sprites.create(img`
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . 8 9 8 8 9 9 8 9 8 . . . . 
. . 8 9 9 8 8 8 9 8 9 9 8 . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
`, SpriteKind.Balloon)
    balloon.x += -50
})
scene.setBackgroundColor(6)
block = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 1 2 2 1 1 2 2 2 1 2 1 1 2 1 f 
f 1 2 1 2 1 2 1 2 1 2 2 1 2 1 f 
f 1 2 1 2 1 2 2 2 1 2 1 2 2 1 f 
f 1 2 2 1 1 2 1 2 1 2 1 1 2 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 2 2 2 1 2 2 2 1 2 2 2 1 1 f 
f 1 2 1 1 1 2 1 1 1 2 1 2 1 1 f 
f 1 2 1 2 1 2 2 1 1 2 2 2 1 1 f 
f 1 2 2 2 1 2 2 2 1 2 1 1 2 1 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
block.x += 50
balloon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . 8 9 8 8 9 9 8 9 8 . . . . 
. . 8 9 9 8 8 8 9 8 9 9 8 . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Balloon)
balloon.x += -50
```

## What did we learn?

1. Describe two benefits of using projectiles rather than normal sprites.  
2. How did using a loop in this section help reduce the amount of blocks that were used?
3. Why does making a sprite have a random velocity in both the x and y directions cause the sprite to move in a random direction? How would limiting the projectile to only positive directions change this?
4. **Challenge:** Create a hypothesis on why making projectiles have ``||sprite:ghost on||`` might make your game run faster than leaving it off.
### ~hint

Does the game need to check whether a sprite is overlapping another if either is a ghost?

### ~