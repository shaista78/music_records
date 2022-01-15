const express = require("express");
const Album = require("../models/album.model");
const router = express.Router();

router.get("/",async(req,res)=>{

    const album = await Album.find().populate("songs").lean().exec();
   return res.status(200).send({album});
})
router.get("/:Artist",async(req,res)=>{
    
    const album = await Album.findOne({Artist:req.params.Artist});
    console.log(album);
    return res.status(200).send({album});
})
router.get("/Songs/:_id",async(req,res)=>{
    
    const album = await Album.findOne({_id:req.params._id});
    //console.log(album);
    return res.status(200).send({album});
})

router.post("/album",async(req,res)=>{
    const album = await Album.create(req.body);
    return res.status(201).send({album});
})

module.exports = router;