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

//Get all active product
module.exports.getAllActive = async ()=>{
try {
    const resultQuery = await Product.find({isActive: true})
    return resultQuery   
} catch (error) {console.log(error)}}

//get a singe product
module.exports.getProduct = async (data)=>{
    try {
        const resultQuery = await Product.findById(data)
        return resultQuery

    } catch (error) {console.log(error)}
}