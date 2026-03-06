const express = require("express");
const HomeRouter = require("./Routes/HomeRoute")
const UserActivityRouter = require("./Routes/UserActivityRoute")
const server = express();
require('dotenv').config();
const PORT = process.env.PORT;


server.use("/", HomeRouter)

server.get("/fitness", (req, res, next) => {
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
        res.status(200).json(fitnessRegieme);

    
})

server.use("/api/v1/activity/users", UserActivityRouter)


server.listen(PORT, () => {
    console.log("Express server has strted on port, ", PORT);
})