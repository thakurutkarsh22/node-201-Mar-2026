

const express = require('express');
const { getAllUser, getUserByGender, getUserByName } = require('../Controllers/ActivityUserController');
const PasswordAuthMiddleware = require('../Middleware/PasswordAuthMiddleware');
const JWTAuthMiddleware = require('../Middleware/JWTAuthMiddleware');
const passport = require('passport');
const router = express.Router();


// use passportjs JWT 
// failureRedirect: "/"
const PassportJwtAUthMiddleware = passport.authenticate('jwt', { session: false })


router.get("/", JWTAuthMiddleware,  getAllUser);
router.get("/getByGender", PasswordAuthMiddleware, getUserByGender);
router.get("/getByName/:firstName", PassportJwtAUthMiddleware, getUserByName);


module.exports = router;