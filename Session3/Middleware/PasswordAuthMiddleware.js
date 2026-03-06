require('dotenv').config()
const SECRET_SERVER_PASSWORD = process.env.SECRET_SERVER_PASSWORD;

function PasswordAuthMiddleware(req, res, next) {
    const passwordFromHeader = req.headers['authorization'] // password asdf1234

    if(passwordFromHeader !== SECRET_SERVER_PASSWORD) {
        // bad request 
        res.status(401).json({message: "Unauthorized, invalid password from middleware "})
        return;
    } else {
        // good request 
        next();
    }
}

module.exports = PasswordAuthMiddleware;