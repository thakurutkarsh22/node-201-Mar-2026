const express = require("express");
const HomeRouter = require("./Routes/HomeRoute")
const UserActivityRouter = require("./Routes/UserActivityRoute")
const BlogsRouter = require("./Routes/BlogsRoute")
const AuthRouter = require("./Routes/AuthRoute")
const mongoose = require("mongoose");
const passport = require("passport");
const PassportConfig = require("./Config/Passport");
const server = express();
require('dotenv').config();
const PORT = process.env.PORT;

PassportConfig(passport);// we are basically telling my application this is a new way to authenticate


// this is GLOBAL MIDLWARE 
server.use(express.json()) // to parse the incoming request body in json format

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

// new functionality for blogs 
server.use("/api/v1/blogs", BlogsRouter)

// register and login
server.use("/api/v1/auth", AuthRouter)

server.use("/api/v1/activity/users", UserActivityRouter)

const database = process.env.DB_URI;
mongoose.connect(database).then(() => {
    console.log("Database connected successfully");
})



server.listen(PORT, () => {
    console.log("Express server has strted on port, ", PORT);
})