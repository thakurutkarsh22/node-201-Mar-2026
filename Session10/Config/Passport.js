require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
// ExtractJwt is the package which will extract the token from the request header 


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

// jwt.verify
const stratergy = new JwtStrategy(opts, (payload, done) => {
    console.log(payload, 'payload');

    try {
        // req is good: good case
        return done(null, payload);
    } catch (Error) {
        return done(Error, false);
    }
})

module.exports = (passport) => {
    passport.use(stratergy);
};



