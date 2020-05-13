/*
============================================
; Title: Assignment 3.3 Singleton Patterns 
; Author:  Peter Itskovich
; Date: 12 May 2020
; Modified By: Becca Buechle
; Description: Practice with Singleton Patterns 
;===========================================
*/

//prints header for assignment 
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "3.3_Singleton_Pattern"));
console.log("\n");

//runs self invoking function that is later ran in test function
var DatabaseSingleton = (function() {    
    var instance;    
    function createInstance() {       
        var postgresDatabase = new Object("Database instance initialized!");        
        return postgresDatabase;    
    }

    // checks to see if instance is active if its not active creates a new instance. If active it just returns active instance 
    return {        
        getInstance: function() {            
            if (!instance) {                
                instance = createInstance();            
            }             
            return instance;        
        }     
    } 
})();

//test function that creates two vars and tests equivalency
function DatabaseSingletonTest(){
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    //logs question then checks to see if oracle and postgres are the same
    console.log("Same database instance? %s ", oracle === postgres);
};


//invoking DatabaseSingletonTest function
DatabaseSingletonTest();
