const Order = require("../models/Orders");
const Product = require("../models/Products");

module.exports.createOrder = async (productId, data) => {
  try {
    if (!data.isAdmin) {
      const resultQueryProduct = await Product.findById(productId);
      if (resultQueryProduct) {
        const newOrder = new Order({
          userId: data.userId,
          products: [{productId: productId,
        quantity: data.order.quantity
        }],
          totalAmount: (data.order.quantity * resultQueryProduct.price)
        });
        await newOrder.save();
        return {
          message: "Order Created!",
        };
      } else {
        return {
          message: "Product does not exist",
        };
      }
    } else {
      return {
        message: "Admin accounts cannot make an order",
      };
    }
  } catch (error) {
    console.log(error);
  }
};
