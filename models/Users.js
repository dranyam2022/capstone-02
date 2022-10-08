const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requried: [true, "userSchema firstname is required"]
    },
    lastName: {
        type: String,
        requried: [true, "userSchema lastName is required"]
    },
    mobileNumber: {
        type: Number,
        requried: [true, "userSchema mobileNumber is required"]
    },
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
        defualt: false
    }
})

module.exports = mongoose.model("User", userSchema);