const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../auth");
const OrderController = require("../controllers/OrderController");

router.post("/create/:productid", auth.verify, async (request, response)=>{
try{
    const data = {
        //request.body contains and quantity of the order
        order: request.body,
        userId: auth.decode(request.headers.authorization).id,
        isAdmin: auth.decode(request.headers.authorization).isAdmin
    }
    const result = await OrderController.createOrder(request.params.productid, data)
    response.send(result)

}catch(error){console.log(error)}
})


module.exports = router;
