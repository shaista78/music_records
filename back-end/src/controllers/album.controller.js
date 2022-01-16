const express = require("express");
const Album = require("../models/album.model");
const router = express.Router();

router.get("/",async(req,res)=>{
  const page=+req.query.page || 1;
  const size =+req.query.page || 3;
  const offset=(page-1)*size;
   const album = await Album.find().populate("songs").skip(offset).lean().exec();
   const totalCount = await Album.find().countDocuments();
   const totalPage = Math.ceil(totalCount/size)
   return res.status(200).send({album,totalPage});
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

router.patch("/album/:id",async(req,res)=>{
    const album = await Album.findByIdAndUpdate(req.params._id,req.body,{new:true});
    return res.status(200).send({album});
})

router.delete("/album/:id",async(req,res)=>{
    const album = await Album.findByIdAndRemove(req.params._id);
    return res.status(200).send({album});
})

module.exports = router;