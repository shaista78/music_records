const mongoose = require("mongoose");
const SignupSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true}
})
const Signup = mongoose.model("signup",SignupSchema);
module.exports = Signup;
