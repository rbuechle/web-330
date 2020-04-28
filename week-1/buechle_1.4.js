/*
============================================
; Title: Assignment 1.4 Duck Typing aka Interfaces
; Author: Professor Itskovich
; Date: 04/27/2020
; Modified By: Becca Buechle
; Description: Practice with Duck Typing and Interfaces
;===========================================
*/

//creates header for assignment
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "1.4_Interfaces"));
console.log ("\n")

// creating the constructors and prototypes with a console log
function Car (model) {
    this.model = model;
}

Car.prototype.start = function () {
    console.log("Car added to the racetrack!");
}

function Truck (model, year) {
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function () {
    console.log("Truck added to the racetrack!");
}

function Jeep (model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function () {
    console.log("Jeep added to the racetrack!");
}

//.pushing objects to the array
function driveIt (vehicle) {
    vehicle.start();
    raceTrack.push(vehicle);
}

//empty array that will later be filled by having object .pushed to it
var raceTrack = [];

var wrx = new Car("WRX");
var tundra = new Truck ("Tundra", "2020");
var wrangler = new Jeep ("Wrangler Sport", "2010", "Blue");

//envoking
driveIt(wrx);
driveIt(tundra);
driveIt(wrangler);

console.log("\n")
console.log("-- The following vehicles have been added to the racetrack --")

//iterating over the raceTrack array
for(var i = 0; i < raceTrack.length; i++){
    console.log(raceTrack[i].constructor.name + " : " + raceTrack[i].model);
}