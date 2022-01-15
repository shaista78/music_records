const express = require("express");
const Signup = require("../models/Singup.models");
const router = express.Router();

router.get("/signup",async(req,res)=>{
    const signin = await Signup.find();
    return res.status(200).send({signin});
})

router.post("/signup",async(req,res)=>{
    const signin = await Signup.create(req.body);
    return res.status(201).send({signin});
})

module.exports = router;
