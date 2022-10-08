const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "productSchema name is required"]
    },
    description: {
        type: String,
        required: [true, "productSchema description is required"]
    },
    price: {
        type: Number,
        required: [true, "productSchema price is required"],
        min: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("Product", productSchema);