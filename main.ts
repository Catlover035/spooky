tiles.setCurrentTilemap(tilemap`level`)
let Pump = sprites.create(assets.image`Pump Sprite`, SpriteKind.Player)
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
controller.moveSprite(Skid)
Pump.follow(Skid, 90)
pause(1500)
let Bob = sprites.create(assets.image`Bob Sprite`, SpriteKind.Enemy)
animation.runImageAnimation(
Bob,
assets.animation`Bob l`,
200,
false
)
Bob.follow(Skid, 80)
