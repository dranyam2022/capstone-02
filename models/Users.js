const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "userSchema email is required"]
    },
    password: {
        type: String,
        required: [true, "userSchema password is required"]
    },
    isAdmin: {
        type: Boolean,
        defualt: true
    }
})

module.exports = mongoose.model("User", userSchema);