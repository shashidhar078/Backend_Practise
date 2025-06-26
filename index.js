const express=require("express");
const app=express();
const path=require("path");
const port=8080;

app.listen(port,()=>{
    console.log(`app listens on : ${port}`);
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/ig/:username",(req,res)=>{
    let followers=["nikhil","pruthvi","goutham","vignesh"];
    let {username}=req.params;
    res.render("Instagram.ejs",{username,followers});
})
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

