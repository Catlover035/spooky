namespace SpriteKind {
    export const Follower = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Candy = darts.create(assets.image`myImage`, SpriteKind.Projectile, 0, 0)
    Candy.follow(Bob)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.spray, 1000)
    pause(1000)
    game.setGameOverMessage(false, "That’s not spooky-!")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Follower, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Follower, effects.spray, 1000)
    game.showLongText("PUUMP NOO", DialogLayout.Top)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    pause(100)
    game.setGameOverMessage(true, "It’s Spooky Month!")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Bob, effects.spray, 1000)
})
let Candy: Dart = null
let Bob: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
let Pump = sprites.create(assets.image`Pump Sprite`, SpriteKind.Follower)
animation.runImageAnimation(
Pump,
assets.animation`8 PuGmpmyAnim o`,
200,
false
)
let Skid = sprites.create(assets.image`Skid Sprite`, SpriteKind.Player)
animation.runImageAnimation(
Skid,
assets.animation`C Skid T`,
200,
false
)
scene.cameraFollowSprite(Skid)
controller.moveSprite(Skid, 100, 100)
Pump.follow(Skid, 95)
pause(1500)
Bob = sprites.create(assets.image`Bob Sprite`, SpriteKind.Enemy)
animation.runImageAnimation(
Bob,
assets.animation`Bob l`,
200,
false
)
Bob.follow(Skid, 80)
