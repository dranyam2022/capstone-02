const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../auth");
const ProductController = require("../controllers/ProductController");

//Create Product for admin only
router.post("/create", auth.verify, async (request,response)=>{
    try {
        const data = {
            product: request.body,
            isAdmin: auth.decode(request.headers.authorization).isAdmin
        }
      const result = await  ProductController.createProduct(data)
      response.send(result)
    } catch (error) {console.log(error)}
})

//retrieve all active Products
router.get("/all", async(request,response)=>{
    try {
       const result = await ProductController.getAllActive()
       response.send(result)
    } catch (error) {console.log(error)}
})

//retrieve single product
router.get("/:id", async (request, response)=>{
    try {
        const result = await ProductController.getProduct(request.params.id)
        response.send(result)
    } catch (error) {console.log(error)}
})

//Update Product (Admin only)
router.patch("/update/:id", auth.verify, async(request, response)=>{
    try{
        const data = {
        product: request.body,
        isAdmin: auth.decode(request.headers.authorization).isAdmin
        }
        const result = await ProductController.updateProduct(request.params.id, data)
        response.send(result)
    }catch(error){console.log(error)}
})

//archive a poduct (Admin Only)
router.patch("/archive/:id", auth.verify, async(request, response)=>{
    try{
        const data = {
        isAdmin: auth.decode(request.headers.authorization).isAdmin
        }
        const result = await ProductController.archiveProduct(request.params.id, data)
        response.send(result)
    }catch(error){console.log(error)}
})

module.exports = router;