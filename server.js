const express=require("express");
const app=express();
const path=require("path");

const port=8080;

app.listen(port,(req,res)=>{
    console.log(`App listens on : ${port}`);
});

app.get("/",(req,res)=>{
    res.send("Welcome to home");
});
 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static("public"));
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    let followers=["nikhil","pruthvi","goutham"];
    const instaData=require("./data.json");
    let data=instaData[username];
    console.log(data);
    if(data)
    {
        res.render("InstaActivity",{username,followers,data});
    }
    else
    {
        res.render("error");
    }
    
})