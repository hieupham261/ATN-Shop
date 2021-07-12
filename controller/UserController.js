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

//// export
module.exports = router;
