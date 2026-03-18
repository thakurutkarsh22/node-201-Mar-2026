const UserModel = require("../Models/UserModel");

// Dependency injection 
class AuthService {

    static async register (name, email, password, age, contact, gender) {
        // 1.  create an userModel object of this info - LOGIC

        const userObject = UserModel({
            name, email, password, age, contact, gender
        });


        // 2. talk to database and save this object in database

        try {
            const response = await userObject.save();
            return response;
        } catch (error) {
            return error;
        }
    }

    static async login () {
        
    }

}


module.exports = AuthService;