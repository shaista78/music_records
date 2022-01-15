const express = require("express");

const connect = require("./configs/db.js");

const app = express();
app.use(express.json());

const albumcontroller = require("./controllers/album.controller");

app.use("/",albumcontroller);

app.listen("3421", async function(){
    await connect();
    console.log("Listining port 3421")
})