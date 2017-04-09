"use strict"

const fs = require("fs");
const path = require("path");

const captchapng = require("captchapng");

module.exports.loginPage = (req,res)=>{
    fs.readFile(path.join(__dirname,'../views/login.html'),(err,data)=>{
      res.setHeader("Content-Type","text/html,charset=utf8");
      res.end(data);
    })
}

module.exports.getVcode = (req,res)=>{
     const vcode = parseInt(Math.random()*9000+1000)
     const p = new captchapng(80,30,vcode);
        p.color(0, 0, 0, 0);   
        p.color(80, 80, 80, 255); 
        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        res.writeHead(200, {
            'Content-Type': 'image/png'
        });
        res.end(imgbase64);
}

