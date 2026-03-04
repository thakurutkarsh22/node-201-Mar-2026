const userData = require("../userData");

function getAllUser (req, res) {
    const userDataObj = userData.data;

    const responsePayload =  {
        data: userDataObj,
        size: userDataObj.length
    }

    res.status(200).json(responsePayload);
}

function getUserByGender (req, res) {
    
    const queryParams = req.query; // { gender = male }
    const searchedGender = queryParams.gender; // male, female, alien 
    
    const filteredData = userData.data.filter(user => user.gender === searchedGender);

    const responsePayload =  {
        data: filteredData,
        size: filteredData.length
    }

    res.status(200).json(responsePayload);
}


function getUserByName (req, res) {
    
    const urlParams = req.params; // { firstname = esat }
    const searchedName = urlParams.firstName; // esat, emily
    
    const filteredData = userData.data.filter(user => user.name.first.toLocaleLowerCase() === searchedName.toLocaleLowerCase());

    const responsePayload =  {
        data: filteredData,
        size: filteredData.length
    }

    res.status(200).json(responsePayload);
}






module.exports = {getAllUser, getUserByGender, getUserByName}