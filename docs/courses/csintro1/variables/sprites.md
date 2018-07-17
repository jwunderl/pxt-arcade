# Activity: Sprite

Games tell a story where the lead characters are usually represented with sprites.  This activity equips students to create, test and save sprites using the MakeCode development environment. Students will build sprites by picking each pixel using the sprite menu and the image editor.

In this activity Students are introduced to:

* Using Blocks  
* Sprites and Images  
* Using Image Editor  
* Pixels and Pixel Colors  
* Viewing JavaScript  
* Color codes in image editor, Blocks and JavaScript  

# Concept: Set a Sprite variable to an image using the image editor

https://youtu.be/xujAdjmNPgc

Sprites are created using the Sprites menu - choosing the set block  

https://makecode.com/_g3CcuWigwKR8 
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let actor: Sprite = null

actor = sprites.create(img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```

and then using the sprite editor to color pixels for a sprite design.  

## Example: Sprite

Look at the blocks and note that a name for the sprite (`actor`) is set to an image for the sprite (it's hot sauce!).

https://makecode.com/_VEXXpq9RtRfT
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let actor: Sprite = null
actor = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . 7 7 7 . . . . . . 
. . . . . . . 7 7 7 . . . . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 1 2 2 2 . . . . 
. . . . . 2 1 2 2 1 2 2 . . . . 
. . . . . 2 2 7 7 2 2 2 . . . . 
. . . . . 2 7 2 7 2 2 2 . . . . 
. . . . . 2 2 2 2 7 2 2 . . . . 
. . . . . 2 2 2 7 7 2 2 . . . . 
. . . . . 2 1 2 2 2 2 2 . . . . 
. . . . . 2 2 1 1 2 2 2 . . . . 
. . . . . 2 2 2 2 1 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
`, SpriteKind.Player)
```

## Student Task: Create your own sprite  

https://youtu.be/oupwql9r-80

* The default sprite is 16x16 pixels - **Make a sprite that is 32x32 pixels!**  

### ~hint
When using the image editor the pixel dimensions are displayed in the lower right corner. Sizes include 8x8, 16x16, 32x32, and other odd sizes.
### ~

```blocks
// :solution
/* https://makecode.com/_arj7ewLpXas6 */   

enum SpriteKind {
    Player,
    Enemy
}
let bigSprite: Sprite = null
bigSprite = sprites.create(img` 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . 2 2 1 1 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 1 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 7 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 7 7 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 7 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 7 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 7 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 7 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 7 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 7 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 1 1 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 1 1 1 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 1 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

// :end-solution
```


## Student Task: Build a "rainbow numbers" sprite that uses every color in the editor [ TODO video]

![sprite rainbow numbers image](/static/courses/csintro1/variables/rainbownumbers.png)
1. make a blank **32x32** sprite  
2. hover over every color and find color index 0 - which is the transparency color and add that color on the far left  
3. then find and add the other colors as picture of the number in order to the right using color index 1, 2, 3, 4, ..., until you have color index 15
4. look at the sprite image in JavaScript view to answer **What did we learn** questions below

### ~hint
Try Changing the background color
using ``||Scene: set background color to||``

red as 2
### ~

### ~hint
**Teacher Note**
Discussion with Students: "The image editor has 16 choices. Why can we only see 15 of the colors at a time.  Who sees only 14 colors?"

Answer: "One of the choices is transparent - which is not a color. The background color displays but the images created in the background color are not visible."
### ~  

```blocks
// :solution

/* https://makecode.com/_ipr4sK16fcvq */

enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(15)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Students will not use controller events to change
    // background but easier for Teacher demo
    scene.setBackgroundColor(1)
})
sprite = sprites.create(img`
1 . . . 2 2 2 . . . . . 3 3 3 . . . . . . 4 . . . . . . . . . . 
1 . . . . . . 2 . . . . 3 . 3 . . . . 4 . 4 . . . . 5 5 5 5 . . 
1 . . . . 2 2 2 . . . . . . 3 . . . . 4 . 4 . . . . 5 . . . . . 
1 . . . 2 . . . . . . . . 3 3 . . . . 4 4 4 . . . . 5 5 5 5 . . 
1 . . . 2 2 2 2 . . . . . . 3 . . . . . . 4 . . . . . . . 5 . . 
. . . . . . . . . . . 3 3 3 3 . . . . . . 4 . . . . . . . 5 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 5 5 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 6 6 6 6 . . . . 7 7 7 7 7 . . . . . 8 8 8 8 . . . . . . . . 
. 6 6 . . 6 . . . . . . . 7 7 . . . . . 8 . . 8 . . . . 9 9 9 . 
. 6 . . . . . . . . . . . 7 . . . . . . 8 . . 8 . . . 9 9 . 9 . 
. 6 . . . . . . . . . . . 7 . . . . . . 8 8 8 8 . . 9 9 . . 9 . 
. 6 . . . . . . . . . . 7 . . . . . . . . 8 8 8 . . 9 9 . 9 9 . 
. 6 6 6 6 6 . . . . . 7 7 . . . . . . . 8 8 . 8 . . . 9 9 9 9 . 
. 6 6 . . 6 . . . . . 7 . . . . . . . . 8 . . 8 . . . . . . 9 . 
. . 6 6 6 . . . . . . . . . . . . . . . 8 . . 8 . . . . . . 9 . 
. . . . . . . . . . . . . . . . . . . . 8 8 8 8 . . . . . . 9 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 . 
. a . . a a a a . . . . . b . . . b . . . . . . . . . . . . . . 
. a . . a . . a . . . . . b . . . b . . . . . c . c c c c . . . 
. a . a a . . a . . . . . b . . . b . . . . . c . c . . c . . . 
. a . a a a a a . . . . . b . . . b . . . . . c . . . c . . . . 
. a . . . . . . . . . . . b . . . b . . . . . c . . c . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . c . . c c c c . . 
. d . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . 
. d . . d d d . . . . . e . e . . e . . . . f . f f f f . . . . 
. d . . . d d . . . . . e . e . . e . . . . f . f . . . . . . . 
. d . . . d d . . . . . e . e e e e . . . . f . f f f f . . . . 
. d . . . . . d . . . . e . . . . e . . . . f . . . . f . . . . 
. d . . d d d d . . . . e . . . . e . . . . f . . . . f . . . . 
. . . . . . . . . . . . . . . . . e . . . . f . f f f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

// :end-Solution
```

## What did we learn?

1. Make a table showing 
     - Color (use an approximate color name like white, red, pink, ...)  
     - Color index (1-15)  
     - Color representation in JavaScript  
2. Explain what happens to the color index 0 in JavaScript (form a hypothesis)  
3. Explain why we see only 14 colors at a time although there are 16 color indexes (0-15) in the image editor?  

## Rubrics

### ~hint
Start on the left rubric column (5pts), if the work meets the rubric measurement continue to the right (7pts, 9pts, 10pts). Award the score of the right most rubric that is passed.  This means that to get the highest score, student must pass all previous rubrics.
### ~

### Sprite task rubrics [TODO - no more rainbow line]

| points | 5 | 7 | 9 | 10 |
|:---:|:---:|:---:|:---:|:---:|
| Rainbow Numbers | 16 "colors" represented in rainbow number |Completed Color Table maps the color name to both the editor index and the JavaScript number/letter  |  *Explain answers* are clearly expressed | The *Explain answers* are expressed in a unique and/or interesting way or the **Challenge was completed**. |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric [TODO review based on number of questions]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 
