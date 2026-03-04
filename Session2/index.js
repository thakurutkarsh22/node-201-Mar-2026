const express = require("express");
const { HomeResponse, AboutResponse, ContactResponse } = require("./Controllers/HomeController");
const HomeRouter = require("./Routes/HomeRoute")
const UserActivityRouter = require("./Routes/UserActivityRoute")
const server = express();
const PORT = 8089;



server.get("/", HomeResponse);
server.get("/home", HomeResponse);

server.get("/abouts", AboutResponse);

server.get("/contacts", ContactResponse);


server.get("/fitness", (req, res) => {
    const fitnessRegieme = {
            name: "utkarsh express",
            age: 22,
            heigh: 5.10,
            shouldSleep8Hours: true,
            workout: ["cycling", "heavy weights"],
            gymAdress: {
                city: "banglore",
                pincode: 99473,
                street: "hsr street"
            }
        }

        // json is stringfying the fitnessRegieme
        // json is setting "Content-Type" : to application/json
        // json is writing and ending the response
        res.status(200).json(fitnessRegieme);

    
})


// User activity 

// use support all reqest - GET, PUT poST, patch, delete etc
server.use("/api/v1/activity/users", UserActivityRouter)


server.listen(PORT, () => {
    console.log("Express server has strted on port, ", PORT);
})