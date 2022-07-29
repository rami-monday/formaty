const User = require("../models/user.model")

const getUsersController = async function (req, res) {
    try {
        const usersFromDB = await User.find({})
        res.send(usersFromDB)
    } catch (error) {
        res.sendStatus(500);
    }
};

const addUserController = async function (req, res) {
    const newUser = req.body
    const userdb = new User(newUser)
    try {
        const dbResponse = await userdb.save()
        res.send(dbResponse)
    } catch (error) {
        res.sendStatus(500);
    }

};

module.exports = { getUsersController, addUserController };