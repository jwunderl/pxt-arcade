// https://makecode.com/_XAvAygD5oFqP alien dropper:
// must have Corgi_extension either imported or made as custom block

enum SpriteKind {
    Player,
    Enemy,
    Arrow
}
let alien: Sprite = null
let dir = 0
let projectile: Sprite = null
let count = 0
sprites.onOverlap(SpriteKind.Player, SpriteKind.Arrow, function (sprite, otherSprite) {
    game.over()
})
info.setScore(0)
scene.setBackgroundColor(11)
alien = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 2 2 f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 7 7 7 7 7 7 f . . . . 
. . . f 7 7 7 f f 7 7 7 f . . . 
. . . . f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
alien.setPosition(10, 4)
alien.vx = 20
count = Math.sqrt(info.score()) * 3 + 20
dir = 1
game.onUpdate(function () {
    count = Math.sqrt(info.score()) * 3 + 20
    if (alien.x <= 6) {
        dir = 1
    } else if (alien.x >= screen.width - 6) {
        dir = -1
    }
    alien.vx = dir * count
    corgi.horizontalMovement()
    corgi.verticalMovement(
    )
    corgi.boundCheck()
    corgi.updateSprite()
})
game.onUpdateInterval(50, function () {
    if (Math.percentChance(8)) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . a a a a a a a . . . . . 
. . . a d d e a e d d a . . . . 
. . . . a e d a d e a . . . . . 
. . . . . a d a d a . . . . . . 
. . . . . . a a a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, count + Math.randomRange(0, 15), SpriteKind.Arrow, alien)
    }
    info.changeScoreBy(1)
})
