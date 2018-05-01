
CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE Products (ItemID int AUTO_INCREMENT, ProductName varchar(50) NOT NULL, DepartmentName varchar(50) NOT NULL, Price varchar(30) NOT NULL, StockQuantity int NOT NULL, PRIMARY KEY(ItemID) );
describe Products; 
select * from Products; 
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Play-Doh Modeling Compound 10-Pack Case of Colors", "Clay & Dough", 7.99, 50);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Berkley Flicker Shad Fishing Bait ", "Hunting & Fishing", 00.12, 200);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Wilson GST Practice Football (1003 Pattern)", "Team Sports", 49.99, 50);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Hasbro Pie Face Game", "Toys, Kids & Baby", 15.99, 75);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Monopoly - The Classic Edition", "Toys, Kids & Baby", 21.97, 80);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Gold Heart Locket Necklace", "Clothing, Shoes & Jewelry", 63.26, 30);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Scarab Cuff Links", "Clothing, Shoes & Jewelry", 225.00, 50);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Vita Coco Coconut Water", "Beauty, Health & Grocery", 225.00, 3116);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Canon MG2920 Wireless Printer", "Electronics & Computers", 49.95, 60);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Fitbit Wireless Wristband", "Electronics & Computers", 125.89, 274);
select * from Products;