const Product = require("../models/Products");

module.exports.createProduct = async (data)=>{
try {
    if(data.isAdmin){
        let newProduct = new Product({
            name: data.product.name,
            description: data.product.description,
            price: data.product.price
        })
        await newProduct.save()
        return {
            message: `New Product ${newProduct.name} has been added.`
        }
    }else{
        return {
            message: "You are not an Admin."
        }
    }

} catch (error) {console.log(error)}
}

