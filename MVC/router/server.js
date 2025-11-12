const express = require("express")
const mongoose = require("mongoose")

const app = express();
const router = require("./router")
app.use(express.json())
app.use("/user",router)

const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/thunder")
.then(()=>console.log("Connected to monogoDB"))
.catch((err)=>console.log("Error while connecting", err));

app.listen((PORT),()=>{
console.log("server is on")

})
