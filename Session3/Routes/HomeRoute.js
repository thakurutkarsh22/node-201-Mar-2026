
const express = require('express');
const { HomeResponse, AboutResponse, ContactResponse } = require('../Controllers/HomeController');
const router = express.Router();


router.get("/", HomeResponse);
router.get("/home", HomeResponse);

router.get("/abouts", AboutResponse);

router.get("/contacts", ContactResponse);

module.exports = router;