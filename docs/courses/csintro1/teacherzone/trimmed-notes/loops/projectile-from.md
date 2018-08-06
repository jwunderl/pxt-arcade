# Activity: Projectiles from Sprites

In this activity, students will use:
* ``||sprites:projectile - from sprite||`` sprites
* ``||sprite:on sprite destroyed||``
* ``||math:pick random||``
* ``||sprites:ghost on||``

## Concept: Projectile From Sprite


### Example #1: Throw ball 

[Throw ball](https://makecode.com/_hcy4AV871ix1)

## Student Task #1: Throw a ball at a target

### Solution: [Throw ball at target](https://makecode.com/_dF76zsDPsgbe)

### Solution Challenge : [Throw ball at projectile targets](https://makecode.com/_T5rX5k8ACVJw)

## Concept: Projectiles from other Projectile Sprites

## Example #2a: Cloud projectile 

Start with the following cloud moving across the screen: https://makecode.com/_UfeX3VY6CfgD

## Example #2b: Cloud projectile that emits projectile rain 

https://makecode.com/_Es5HF0VEuCiL

## Example #2c: Cloud projectile that widely emits projectile rain

We can change where the rain drops show up, so that they don't all appear in the same location relative to the cloud by applying a random value to the raindrop X value.  

```block
let raindrop: Sprite = null
raindrop.x += Math.randomRange(1, 14)
```

https://makecode.com/_CvEVPuh35bbj


## Example #2d: count destroyed raindrops

The ghost raindrop sprites can't have an overlap event but we can use ``||sprite:on sprite destroyed||``. So we can count the raindrops that make it to the bottom of the screen by counting when they're destroyed!

```block
enum SpriteKind {
    Cloud,
    Rain
}
let raindrop: Sprite = null
sprites.onDestroyed(SpriteKind.Rain, function (sprite: Sprite) {
    info.changeScoreBy(1)
})
```

https://makecode.com/_HhcT57KDxR9s


## Student Task #2: Projectile from Projectile

### ~hint

Use a loop and if creating many projectiles use ``||sprite:ghost on||``

### ~

### Solution: 
https://makecode.com/_UAiartd0gHsL

### Challenge Solution: 
https://makecode.com/_C8Famb42tfmd

## What did we learn?

1. How can we make a sprite that came from a sprite block act like a projectile sprite? Explain the block code to use.
2. Give examples of using ghost and/or on overlap events in a game to make a projectile: decoration, laser beam, coin (reward).  Explain each.  
3. **Challenge:** Create a hypothesis on why making projectiles have ``||sprite:ghost on||`` might make your game run faster than leaving it off.

### ~hint

Can there be overlapping another if either sprite is a ghost?

### ~

### ~hint

### Possible Answers

1. To make a sprite act like a projectile sprite: Sprites can start on the edge of a screen like x=0, have a velocity away from the edge of the screen vx=20, we can destroy the sprite.
2. a decoration like a bubble or rain is ghost on so no overlap events.  A laser beam would use a on overlap event and destroy the object it overlapped with.  A coin would have an overlap event and would give a score when it overlaps with the player.
3. Challenge: Sprites use computer resources (memory, processing)- if there are a lot of them they use a lot of resources.  Ghost On uses less resources since not having to check if it overlapping.

### ~