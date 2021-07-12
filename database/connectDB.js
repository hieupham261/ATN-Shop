const mongoose = require("mongoose");
const productModel = require("./model/products.js"); 

const username = "sa";
const password = "sa";
const url = "mongodb+srv://"+username+":"+password+"@cluster0.c20dy.mongodb.net/test";
dbName = "ATN_Shop";
dbTable = "Products";

// kết nối MongoDB bằng LIB Mongoose
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log("\n Error !", err);
    } else {
        console.log("\n DB connected !");
    }
});

module.exports = {
    connectDB: connectDB,
    xURL: url,
}