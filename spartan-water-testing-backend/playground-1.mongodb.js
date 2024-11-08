/* global use, db */
// MongoDB Playground

// Specify the database name
const database = 'spartanLaboratory';  // Change to your database name

// Use the database
use(database);

// Create the "users" collection
db.createCollection("users");

// Create the "orders" collection
db.createCollection("orders");

// Create the "carts" collection
db.createCollection("carts");

// Create the "water_kits" collection
db.createCollection("water_kits");
