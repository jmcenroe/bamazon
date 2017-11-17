// Include the inquirer NPM packages
var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "Peasant49", //Your password
    database: "bamazonDB"
});

function displayAll() {
    //show all ids, names, and products from database
    connection.query('SELECT * FROM Products', function(error, response) {
        if (error) { console.log(error) };
        // //new instance of constructor
        var theDisplayTable = new Table({
            //declare columns
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            //set widths to scale
            colWidths: [10, 30, 18, 10, 14]
        });
        //loop through product information and push to table
        for (i = 0; i < response.length; i++) {
            //push data to table
            theDisplayTable.push(
                [response[i].ItemID, response[i].ProductName, response[i].DepartmentName, 
                response[i].Price, response[i].StockQuantity]
            );
        }
        //log the completed table to console
        console.log(theDisplayTable.toString());
        purchasePrompt();
    });


}; //end displayAll

function purchasePrompt() {
    //get item ID and desired quantity from user. Pass to purchase from Database
    inquirer.prompt([{
            name: "ID",
            type: "input",
            message: "What is the item number of the item you want to buy?"
        }, {
            name: 'Quantity',
            type: 'input',
            message: "How many would you like to buy?"
        },

    ]).then(function(answers) {
        //set captured input as variables, pass variables as parameters
        var chosenQuantity = answers.Quantity;
        var chosenID = answers.ID;
        purchaseFromDatabase(chosenID, chosenQuantity);
    });

}; //end purchasePrompt

function purchaseFromDatabase(ID, quantityNeeded) {
    //check quantity of desired purchase. Minus quantity of the itemID from database if possible. 
    //Else inform user "Quantity desired not in stock" 
    connection.query('SELECT * FROM Products WHERE ItemID = ' + ID, function(error, response) {
        if (error) { console.log(error) };

        //if in stock
        if (quantityNeeded <= response[0].StockQuantity) {
            //calculate cost
            var totalCost = response[0].Price * quantityNeeded;
            //inform user
            console.log("We have what you need! Your order is coming up!");
            console.log("Your total cost for " + quantityNeeded + " " + response[0].ProductName +
                " is " + totalCost + ". Thank you for your Business!");
            //update database, minus purchased quantity
            connection.query('UPDATE Products SET StockQuantity = StockQuantity - ' +
                quantityNeeded + ' WHERE ItemID = ' + ID);
        } else {
            console.log("Sorry, we don't have enough for your order. Please choose another quantity, or another item.");
        };
        displayAll();
    });

}; //end purchaseFromDatabase

displayAll();