var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");

router.get("/", getProfile);

async function getProfile(req, res){
    res.render("profile", {title: "This is Profile Page"});
}

module.exports = router;
