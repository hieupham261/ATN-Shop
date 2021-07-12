const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        trim: true,
    },
    Password: {
        type: String,
        required: true,
        trim: true,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
    },
    Phone: {
        type: String,
        trim: true,
    },
});

const Users = mongoose.model("Users", UserSchema, "Users");

///
module.exports = Users;