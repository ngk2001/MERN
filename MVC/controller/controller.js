const model = require("../model/model")

const signup = async (req, res) => {
    try {
        const { name, age } = req.body;
        const user = await model.findOne({ name: name })
        if (user) {
            return res.send({ msg: "user already exist" })
        }
        else {
            const newUser = await model.create({name,age});
            res.status(200).send({ msg: "user created successfully" });
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "error" });
    }
}

const myController ={signup};
module.exports = myController;