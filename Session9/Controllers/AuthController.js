const UserModel = require("../Models/UserModel");
const AuthService = require("../Services/AuthService");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {Promise<void>}
 */

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


async function login(req, res) {
    const body = req.body;
    const { email, password } = body;

    try {
        const response = await AuthService.login(email, password);
        const token = response.token;
        // this is how you set cookies 
        res.cookie('session_token', token);
        res.status(200).json({
            message: "user logged in successfully",
            data: response
        })
    } catch(error){
        res.status(500).json({
            message: "error occurred while logging in user",
            error: error.message
        })
    }
}

module.exports = {
    register,
    login
}