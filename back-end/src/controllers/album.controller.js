const express = require("express");
const Album = require("../models/album.model");
const router = express.Router();

router.get("/",async(req,res)=>{
    const album = await Album.find().populate("songs");
    return res.status(200).send({album});
})

router.post("/album",async(req,res)=>{
    const album = await Album.create(req.body);
    return res.status(201).send({album});
})

module.exports = router;