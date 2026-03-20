require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET
const jwt = require("jsonwebtoken");

function JWTAuthMiddleware(req, res, next) {
    const jwtFromHeader = req.headers['authorization'] // bearer <token> 
    const token = jwtFromHeader.split(" ")[1]; // <token>

    if(!token) {
        return res.status(401).json({
            message: "It seems you have never logged in, please login to get access"
        })
    } else {
        // i have the token 
        // verify the token 

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err) {
                return res.status(401).json({message: "Invalid token", err})
            } else {
                // good request 
                console.log('decoded', decoded);
                next();
            }
        })
    }

}

module.exports = JWTAuthMiddleware;