## Concept: Projectiles as sprites

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

Notice that in the above example, we set the raindrops to be ``||sprites:ghosts||`` - this means that they won't be detected in overlap with other sprites, and will pass through sprites as if there were no overlap events. It turns out that there is a fairly significant performance benefit to doing this when you spawn a large amount of projectiles (and don't need them to overlap with other sprites) - try removing the ``||sprites:ghosts||`` block, and see how much the performance goes down.

We can change where the rain drops show up, so that they don't all appear in the same location relative to the cloud:

https://makecode.com/_MtUYHyHiwdmy

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
    raindrop.y += 3
    raindrop.x += Math.randomRange(1, 14)
})
```

And we can even count the raindrops that make it to the bottom of the screen by counting when they're destroyed!

https://makecode.com/_5Wb33FiqaJeu

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

1. 
2. 
3. **Challenge:** Create a hypothesis on why making projectiles have ``||sprite:ghost on||`` might make your game run faster than leaving it off.