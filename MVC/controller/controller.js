const model = require("../model/model")

const signup = async (req, res) => {
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

const myController ={signup};
module.exports = myController;