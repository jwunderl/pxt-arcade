enum SpriteKind {
    Player,
    Basketball,
    Hoop,
    Ray
}
let angle: number = 20;
let pow: number = 25;
const iter: number = 40

let player: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 . . 7 . 7 . 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 . 7 7 7 7 . 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player);
let basketball: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . f 4 4 4 f . . . . . . 
. . . . 4 4 f 4 f 4 4 . . . . . 
. . . f f f f f f f f f . . . . 
. . . . 4 4 f 4 f 4 4 . . . . . 
. . . . . f 4 4 4 f . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Basketball);
let hoop: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . c c c . . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . . . c c c c . . . 
. . . . . c c c c c c c c . . . 
. . c c c c . . . . c c c . . . 
. . c . . . . . . . c c c . . . 
. c c . . . . . . c c c c . . . 
. . c . . . c c c c c c . . . . 
. . c c c c c . . . . c . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Hoop);
let bkgd: Image = scene.backgroundImage();
player.x -= 50;
player.y += 30;
basketball.x = player.x + 5;
basketball.y = player.y - 5;
hoop.x += 50;
hoop.y -= 25;

controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    angle -= controller.dy();
    pow += controller.dx();
})

game.onUpdateInterval(50, function () {
    bkgd.fill(15);
    let ray: Sprite = sprites.create(img`.`, SpriteKind.Ray);
    ray.x = basketball.x
    ray.y = basketball.y
    for (let i: number = 0; i < iter; i++) {
        ray.x += i * pow / 100;
        ray.y -= (i * angle - (i * i * angle) / 15 ) / 50
        bkgd.setPixel(ray.x, ray.y, 1);
    }
})
