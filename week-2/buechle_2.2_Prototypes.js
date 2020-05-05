/*
============================================
; Title: Assignment 
; Author: Professor Itskovich 
; Date: 04 May 2020
; Modified By: Becca Buechle 
; Description: Prototypes
;===========================================
*/

//prints header for assignment 
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "2.2_prototypes"));
console.log("\n")


var person = {
    getAge:function() {
       return this.age;
    }
};

//creates new object using an existing one as a prototype
var becca = Object.create(person, {
    "age": {
        "value": "32"
    },
    "fullname":{
        "value": "Becca Buechle"
    }
})

//envokes the getAge function and then logs the fullname and age to the console 
    becca.getAge();
    console.log("The person's fullname is: '%s'", becca.fullname);
    console.log("The person's age is '%s'", becca.age);
