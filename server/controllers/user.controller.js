const User = require("../models/user.model")

const SignInController = async function (req, res) {
    const { email, password } = req.body
    console.log(email, password);
    try {
        const usersFromDB = await User.findOne({ email: email })
        if (!usersFromDB) {
            res.status(404).send("email doesn't exist")
            return
        }
        if (usersFromDB.password !== password) {
            res.status(400).send("wrong password")
            return
        }
        res.send(
            usersFromDB
        )
    } catch (error) {
        res.status(error?.status).send({ error: error.msg });
    }
};

const SignUpController = async function (req, res) {
    const newUser = req.body
    try {
        const checkIfEmailExists = await User.findOne({ email: newUser.email })

        if (checkIfEmailExists) {
            res.status(404).send("email already exists")
            return
        }
        const checkIfUsernameExists = await User.findOne({ username: newUser.username })

        if (checkIfUsernameExists) {
            res.status(404).send("username already exists")
            return
        }
        const userdb = new User(newUser)
        const dbResponse = await userdb.save()
        res.send(dbResponse)
    } catch (error) {
        res.status(error?.status).send({ error: error.msg });
    }

};

module.exports = { SignInController, SignUpController };