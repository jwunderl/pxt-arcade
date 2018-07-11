enum SpriteKind {
    Player,
    Enemy,
    Laser
}
let agent: Sprite = null
let dirImages: Image[] = []
let dir = 0
let speed = 20

scene.setBackgroundColor(1)
dirImages = [img`
. . 2 . . 
. f f f . 
. f f f . 
. f f f . 
. . . . . 
`, img`
2 . . . . 
. f f f . 
. f f f . 
. f f f . 
. . . . . 
`, img`
. . . . . 
. f f f . 
2 f f f . 
. f f f . 
. . . . . 
`, img`
. . . . . 
. f f f . 
. f f f . 
. f f f . 
2 . . . . 
`, img`
. . . . . 
. f f f . 
. f f f . 
. f f f . 
. . 2 . . 
`, img`
. . . . . 
. f f f . 
. f f f . 
. f f f . 
. . . . 2 
`, img`
. . . . . 
. f f f . 
. f f f 2 
. f f f . 
. . . . . 
`, img`
. . . . 2 
. f f f . 
. f f f . 
. f f f . 
. . . . . 
`]
agent = sprites.create(dirImages[dir], SpriteKind.Player)
game.onUpdate(function () {
    dir += -controller.dx()
    maintainAngle()
    if (controller.up.isPressed()) {
        agent.vx = speed * getXComponent()
        agent.vy = speed * getYComponent()
    } else if (controller.down.isPressed()) {
        agent.vx = -speed * getXComponent()
        agent.vy = -speed * getYComponent()
    } else {
        agent.vx = 0
        agent.vy = 0
    }
    let index = Math.round(dir * dirImages.length / 360)
    agent.setImage(dirImages[index])
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectile(img`8`, getXComponent() * speed * 2, getYComponent() * speed * 2, SpriteKind.Laser, agent)
})

function maintainAngle() {
    dir = dir % 360;
    if (dir < 0) dir += 360;
}

function getYComponent() {
    return -Math.cos(dir * Math.PI / 180)
}

function getXComponent() {
    return -Math.sin(dir * Math.PI / 180)
}