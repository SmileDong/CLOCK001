"use strict"

const express = require("express");

const accRouter = express.Router();
const path = require("path")

const getlogin = require(path.join(__dirname,'../controllers/accountCollector.js'));

accRouter.get("/login",getlogin.loginPage);

accRouter.get("/vcode",getlogin.getVcode);

module.exports = accRouter;
