/*
============================================
; Title: Assignment 3.2 Factory Patterns
; Author:  Peter Itskovich
; Date: 12 May 2020
; Modified By: Becca Buechle
; Description: Practice with Factory Patterns 
;===========================================
*/

//prints header for assignment 
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "3.2_Factory_Pattern"));
console.log("\n");



function Postgres(props) {
    this.username = props.username || "admin";
    this.password = props.password || "s3cret";
    this.server = props.server || "localhost:5432";
}

function MySql(props) {
    this.username = props.username || "ca-admin";
    this.password = props.password || "ca-s3cret";
    this.server = props.server || "localhost:8000";
    this.version = props.version || 5.7
}


function Oracle (props) {
    this.username = props.username || "admin";
    this.password = props.password || "Bear";
    this.server = props.server || "localhost:8080";
    this.version = props.version || 1.0

};

function Informix (props) {
    this.username = props.username ||"rbuechle";
    this.password = props.password ||"ThisIsYear2020";
    this.server = props.server || "localhost:3000";
};

function DatabaseFactory() {}

//if statement that helps to create the database method
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(props) {
    if (props.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (props.databaseType === "MySql") {
        this.databaseClass = MySql;
    }   
    if(props.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } 
    if (props.databaseType === "Informix") {
        this.databaseClass = Informix;
    }
    return new this.databaseClass(props);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

//prints the postgres object out
console.log(postgres instanceof Postgres);
console.log(postgres);

//database factory objects
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//prints the mySql object  out
console.log(mySql instanceof MySql);
console.log(mySql);

//database factory objects
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType:"Oracle",
    username: "admin",
    password: "Secret"
});

//prints the oracle object out
console.log(oracle instanceof Oracle);
console.log(oracle);

//database factory objects
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "default",
    password: "Jack87"
});

//prints the informix object out
console.log(informix instanceof Informix);
console.log(informix);

