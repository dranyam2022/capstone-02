
const Order = require("../models/Orders");
const Product = require("../models/Products");

//create order

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

//get user orders
module.exports.getUserOrders = async (data) => {
  try{
    const resultQuery = await Order.find({userId:data})
    return resultQuery
  }catch(error){console.log(error)}
}

//retrieve all orders (Admin only)
module.exports.getAllOrders = async (data)=>{
  try{
    if(data.isAdmin){
      const resultQuery = await Order.find({})
    return resultQuery
  }else{
    return {
      message: "You are not an Admin"
    }
  }
  }catch(error){console.log(error)}
}