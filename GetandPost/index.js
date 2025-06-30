const express=require("express");
const app=express();

const port=8080;

app.listen(port,()=>{
    console.log(`app listens on ${port}`);
})

app.use(express.urlencoded({extended:true}));
//express will now understand whatever the data has been sent through any sort of method

app.get("/register",(req,res)=>{
    let {username,password} = req.query;  //data from query strings can be fetched using get
    console.log(`username : ${username} && password : ${password}`);
    res.send(`Hello user :  ${username} ,from register through get request`);
    
})


app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("Hello from register through post request");
})