const User = require("../models/Users");
const bcrypt = require("bcrypt");
const auth = require("../auth");



//Register User Function
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
}
catch(err){console.log(err)}}


//Login User Function
module.exports.login = async (requestBody)=>{
    try{
        const resultQuery = await User.findOne({"email": requestBody.email})
if(!resultQuery){
    return {
        message: "User doesn't exist!"
    }
}else {
    const isPasswordCorrect = bcrypt.compareSync(requestBody.password, resultQuery.password)
    if (isPasswordCorrect) {
        return {
            access: auth.createAccessToken(resultQuery)
        }
    }else{
        return {
        message: "Password is incorrect!"
    }}
}
    }catch(err){console.log(err)}
}

//make admin account through patch
module.exports.makeAdmin = async (data)=>{
    try{
        if(data.isAdmin){
        const resultQuery = await User.findOne({"email":data.user.makeAdmin});
        if(resultQuery){
        resultQuery.isAdmin = true;
        return `The User with email  ${resultQuery.email} is now an ADMIN`
        }else{
            return {
                message: "User does not exist"
            }
        }}
        return{
            message: "You are not an admin"
        }
    }catch(err){console.log(err)}
}