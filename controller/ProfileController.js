var express = require('express');
var router = express.router;

router.get("/", getProfile);

function getProfile(req, res){
    res.render("Profile", {title: "This is Profile Page"});
}

module.exports = router;
