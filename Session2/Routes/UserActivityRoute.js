

const express = require('express');
const { getAllUser, getUserByGender, getUserByName } = require('../Controllers/ActivityUserController');
const router = express.Router();


// 1. get all users 


router.get("/", getAllUser);


// 2. get user by gender - male , female
// way1: query params -> anything that is after ? is part of query params
// https://www.google.com/search?q=virat  https://www.google.com/search?q=sehwag 


router.get("/getByGender", getUserByGender);

// 3 get user by first name 
// way 2 - url params 
// https://pokeapi.co/api/v2/pokemon/ditto |  https://pokeapi.co/api/v2/pokemon/pikachu


router.get("/getByName/:firstName", getUserByName);


module.exports = router;