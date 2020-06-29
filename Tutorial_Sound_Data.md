# Tutorial_Sound_Data
# Sound Sensor Data

## Introduction 
Sound Sensor Data Collection Challenge. Continuously collect sound samples every 5 seconds and display them using the lights on the micro:bit. 

## Step 1
``||basic: Continuously||`` ``||basic: show a number||``. 

```blocks
basic.forever(function () {
    basic.showNumber(0)
})
```

## Step 2
What ``||gatorMicrophone: number||`` do we want to be showing?  

```blocks
basic.forever(function () {
    basic.showNumber(gatorMicrophone.getSoundIntensity())
})
```

## Step 3
We do not want a long list after the decimal point, so we ``||math: round||`` the ``||gatorMicrophone: sound||`` to the closest whole number.

```blocks
basic.forever(function () {
    basic.showNumber(Math.round(gatorMicrophone.getSoundIntensity()))
})
```

## Step 4
We need to ``||basic: take a break||`` for 5 seconds in between each measurement.

```blocks
basic.forever(function () {
    basic.showNumber(Math.round(gatorMicrophone.getSoundIntensity()))
    basic.pause(5000)
})
```

## Step 6
``|Download|`` it and test it out. Once you have it working, click NEXT to move on to the next challenge

## Step 7
Now you will use the ``||radio: radio||`` to transfer data collected using the micro:bit to the chromebook. The radio channel is labeled on your receiver micro:bit box. Set the data collecting micro:bit to the same group as the data receiving micro:bit.

Make sure you have the micro:bit on the right group.
```blocks
radio.setGroup(7)
```

## Step 8 
Now instead of showing the ``||gatorMicrophone: sound||`` value on the micro:bit, ``||radio:send||`` over the radio instead.
```blocks
radio.setGroup(7)
basic.forever(function () {
    radio.sendNumber(Math.round(gatorMicrophone.getSoundIntensity()))
    basic.pause(5000)
})
```

## Step 9
``|Download|`` the code and test it out. 

```package
gatorMicrophone=github:sparkfun/pxt-gator-microphone#v1.0.20
```
