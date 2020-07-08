input.onButtonPressed(Button.A, function () {
    led.setBrightness(input.magneticForce(Dimension.Strength))
    basic.showIcon(IconNames.Square)
    if (input.magneticForce(Dimension.Strength) > 250) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
    basic.showNumber(Math.round(input.magneticForce(Dimension.Strength)))
})