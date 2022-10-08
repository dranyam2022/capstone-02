const User = require("../models/Users");
const bcrypt = require("bcrypt");
const auth = require("../auth");

module.exports.register = async (requestBody) =>{
    try{
    const  resultQuery = await User.findOne({"email": requestBody.email})
    if(!resultQuery){
        const encryptedPassword = bcrypt.hashSync(requestBody.password, 10);
        let newUser = new User({
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            email: requestBody.email,
            mobileNumber: requestBody.mobileNumber,
            password: encryptedPassword
        })
        await newUser.save()
        return {
            message: "New User successfully registered"
        }
    }else{
        return {
            message: "Email already exist!"
        }
    }
}catch(err){
    console.log(err)
}}