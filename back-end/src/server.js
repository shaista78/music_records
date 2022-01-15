const express = require("express");

const connect = require("./configs/db.js");
const cors = require('cors')
const app = express();
app.use(express.json());

const albumcontroller = require("./controllers/album.controller");
const signupcontroller = require("./controllers/Signup.controller")

app.use("/",albumcontroller);
app.use("/",signupcontroller)

app.use(cors({origin:true}))
app.listen("3421", async function(){
    await connect();
    console.log("Listining port 3421")
})