# Activity: Level Design and the Corgio Extension

The design of the area the player is in can make or break a game: if it is too sparse, the game can become boring and uninteresting, whereas if it is overly filled in, the game can screech to an unbearable halt. In this activity, students will use an extension designed to make the development of 'platformer' style games easy, so that they are able to focus on the design and structure of their own levels without getting bogged down in make the gameplay fun.

In this activity, students will:
* Use a new extension
* Design their own levels using a ``||scene:tilemap||``
* Implement a platformer game

## Using the corgio package

To simplify the design process of the game, we will be using the corgio extension. This extension allows you to create a sprite who can jump, run, and fall with only a few blocks in the ``||loops:on start||``; many of these behaviors will continue to run in the background without further input.

To add the corgio extension to your project, open the extensions tab and search for "corgio" - it should be the first result. Alternatively, you can search using a direct link to the package, as follows: [github.com/jwunderl/pxt-corgio](github.com/jwunderl/pxt-corgio).

### TODO: gif of adding corgio

After adding corgio to your project, a new tab titled ``||corgio:Corgi||`` will appear in the top of the toolbox, above ``||game:Game||``; this contains the blocks necessary to create and interact with the Corgi.

## Student Task #1: Making your first corgio

1. Open a new project, and import the corgio extension (name the project "myPlatformer")
2. Create your first Corgi; to do this, add the ``||variables:set myCorg to||`` block in the ``||corgio:Create||`` category to ``||loops:on start||`` block. If you press the **+** button on the corgi block, you can also set the initial location for the corgi to be created
3. Add the ``||corgio:make myCorg move left and right with arrow keys||`` block from the ``||corgio:Movement||`` category, as well as the ``||corgio:change image when myCorg is moving||``. Try adding one without the other; what changes?
4. Finally, add the ``||corgio:make myCorg jump if up arrow key is pressed||`` block; try pressing the ``||controller:up||`` button multiple times before you hit the ground, or jumping away from a wall that you are currently touching
5. **Challenge:** use the blocks in the ``||corgio:Speak||`` category to teach the corgio to say "hello", "goodbye", "jump", and "sit"; make the corgi ``||corgio:bark||`` when the user presses the ``||controller:A||`` button. Did it know any words before you taught it those four?

## Example #1: Corgi with tilemap

1. Open a new project (name it "myLevel")
2. Using the extensions menu, search for jwunderl/pxt-corgi. ### TODO change this if darts gets approved to just search by package name
3. Review the example code below, and either recreate it or build something similar
4. Notice how the corgi rests on top of the the wall tiles, and that the jumps reset as if the corgi were touching the bottom of the screen

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = corgi.create(SpriteKind.Player);
scene.setTileMap(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
f f f f f f f f f f f f f f f f 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
f f f f f f f f f f f f f f f f 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f f f f f f f f f f f f f f f 
`, true)
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.verticalMovement()
```

## Student Task #2: Creating a side scroller

1. Start with the code from example #1
2. Add the ``||corgi:make camera follow myCorg left and right||`` block, so that the camera will follow the corgi while it moves across the tilemap
3. Open the tile map in the image editor, and add a red wall that is 3 tiles tall in the middle of the map. Make sure to set that tile to have a sprite and to be a wall
