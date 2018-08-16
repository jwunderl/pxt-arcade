## Activity: Arrays of Sprites

In previous lessons, we have used arrays of fairly simple types of variables - numbers and strings. As mentioned in those lessons, though, arrays can be used with any variable you would like, including sprites.

In this activity, we will walk through a few ways in which we can use arrays of sprites to to create unique behaviors for the characters in our games, as well as introduce the basics of artifial intelligence for non-player characters.

In this activity, students will:
### TODO

## Concept: Creating Sprite Arrays

Creating arrays of sprites is effectively the same as creating arrays of numbers or strings; this is done by creating a new array of numbers, and then replacing all of the numbers within the array with sprites.

![creating an array of sprites](/static/courses/csintro1/arrays/create-sprite-array.gif)

This can be very useful when implementing the same behavior for multiple sprites at once.

## Example #1: Moving all Asteroids

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Sprite Arrays") 

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Asteroid
}
let my_sprite_array: Sprite[] = []
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of my_sprite_array) {
        value.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    }
})
my_sprite_array = [sprites.create(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, SpriteKind.Asteroid), sprites.create(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, SpriteKind.Asteroid), sprites.create(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, SpriteKind.Asteroid)]
```

## Student Task #1: Moving a random asteroid

1. Start with the code from example #1
2. Instead of moving every asteroid, use ``||math:random item from||`` to select a random asteroid from ``||variables:my sprite array||`` and move only that asteroid when the ``||controller:A||`` button is pressed
3. **Challenge:** choose another random asteroid, and have it ``||sprites:say||`` "woosh" for 300 ms. Are the two randomly chosen asteroids the same? (Can they be the same?)

## Concept: Arrays from functions

Building arrays by adding in values is useful on it's own, but arrays can be even more useful when they are returned by functions. This allows for the return of multiple related values at once.

The ``||sprites:array of sprites of kind||`` block (located in the ``||array:arrays||`` category) is one example of a function like this - it will return an array with all of the sprites currently in the game with the given ``||sprites:kind||``. This makes it easier to implement behaviors like those in example #1, especially as more sprites are created and destroyed.

## Example #2: Using ``||sprites:array of sprites of kind||``

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Sprite of Kind Arrays") 

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Asteroid
}
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Asteroid)) {
        value.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    }
})
for (let i = 0; i < 10; i++) {
    mySprite = sprites.create(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, SpriteKind.Asteroid)
}
```

## Student Task #2

```blocks
enum SpriteKind {
    Player,
    Enemy,
    WindMill,
    Fan
}
let curve: Image = null
let fan: Sprite = null
let curr: Sprite[] = []
let straight: Image = null
sprites.onCreated(SpriteKind.WindMill, function (sprite) {
    fan = sprites.create(straight, SpriteKind.Fan)
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    sprite.setImage(img`
. . . . . e e e e . . . . . . . 
. . . . e e e e e . . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . e e f f e e . . . . . . 
. . . . e e e f f e e . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e . . . . . 
. . . e e f e e e e e e . . . . 
. . . e e f e e e f e e . . . . 
. . . e e f e e e e e e e . . . 
. . . e e f e e e e e e e . . . 
. . e e e f e e e e f e e e . . 
. . e e e f e e e e f e e e . . 
. . e e e e e e e e f e e e e . 
. e e e e e e e e e e e e e e . 
`)
    fan.z = 1
    sprite.z = 0
    fan.setPosition(sprite.x, sprite.y - sprite.height / 2)
})
straight = img`
. . . . . . . . . . . . . . . . 
. . . . . . . e 1 1 . . . . . . 
. . . . . . . e f 1 . . . . . . 
. . . . . . . e 1 1 . . . . . . 
. . . . . . . e f 1 . . . . . . 
. 1 1 1 1 1 . e 1 1 . . . . . . 
. 1 f 1 f 1 . e . . . . . . . . 
. e e e e e e e e e e e e e . . 
. . . . . . . e . 1 f 1 f 1 . . 
. . . . . 1 1 e . 1 1 1 1 1 . . 
. . . . . 1 f e . . . . . . . . 
. . . . . 1 1 e . . . . . . . . 
. . . . . 1 f e . . . . . . . . 
. . . . . 1 1 e . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
curve = img`
. 1 1 . . . . . . . . . . . . . 
. e f 1 . . . . . . . . . e 1 . 
. . e 1 1 . . . . . . . e f 1 . 
. . . e f 1 . . . . . e 1 1 . . 
. . . . e 1 1 . . . e f 1 . . . 
. . . . . e . . . e 1 1 . . . . 
. . . . . . e . e . 1 . . . . . 
. . . . . . . e . . . . . . . . 
. . . . 1 . e . e . . . . . . . 
. . . 1 1 e . . . e . . . . . . 
. . 1 f e . . . 1 1 e . . . . . 
. 1 1 e . . . . . 1 f e . . . . 
1 f e . . . . . . . 1 1 e . . . 
1 e . . . . . . . . . 1 f e . . 
. . . . . . . . . . . . 1 1 . . 
. . . . . . . . . . . . . . . . 
`
sprites.createEmptySprite(SpriteKind.WindMill)
sprites.createEmptySprite(SpriteKind.WindMill)
sprites.createEmptySprite(SpriteKind.WindMill)
sprites.createEmptySprite(SpriteKind.WindMill)
forever(function () {
    curr = sprites.allOfKind(SpriteKind.Fan)
    for (let value of curr) {
        value.setImage(curve)
    }
    pause(150)
    for (let value2 of curr) {
        value2.setImage(straight)
    }
    pause(150)
})
```


### TODO refactor to be easier to understand for blocks (change if (origin) to wrap the entire thing, store sprites.allOfKind(SpriteKind.firework), and check size before pick random))

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Firework
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    let origin: Sprite = Math.pickRandom(sprites.allOfKind(SpriteKind.Firework))
    if (origin) {
        for (let i = 0; i < 30; i++) {
            let projectile: Sprite = sprites.createProjectile(img`1`, Math.randomRange(-100, 100), Math.randomRange(-100, 100), SpriteKind.Player, origin)
            projectile.setFlag(SpriteFlag.Ghost, true)
            projectile.image.fill(Math.randomRange(1, 14))
        }
        origin.destroy()
    }
})

for (let i = 0; i < 100; i++) {
    let firework: Sprite = sprites.create(img`
        1 1 1
        1 2 1
        1 1 1
        `, SpriteKind.Firework)
    firework.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    firework.setFlag(SpriteFlag.Ghost, true)
}
```

### TODO: make as clear as possible in blocks, replace ternary

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let enemy: Sprite = null
let player: Sprite = null
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.x += Math.randomRange(-2, 2)
    otherSprite.y += Math.randomRange(-2, 2)
})
player = sprites.create(img`
1 . . . 1 
1 . . . 1 
. . . . . 
. . . . . 
1 . . . 1 
. 1 1 1 . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
for (let i = 0; i < 20; i++) {
    enemy = sprites.create(img`
2 . . 2 
. . . . 
. 2 2 . 
2 . . 2 
`, SpriteKind.Enemy)
    enemy.x += Math.randomRange(-40, 40)
    enemy.y += Math.randomRange(-40, 40)
}
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.x += player.x > value.x ? .25 : -.25
        value.y += player.y > value.y ? .25 : -.25
    }
})

```