const controller = require("../controller/controller")
const express = require("express")
const userAPIRouter = express.Router();

userAPIRouter.post("/createuser", controller.createUser)
userAPIRouter.get("/getuser", controller.getUser)
userAPIRouter.put("/updateuser/:idNum", controller.updateUser)
userAPIRouter.delete("/deleteuser/:idNum",controller.deleteUser)
module.exports=userAPIRouter;