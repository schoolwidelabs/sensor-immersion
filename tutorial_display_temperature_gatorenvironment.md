# Collecting Temperature Data with the Environmental Sensor
### @explicitHints true
 
## Step 1
 
We are going to learn how to use a micro:bit to display temperature values
 
Submit your answers using the google form under your teacher's name titled "display temperature gatorEnvironment"
 
https://schoolwidelabs.github.io/sensor-immersion-google-forms
 
```template
input.onButtonPressed(Button.A, function () {
    
})
```
 
## Step 2
 
**Before you begin, answer question 1 on the google form**
 
Describe your plan for getting the microbit to display the temperature values
 
## Step 3
 
To start, use the GatorEnvironment ``||gatorEnvironment: initialize||`` command start the sensor when the ``||basic: program starts||``
 
 
## Step 4
 
Use the ``||basic:showNumber||`` and ``||gatorEnvironment.get||`` commands to show the temperature on the micro:bit. Make sure to ``||Math: round||`` 
so you can read the number on the micro:bit.
 
 
#### ~ tutorialhint

Rounding makes the value easier to read on the display. 
Instead of seeing 72.9999999999, you just see 73.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
})

```
 
## Step 5
Great! You did it. Now you can test it out. How could you use the Math buttons to change the display to two times the temperature? Would you round before or after you double the temperature?
 
**Don't forget to fill out the final questions on the goolge form.**
 
```ghost
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF) * 2))
})
gatorEnvironment.beginEnvironment()
```

```package
gatorEnvironment=github:sparkfun/pxt-gator-environment#v1.0.13
```
