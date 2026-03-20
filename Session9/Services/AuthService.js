const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()



// Dependency injection 
class AuthService {

    static async register (name, email, password, age, contact, gender) {
        // 1.  create an userModel object of this info - LOGIC

        const hashedPassword = await AuthService.encryptPassword(password);

        const userObject = UserModel({
            name, email, password: hashedPassword, age, contact, gender
        });


        // 2. talk to database and save this object in database

        try {
            const response = await userObject.save();
            return response;
        } catch (error) {
            return error;
        }
    }

    static async encryptPassword (password) {
        const salt = await bcrypt.genSalt(10); // how many times we want to hash it 
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }

    static async login (email, password) {
        // find out if the email is valid or not, user is there with that email or not 

        try {
            const user = await AuthService.findUserByEmail(email);

            if(!user) {
                throw new Error("user not found with this email");
            } else {
                const passwordFromDatabase = user.password; // hashed password $2b$10$1BwURKl99ufj0z96GwTunehlwAaKGvpAav0dq/SGZHnAvGiIet6I.

                const isPasswordMatching = await bcrypt.compare(password, passwordFromDatabase); // true or false

                if(isPasswordMatching) {
                    const payload = {
                        email: user.email,
                        contact: user.contact,
                        age: user.age
                    }

                    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10000" })

                    const response = {
                        user,
                        token: jwtToken
                    }

                    return response;
                } else {
                    throw new Error("invalid password");
                }

            }
        } catch (error) {
            throw new Error(error);
        }

    }

    static async findUserByEmail (email) {
        try {
            const user = await UserModel.findOne({ email: email})
            return user;
        } catch (error) {
            return null;
        }
    }

}


module.exports = AuthService;