const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../auth");
const UserController = require("../controllers/UserController");

//Register new User
router.post("/register", async (request, response) => {
  try {
    const result = await UserController.register(request.body)
    response.send(result)
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
