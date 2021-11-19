const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const Forum = require("./model/details");

const app = express();

app.use(express.json())

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get("/",(req,res)=>{
    console.log("first reques");
});

app.get("/items",(req,res,next)=>{
   Forum.find({}).then(function(forum){
       res.send(forum);
   });
});

app.post("/item",async(req,res)=>{
    try{
    const myforum  = new Forum(req.body);
    await myforum.save();
    res.send(myforum);
    }catch(err){
        res.send({message: err})
    }
});


mongoose.connect("mongodb+srv://gvithu24:12345@cluster0.ztmcj.mongodb.net/myForum?retryWrites=true&w=majority",
(req,res)=>{
    console.log("connnected to DB");
});

app.listen(4000,()=>{
    console.log("listening to 4000")
});