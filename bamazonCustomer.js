// Include the inquirer NPM packages
var inquirer = require("inquirer");
var mysql = require("mysql");

var userInput = "";

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "", //Your username
  database: "BamazonDB"
});

connection.connect(function(err) {
if (err) throw err;
console.log("connected as id " + connection.threadId);

