// 10_01_rover_motor_test.js

var b = require('bonescript');
var pwmPinA = "P9_14";
var in1PinA = "P8_20";
var in2PinA = "P8_18";
var pwmPinB = "P8_16";
var in1PinB = "P8_22";
var in2PinA = "P8_24";

b.pinMode(pwmPinA, b.OUTPUT);
b.pinMode(in1PinA, b.OUTPUT);
b.pinMode(in2PinA, b.OUTPUT);
b.pinMode(pwmPinB, b.OUTPUT);
b.pinMode(in1PinB, b.OUTPUT);
b.pinMode(in2PinA, b.OUTPUT);

function setPins(pwmA, in1A, in2A, pwmB, in1B, in2B) {
	b.analogWrite(pwmPinA, pwmA); 
	b.digitalWrite(in1PinA, in1A);
	b.digitalWrite(in2PinA, in2A);
	b.analogWrite(pwmPinB, pwmB); 
	b.digitalWrite(in1PinB, in1B);
	b.digitalWrite(in2PinB, in2B);
}

function forwards() {
    setPins(0.7, 1, 0, 0.7, 1, 0);
}

function backwards() {
    setPins(0.7, 0, 1, 0.7, 0, 1);
}

function stop() {
    setPins(0, 0, 0, 0, 0, 0);
}

setTimeout(forwards, 500);
setTimeout(stop, 5000);
setTimeout(backwards, 6000);
setTimeout(stop, 11000);
