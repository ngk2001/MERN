const express = require("express")

const app = express();
const port = 3000;


app.listen(port,()=>{
    console.log("server running........................nodemon ")
})

app.post("/register", (req, res)=>{
    res.send("registerd user")
})

app.get("/login",(req, res)=>{
    res.send("user login")
})

app.delete("/deleteUser", (req, res)=>{
    res.send("user detail deleted")
})

app.put("/update", (req, res)=>{
    res.json({msg:"all updated"})
    
})