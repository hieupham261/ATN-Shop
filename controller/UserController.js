const mongoose = require("mongoose");
const User = require("../model/users");

var express = require('express');
var router = express.Router();

//// Khai bao cac xu ly trong 1 controller
router.get("/", getUser);

async function getUser(req, res){
    var userlist = await User.find({});
    console.log(userlist);
    res.render("login", {user : userlist, title: "This is Login Page"});
}

router.get('/login', function(req, res, next) {
    res.render('product');
    });

router.post('/login', function(req,res,next){
    console.log(userlist);
    if(req.body.Username == Username && req.body.Password == Password){
         res.redirect('/product'); // Redirect to /welcome if success
    }
    else {
         res.redirect('/login'); // Redirect to /login if login fail
    }

});

//// export
module.exports = router;
