const express=require("express")
const app=express();
const { Sequelize,Op } = require('sequelize');
const db=require("./models")

const {test}=require("./models")
const port=9000
app.use(express.json())

app.get("/",function(req,res){
    res.send("Welcome to My page")
})

app.get("/home",async function(req,res){
        const user=await test.findAll()
    res.status(200).json({user})
})
app.post("/post",async function(req,res){
    console.log(req.body)
    await test.create(req.body)
    res.send("Your information added in database")
})
db.sequelize.sync().then((req)=>{

    app.listen(port,function(req,res){
        console.log(`server started at port ${port}`)
    })
})
