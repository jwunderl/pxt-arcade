enum SpriteKind {
    Player,
    Enemy
}
scene.setBackgroundColor(1)
let dirImages: Image[] = [img`
. . 2 . .
. f f f .
. f f f .
. f f f .
. . . . .
`,
img`
2 . . . .
. f f f .
. f f f .
. f f f .
. . . . .
`,
img`
. . . . .
. f f f .
2 f f f .
. f f f .
. . . . .
`,
img`
. . . . .
. f f f .
. f f f .
. f f f .
2 . . . .
`,
img`
. . . . .
. f f f .
. f f f .
. f f f .
. . 2 . .
`,
img`
. . . . .
. f f f .
. f f f .
. f f f .
. . . . 2
`,
img`
. . . . .
. f f f .
. f f f 2
. f f f .
. . . . .
`,
img`
. . . . 2
. f f f .
. f f f .
. f f f .
. . . . .
`]

let dir: number = 0;
let agent: Sprite = sprites.create(dirImages[dir], SpriteKind.Player)

game.onUpdateInterval(250, function () {
    dir = (dir + 1) % dirImages.length
    agent.setImage(dirImages[dir])
})