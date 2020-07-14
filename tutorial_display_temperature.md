# tutorial_display_temperature
# metal detector neo pixels tutorial
### @explicitHints true
 
## Step 1
 
We are going to learn how to use a micro:bit to display temperature values
 
Submit your answers using the google form under your teacher's name titled "display temperature"
 
https://schoolwidelabs.github.io/sensor-immersion-google-forms

```template
input.onButtonPressed(Button.A, function () {
	
})
```
 
## Step 2
 
**Before you begin, answer question 1 on the google form**
 
Describe your plan for getting the microbit to display the temperature

## Step 3
 
To start, use the ``||basic:show number||`` command to display any number
 
#### ~ tutorialhint
Try clicking on the 'Basic' drawer to find the block you need!
 
```blocks
input.onButtonPressed(Button.A, function () {basic.showNumber(0)}
```
 
## Step 3
 
Now change the value of ``||basic:showNumber||`` to be the temperature with ``||input:temperature||`` 

 
#### ~ tutorialhint

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
```

## step 4 

In the ``||math.math||`` menu you will find the ``||math.round||`` command to round to the nearest whole number

Use this command to change the displayed value to be the temperature rounded to the nearest whole number

### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(input.temperature()))
})
```
 
## step 5
Great! You did it. Now you can test it out. How could you use the Math buttons to change the display to be in degrees Farenheight?

**Don't forget to fill out the final questions on the goolge form.**
 
```ghost
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(input.temperature()))
})
if (0 * 0 == 0 + 0) {
	
}

```
