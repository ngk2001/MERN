const express = require("express");
const app = express();




let user ="thunder";
let psw="thunder";



const middleware = (req, res, next) => {
    if(user=="thunder" && psw == "thunder")
    {   console.log("middleware")
        next();
    }
    else{
        res.send("erooooooorr")
        console.log("errrrrrrr")
    }

};

app.use(middleware);



app.get("/home", (req, res) => {
    
  res.send("in home");
});


app.get("/about", (req, res) => {
  res.send("in about");
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
