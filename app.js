/**
 * Main application file.
 * BeanBlog Source Code V1.0.0
 * Created By Dawid Keyser
 */

// Setup Express server
const express = require("express");
const app = express();
const port = 5000;

// Setup Handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// Handle index routing by rendering home page
app.get("/", function (req, res) {
    res.send("home");
});

// Start the server running.
app.listen(port, function () {
    console.log(`BeanBlog | Routes Set and App listening on port ${port}! `);
});