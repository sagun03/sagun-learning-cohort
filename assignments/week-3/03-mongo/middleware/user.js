const { User } = require("../db");

async function checkIsUserExists(userName){
    const existingAdmin = await User.findOn({ userName }) 
    if (existingAdmin) return true
    return false
}

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userName = req.headers.username;
    const isExistingUser =  checkIsUserExists(userName);
    if (!isExistingUser) {
        res.status(404).send({
            message: "Do not have access to user route"
        })
    } else {
    next()
    }
}

module.exports = {userMiddleware, checkIsUserExists};