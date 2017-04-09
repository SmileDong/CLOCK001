"use strict"

const express = require("express");
const path = require("path");

const accountRouter = require(path.join(__dirname,"src/routers/accountRouter.js"))

const app = express();

app.use(express.static("src/static/"))

app.use("/account",accountRouter);

app.listen(3000,"127.0.0.1",(err)=>{
  if(err){
    console.log(err)
  }
  console.log("start........")
})
