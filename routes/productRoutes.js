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


module.exports = router;