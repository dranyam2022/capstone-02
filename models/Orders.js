const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: [true, "orderSchema userId should be associated to order"]
    },
    products: [
        {
            productId: String,
            quantity: Number
        }
    ],
    totalAmount: Number,
    purchasedOn: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("Order", orderSchema)