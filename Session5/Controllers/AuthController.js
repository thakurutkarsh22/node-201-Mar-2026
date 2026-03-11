const UserModel = require("../Models/UserModel");
const AuthService = require("../Services/AuthService");

async function register(req, res) {

    const body = req.body; 
    const { name, email, password, age, contact, gender } = body;


    try {
        const response = await AuthService.register(name, email, password, age, contact, gender);
        res.status(201).json({
            message: "user registered successfully",
            data: response
        })
    } catch(error){
        res.status(500).json({
            message: "error occurred while registering user",
            error: error
        })
    }


}


function login(req, res) {
    
}

module.exports = {
    register,
    login
}