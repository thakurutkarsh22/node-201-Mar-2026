

const express = require('express');
const { getAllUser, getUserByGender, getUserByName } = require('../Controllers/ActivityUserController');
const PasswordAuthMiddleware = require('../Middleware/PasswordAuthMiddleware');
const JWTAuthMiddleware = require('../Middleware/JWTAuthMiddleware');
const router = express.Router();


router.get("/", JWTAuthMiddleware,  getAllUser);
router.get("/getByGender", PasswordAuthMiddleware, getUserByGender);
router.get("/getByName/:firstName", getUserByName);


module.exports = router;