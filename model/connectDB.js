const mongoose = require("mongoose");
// const productModel = require("products.js"); 

const username = "sa";
const password = "sa";
const dbName = "ATN_Shop";
const dbTable = "Products";

const url = "mongodb+srv://"+username+":"+password+"@cluster0.c20dy.mongodb.net/"+ dbName +
"?retryWrites=true&w=majority";


// kết nối MongoDB bằng LIB Mongoose
function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}