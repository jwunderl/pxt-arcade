Introduce pick random from list
making string arrays

(Make a task based off making this)
provided:
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let text_list: string[] = []
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say(Math.pickRandom(text_list), 500)
})
text_list = ["boo", "hello", "wow!", "1234", "arcade", ""]
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 3 3 . 3 . . 3 . 3 3 3 . . . . 
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

basic answer:
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let text_list: string[] = []
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    text_list.push(game.askForString("Add a word!"))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say(Math.pickRandom(text_list), 500)
})
text_list = []
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 3 3 . 3 . . 3 . 3 3 3 . . . . 
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
challenge: make it do this

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let text_list: string[] = []
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    text_list.push(game.askForString("Add a word!"))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (text_list.length > 2) {
        mySprite.say(Math.pickRandom(text_list) + Math.pickRandom(text_list), 500)
    } else {
        mySprite.say(Math.pickRandom(text_list), 500)
    }
})
text_list = []
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 3 3 . 3 . . 3 . 3 3 3 . . . . 
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
(maybe corgi 'script' / 'bark' if need filler)