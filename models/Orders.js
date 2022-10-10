const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: mongoose.ObjectId,
    products: [
        {
            productId: String,
            quantity: Number
        }
    ],
    totalAmount: {
        type: Number,
        required: [true, "orderSchema total amount is required"]
    },
    purchasedOn: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("Order", orderSchema)