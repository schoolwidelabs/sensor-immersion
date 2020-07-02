# magnetometer_display_field_strength
### @explicitHints true
 
## Welcome
 
We are going write a program to display the strength of the magnetic field on your micro:bit
 
Submit your answers using this google form with your teacher's name that ends with "Display Magnet Strenth"
 
https://schoolwidelabs.github.io/sensor-immersion/ 
 
## before you begin
 
Answer question 1 on the google form, describing your plans for how to get the micro:bit to display the strength of the magnetic field
 
## Step 2
 
To start, use the ``||basic:show number||`` command to display any number
 
#### ~ tutorialhint
Try clicking on the 'Basic' drawer to find the block you need!
 
```blocks
basic.showNumber(0)
```
 
## Step 3
 
Now change the value of ``||basic:showNumber||`` to be the strength of the magnetic field with ``||input:magneticForce||`` 
 
**In the Google Form**, andswer: Do you use the magnetic force of "x", "y", "z" or "strength"? 
 
#### ~ tutorialhint
```blocks
basic.showNumber(input.magneticForce(Dimension.Strength))
```
 
## Step 4
 
What is the difference between putting this command in the block for ``||on start||``, the block ``||forever||``, or ``||on button A pressed||``?
 
Experiment with each and when you are done, **put your answer and a screenshot of your final code in the google form**
 
## Step 5
 
Congratulations, you're done!
 
**Fill out the final question in the google form**
 
#### ~ tutorialhint
This is what one correct answer looks like:
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
    })
```
 
```ghost
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
```
    
