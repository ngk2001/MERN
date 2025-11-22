const model = require("../model/model")

const createUser = async (req, res) => {
    try {
        const { idNum, name, age, city, phoneNumber } = req.body;
        const user = await model.findOne({ name: name })
        if (user) {
            return res.send({ msg: "user already exist" })
        }
        else {
            const newUser = await model.create({idNum, name, age, city, phoneNumber});
            res.status(200).send({ msg: "user created successfully" });
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "error from catch" });
    }
}

const getUser = async (req, res)=>{

    try{

      const user = await model.find();
    
        res.send(user)
    }catch(err){
        res.send({msg:"server error"})
    }
}
const updateUser = async(req,res)=>{
    try{    
    const idNum = req.params.idNum
    const updated = await model.findOneAndUpdate({idNum:idNum}, req.body, {new:true})
    res.status(201).send(updated)
    }catch(err){

        res.status(500).send({msg:"server error"})

    }
}

const deleteUser = async (req, res)=>{
    try{
    const idNum = req.params.idNum;
    const deleted = await model.findOneAndDelete({idNum:idNum})
    res.send("delete successfully")
    }catch(error){
        res.status(500).send("internal error")
    }

}


const myController ={createUser, getUser, updateUser, deleteUser};
module.exports = myController;