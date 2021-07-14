// LOAD library can chay
const express = require("express");
const expressSession = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

const mongoose = require("mongoose");
const dbconnect = require("./model/connectDB");
dbconnect.connectDB(dbconnect.xURL);

var hbs = require('hbs');

// Cau hinh Library + Data
xPORT = process.env.PORT || 3000;

// ROUTING toi chuc nang
const app = express();
const Router = express.Router(); 
const ProductController = require("./controller/ProductController");

// Cấu hình MVC + Engine - View
app.set("views", path.join(__dirname, "view")); //setting views directory for views.
app.set("view engine", "hbs"); //setting view engine as handlebars

//
hbs.registerPartials(__dirname + '/view/partials');

// khai báo tới thư mục Static / Public
app.use(express.static(__dirname + '/public'));


// filter request 
app.use(
    (req,res,next) => {
        console.log("\n query: ",req.query);
        console.log("\n url: ",req.url);
        next();
    }
);

// error
app.use(
    (err,req,res,next) => {
        console.log("\n ERROR: ",Date.now());
        res.status(500).send("WEB Broken !");
    }
);

// HOME 
Router.get("/" , getHome);

function getHome( req , res ){
    // res.sendFile(__dirname + "/view/home.html");
    res.render("product");
    app.use("/product",ProductController);
}

// Profile 
// const ProfileController = require("./controller/ProfileController");
// app.use("/profile",ProfileController);

// Product
app.use("/product",ProductController);

// Login
const UserController = require("./controller/UserController");
app.use("/login",UserController);

// function getLogin( req , res ){
//     res.sendFile(__dirname + "/view/login.html");
// }

// // Logout
// Router.get("/logout" , getLogout);

// function getLogout( req , res ){
//     res.sendFile(__dirname + "/view/logout.html");
// }

// Su dung MiddLeware (LIB) cho WEB
app.use("/",Router);
app.use(bodyParser.json());
app.use(expressSession( { 
    secret: "Cloud",
    resave: true,
    saveUninitialized: true,
    maxAge: 360000
}));

// Mo Web tai xPORT
app.listen(xPORT);

console.log("Web running at port: ",xPORT);