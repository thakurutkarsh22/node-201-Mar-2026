

const express = require('express');
const { getAllUser, getUserByGender, getUserByName } = require('../Controllers/ActivityUserController');
const router = express.Router();


router.get("/", getAllUser);
router.get("/getByGender", getUserByGender);
router.get("/getByName/:firstName", getUserByName);


module.exports = router;