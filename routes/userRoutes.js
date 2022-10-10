const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../auth");
const UserController = require("../controllers/UserController");

//Register new User
router.post("/register", async (request, response) => {
  try {
    const result = await UserController.register(request.body);
    response.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (request, response)=>{
  try{
    const result = await UserController.login(request.body);
    response.send(result);
  }catch (err){
    console.log(err)
  }
})

//make User as admin
router.patch("/admin", auth.verify ,async (request, response) => {
  try {
    const data = {
      //request.body should have email and password of the admin, and the email of the user that needs to be modified into an admin account
      user: request.body,
      isAdmin: auth.decode(request.headers.authorization).isAdmin
    }
    const result = await UserController.makeAdmin(data);
    response.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
