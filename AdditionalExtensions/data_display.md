# Building the Data Display

## Step 1
First we need to ``||gatorEnvironment: initialize||`` the environmental sensor and make 
``||Variables: buckets||`` to hold the sensor values. We call these buckets 
``||Variables: variables||``. This has already been done for you. 
What are the names of the variables?

```template
gatorEnvironment.beginEnvironment()
let Temp = 0
let Humid = 0
let Soil_Moisture = 0
```

## Step 2
We want to show the temperature, humidity, and soil moisture. Let's start by ``||basic: showing||``
the ``||gatorEnvironment: temperature||`` when ``||input: you press button A||``. The value can be a really long decimal, so 
let's ``||math: round it||``. Remember, we always put the value of the sensor in its ``||variables: bucket||``

```blocks
input.onButtonPressed(Button.A, function () {
    Temp = Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF))
    basic.showNumber(Temp)
})
```

## Step 3
We want to show the temperature, humidity, and soil moisture. Let's start by ``||basic: showing||``
the ``||gatorEnvironment: humidity||`` when ``||input: you press button B||``. 
The value can be a really long decimal, so let's ``||math: round it||``. 
Remember, we always put the value of the sensor in its ``||variables: bucket||``

```blocks
input.onButtonPressed(Button.B, function () {
    Humid = Math.round(gatorEnvironment.getMeasurement(measurementType.humidity))
    basic.showNumber(Humid)
})
```

## Step 4
We want to show the temperature, humidity, and soil moisture. Let's start by ``||basic: showing||``
the ``||gatorSoil: soil moisture||`` when ``||input: you press button A and button B at the same time||``. 
The value is a decimal between 0 and 1, so let's ``||math: multiply by it 100||`` 
so we have a percentage moisture and then ``||math: round it||`` so it's easier to read.
let's round it. Remember, we always put the value of the sensor in its ``||variables: bucket||``

```blocks
input.onButtonPressed(Button.AB, function () {
    Soil_Moisture = Math.round(100 * gatorSoil.moisture(AnalogPin.P2, GatorSoilType.Moisture, DigitalPin.P1))
    basic.showNumber(Soil_Moisture)
})
```
    
```package
gatorEnvironment=github:sparkfun/pxt-gator-environment#v1.0.13
gatorSoil=github:sparkfun/pxt-gator-soil#v1.0.3
```
