var mysql = require("mysql");
// var inquirer = require("inquirer");
var prompt = require("prompt");

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "SamuelGarcia1",
    database : "Bamazon"
});

connection.connect(function(err) {
    if (err) {
        throw err;
        return
    }
    console.log("Connection Established");

    var schema = {
        properties: {
            ID: {
            message: "Please enter the ID of the product you would like to buy.",
            pattern: /^[0-9][0-9]$|^[0-9]$/,
            required: true
            },
            howMany: {
            message: "Please enter how many you would like to buy.",
            pattern: /^[0-9][0-9]$|^[0-9][0-9][0-9]$/,
            required: true
            }
        }
    };
    var schema2 = {
        properties: {
            AnotherPurchase: {
            message: "Would you like to buy another item?.",
            pattern: /(no|n|yes|y)/,
            required: true
            },
        }
    };

    var beginApp = function() {
        connection.query("SELECT * FROM Products", function(err, result) {
            if (err) throw err;
            return (getProducts(result));
        });
    }

    var getProducts = function(products) {
        console.log("Welcome to Bamazon, here are all of the products currently in stock.");
        for (var i = 0; i < products.length; i++) {
            var productsResults = 
            "Item ID: " + products[i].ItemID +
            " Product Name: " + products[i].ProductName +
            " Department: " + products[i].DepartmentName +
            " Price: $" + products[i].Price +
            " Amount in Stock: " + products[i].StockQuantity;
            console.log(productsResults);
        }
        userSelectID();
    }
    var userSelectID = function(){
        prompt.start();
        console.log("Please enter the ID of the product you would like to buy.");
        prompt.get(schema, function (err, result) {
            if (err){
                console.log(err)
            }
            var userChoiceID = parseInt(result.ID);
            var userChoiceHowMany = parseInt(result.howMany);
            var checkInventory = function(){
                connection.query('SELECT * FROM Products WHERE ItemID =' + userChoiceID, function(err, result) {
                    if (err) throw err;
                    var userWantsToBuy = userChoiceHowMany;
                    var productInventory = result[0].StockQuantity;
                    var productsPrice = result[0].Price;
                    var isInStock = productInventory - userWantsToBuy;
                    var totalCost= productsPrice * userWantsToBuy;
                    if (userWantsToBuy > productInventory || productInventory === 0){
                        console.log("Sorry but there isn't enough in stock to complete your order. Please try again.");
                        userSelectID();
                    } else {
                        console.log("There are "+result[0].StockQuantity+" of "+result[0].ProductName);
                        console.log("You are purchasing "+ userWantsToBuy +" "+result[0].ProductName+"s at $"+ result[0].Price+" per item.");
                        console.log("Your total is $"+totalCost);
                        connection.query('UPDATE Products SET StockQuantity = '+isInStock+' WHERE ItemID ='+userChoiceID, function(err, result){
                        if (err) throw err;
                            connection.query('SELECT ItemID, ProductName, DepartmentName, Price, StockQuantity FROM products WHERE ItemID ='+userChoiceID, function(err, result){
                            }); 
                        });
                        prompt.get(schema2, function (err, result) {
                            if (err){
                                console.log(err)
                            }
                            console.log(result);
                            var userAnswer = result.AnotherPurchase;
                            if (userAnswer === "n" || userAnswer === "no"){
                                stopApp();
                            }else{
                                beginApp();
                            }   
                        });
                    }
                  });
            };
            checkInventory();
        });
    }
beginApp();
});
