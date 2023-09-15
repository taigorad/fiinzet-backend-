const express=require("express")

const app =express()

app.get("/",(req,res)=>{
    res.send("good morning")
})
app.listen(3000,()=>[
    console.log("server start")
])