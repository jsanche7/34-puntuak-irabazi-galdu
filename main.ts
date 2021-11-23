input.onButtonPressed(Button.A, function () {
    Jokalaria.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Jokalaria.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Jokalaria.move(1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Jokalaria.change(LedSpriteProperty.Y, 1)
})
let Jokalaria: game.LedSprite = null
Jokalaria = game.createSprite(4, 2)
basic.pause(1000)
let Pilota_1 = game.createSprite(2, 0)
let Pilota_2 = game.createSprite(0, 4)
Pilota_1.change(LedSpriteProperty.Brightness, 50)
Pilota_2.change(LedSpriteProperty.Blink, 50)
basic.forever(function () {
    if (Jokalaria.isTouching(Pilota_1)) {
        game.addScore(1)
        Pilota_1.delete()
        basic.showNumber(game.score())
        basic.pause(1000)
    }
    if (Jokalaria.isTouching(Pilota_2)) {
        game.addScore(1)
        Pilota_2.delete()
        basic.showNumber(game.score())
    }
})
