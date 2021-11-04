namespace SpriteKind {
    export const Weapon = SpriteKind.create()
    export const House = SpriteKind.create()
    export const Place = SpriteKind.create()
    export const Person = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Place, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`level2`)
    Person = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Person)
    Person.sayText("Please Help Link. Zelda has been traped by Amongus sus you need to go help her")
    tiles.placeOnRandomTile(Link, sprites.dungeon.doorOpenSouth)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Link.setImage(img`
        . 6 . . . . . . . . . . . . . . 
        8 f 6 . . . f f f f . . . . . . 
        6 f 8 . . f 7 7 7 7 f . . . . . 
        8 f 6 . f 7 7 7 7 7 7 f . . . . 
        6 f 8 f 7 7 7 7 7 7 7 7 f . . . 
        8 f 6 f e e e e e e e e f . . . 
        6 f 8 f 5 5 5 5 5 5 5 5 f f . . 
        8 f 6 5 f b f 4 4 f b f 5 f f . 
        6 f 8 5 4 1 f 4 4 f 1 4 5 5 f . 
        f a f 5 5 4 4 4 4 4 4 5 5 f . . 
        f 8 f 5 5 5 7 7 7 7 5 5 f . . . 
        . f 7 7 f 7 7 e e 7 7 f 7 7 . . 
        . f 7 7 f e e 7 7 e e f 7 7 . . 
        . f 4 4 f 7 7 e e 7 7 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    Sword.destroy()
    pause(500)
    Link.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f e e e e e e e e f . . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . f f 5 f b f 4 4 f b f 5 f f . 
        . f 5 5 4 1 f 4 4 f 1 4 5 5 f . 
        . . f 5 5 4 4 4 4 4 4 5 5 f . . 
        . . . f 5 5 7 7 7 7 5 5 f . . . 
        . . 7 7 f 7 7 e e 7 7 f 7 7 . . 
        . . 7 7 f e e 7 7 e e f 7 7 . . 
        . . 4 4 f 7 7 e e 7 7 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    Sword = sprites.create(img`
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . f 9 8 f 
        . . . . . . . . . . . f 9 8 9 f 
        . . . . . . . . . . f 9 8 9 f . 
        . . . . . . . . . f 9 8 9 f . . 
        . . . . . . . . f 9 8 9 f . . . 
        . . 8 8 . . . f 9 8 9 f . . . . 
        . . 8 6 8 . f 9 8 9 f . . . . . 
        . . 8 6 6 8 9 8 9 f . . . . . . 
        . . 8 8 6 8 5 9 f . . . . . . . 
        . . . . 8 6 8 8 . . . . . . . . 
        . . . 8 6 8 6 6 8 . . . . . . . 
        . . 8 6 8 . 8 6 6 8 . . . . . . 
        . 8 6 8 . . 8 8 8 8 . . . . . . 
        8 6 8 . . . . . . . . . . . . . 
        8 8 . . . . . . . . . . . . . . 
        `, SpriteKind.Weapon)
    Link.destroy()
    x = Link.x
    y = Link.y
    Link = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f e e e e e e e e f . . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . f f 5 f b f 4 4 f b f 5 f f . 
        . f 5 5 4 1 f 4 4 f 1 4 5 5 f . 
        . . f 5 5 4 4 4 4 4 4 5 5 f . . 
        . . . f 5 5 7 7 7 7 5 5 f . . . 
        . . 7 7 f 7 7 e e 7 7 f 7 7 . . 
        . . 7 7 f e e 7 7 e e f 7 7 . . 
        . . 4 4 f 7 7 e e 7 7 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    Link.setPosition(x, y)
    controller.moveSprite(Link)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(Link, sprites.builtin.forestTiles0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(Link, sprites.dungeon.collectibleInsignia)
    myEnemy = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(randint(20, 14), randint(20, 14))
    tiles.placeOnRandomTile(myEnemy, sprites.dungeon.greenOuterNorth2)
})
let myEnemy: Sprite = null
let y = 0
let x = 0
let Person: Sprite = null
let Link: Sprite = null
let Sword: Sprite = null
tiles.setTilemap(tilemap`level1`)
info.setLife(3)
Sword = sprites.create(img`
    . . . . . . . . . . . . . f f f 
    . . . . . . . . . . . . f 9 8 f 
    . . . . . . . . . . . f 9 8 9 f 
    . . . . . . . . . . f 9 8 9 f . 
    . . . . . . . . . f 9 8 9 f . . 
    . . . . . . . . f 9 8 9 f . . . 
    . . 8 8 . . . f 9 8 9 f . . . . 
    . . 8 6 8 . f 9 8 9 f . . . . . 
    . . 8 6 6 8 9 8 9 f . . . . . . 
    . . 8 8 6 8 5 9 f . . . . . . . 
    . . . . 8 6 8 8 . . . . . . . . 
    . . . 8 6 8 6 6 8 . . . . . . . 
    . . 8 6 8 . 8 6 6 8 . . . . . . 
    . 8 6 8 . . 8 8 8 8 . . . . . . 
    8 6 8 . . . . . . . . . . . . . 
    8 8 . . . . . . . . . . . . . . 
    `, SpriteKind.Weapon)
let Bow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e 1 . . . . . . . . . 
    . . . . . e . 1 . . . . . . . . 
    . . . . . e . . 1 . . . . . . . 
    . . . . . e . . . 1 . . . . . . 
    . . . . . e . . . . 1 . . . . . 
    . . . . . e . . . . 1 . . . . . 
    . . . . . e . . . . 1 . . . . . 
    . . . . . e . . . . 1 . . . . . 
    . . . . . e . . . 1 . . . . . . 
    . . . . . e . . 1 . . . . . . . 
    . . . . . e . 1 . . . . . . . . 
    . . . . . e 1 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Weapon)
Link = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 7 7 7 7 f . . . . . 
    . . . . f 7 7 7 7 7 7 f . . . . 
    . . . f 7 7 7 7 7 7 7 7 f . . . 
    . . . f e e e e e e e e f . . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . f f 5 f b f 4 4 f b f 5 f f . 
    . f 5 5 4 1 f 4 4 f 1 4 5 5 f . 
    . . f 5 5 4 4 4 4 4 4 5 5 f . . 
    . . . f 5 5 7 7 7 7 5 5 f . . . 
    . . 7 7 f 7 7 e e 7 7 f 7 7 . . 
    . . 7 7 f e e 7 7 e e f 7 7 . . 
    . . 4 4 f 7 7 e e 7 7 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let Houses = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Place)
Houses.setPosition(7, 7)
controller.moveSprite(Link)
let Arrow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . b . . . . 
    . . 1 1 . . . . . . . . b . . . 
    . . . e e e e e e e e e e b . . 
    . . 1 1 . . . . . . . . b . . . 
    . . . . . . . . . . . b . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
forever(function () {
    scene.cameraFollowSprite(Link)
    Sword.x = Link.x
    Sword.y = Link.y
    Bow.x = Link.x
    Bow.y = Link.y
    Arrow.x = Link.x
    Arrow.y = Link.y
})
