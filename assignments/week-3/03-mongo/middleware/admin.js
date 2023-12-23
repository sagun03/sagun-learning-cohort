const { Admin } = require("../db");
// Middleware for handling auth
async function checkIsAdminExist(userName){
    const existingAdmin = await Admin.findOne({ userName }) 
    if (existingAdmin) return true
    return false
}
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const userName = req.headers.username;
    const isExistingAdmin =  checkIsAdminExist(userName);
    if (!isExistingAdmin) {
        res.status(404).send({
            message: "Do not have access to admin route"
        })
    } else {
    next()
    }
  
}

module.exports = {adminMiddleware, checkIsAdminExist};