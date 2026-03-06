

const express = require('express');
const { getAllUser, getUserByGender, getUserByName } = require('../Controllers/ActivityUserController');
const PasswordAuthMiddleware = require('../Middleware/PasswordAuthMiddleware');
const router = express.Router();


router.get("/", PasswordAuthMiddleware,  getAllUser);
router.get("/getByGender", getUserByGender);
router.get("/getByName/:firstName", getUserByName);


module.exports = router;