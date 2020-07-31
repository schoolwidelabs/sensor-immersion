# Collecting Temperature Data with the Environmental Sensor
### @explicitHints true
 
## Step 1
 
We are going to learn how to use a micro:bit to collect the values temperature in
degrees Fahrenheit from the environmental sensor and display the value on the micro:bit.

All the blocks you need are in the blocks menu. Put them together and test your code
by downloading it to the micro:bit. Click the hint button if you need some help.
 
Submit your answers using the google form under your teacher's name titled "display temperature gatorEnvironment"
 
https://schoolwidelabs.github.io/sensor-immersion-google-forms
 
```template
input.onButtonPressed(Button.A, function () {
    
})
```

#### ~ tutorialhint
What needs to happen with the ``||gatorEnvironment: environmental sensor||`` when the progam on the micro:bit 
``||basic: starts?||``

How can you make the micro:bit ``||basic: show the value||`` of the 
``||gatorEnvironment: temperature||``.

``||Math: Rounding||`` makes the value easier to read on the display. 
Instead of seeing 72.9999999999, you just see 73.

```ghost
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF) * 2))
})
gatorEnvironment.beginEnvironment()
```

```package
gatorEnvironment=github:sparkfun/pxt-gator-environment#v1.0.13
```