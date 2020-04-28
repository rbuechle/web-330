/*
============================================
; Title: Assignment 1.3 Class Refresher
; Author: Becca Buechle 
; Date: 04/27/2020
; Modified By: 
; Description: Refresher on constructor functions
;===========================================
*/

//creates header for assignment
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "1.3_Class_Refresher"));
console.log ("\n")

//constructor for cellphone objects
function CellPhone (manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
    
    this.getManufacturer = function(){
        return(this.manufacturer);
    }
    this.getColor = function(){
        return(this.color);
    }
    this.getPrice = function() {
        return(this.price);
    }
    this.getModel = function() {
        return(this.model);
    } 
    this.getDetails = function() {
        console.log("-- DISPLAYING CELL PHONE DETAILS --");
        console.log("Manufacturer: " + this.getManufacturer());
        console.log("Model: " + this.getModel());
        console.log("Color: " + this.getColor());
        console.log("Price: $" + this.getPrice());
    }
}

//info for all the phone
var phone1 = new CellPhone ("Apple", "Iphone 11 Pro Max", "Silver", 1500);

//calling phone1 
phone1.getDetails();

