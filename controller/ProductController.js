
const mongoose = require("mongoose");
const Product = require("../model/products");

var express = require('express');
var router = express.Router();

//// Khai bao cac xu ly trong 1 controller
router.get("/", getProduct);

async function getProduct(req, res){
    var productlist = await Product.find({});
    console.log(productlist);
    res.render("product", {product : productlist, title: "This is Product Page"});
}



//// -new
router.get("/new", getNewProduct);

function getNewProduct(req, res){
    res.render("product-new", {title: "This is Product Page"});
}

//// -create /// POST
router.post("/", createNewProduct);

function createNewProduct(req, res){
    res.render("product-new", {title: "Create New Product"});
}

//// -reEdit /// PUT
router.get("/edit", getEditProduct);

function getEditProduct(req, res){
    res.render("product-update", {title: "Update Product"});
}

//// -update /// PUT
router.put("/:id", updateProduct);

function updateProduct(req, res){
    res.render("product-update", {title: "Update Product"});
}

//// -delete /// DELETE
router.put("/:id", deleteProduct);

function deleteProduct(req, res){
    res.render("product-delete", {title: "Delete Product"});
}

//// export
module.exports = router;
