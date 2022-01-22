const keys = require('../config/keys.js');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = mongoose.model('users');

//creates token for the server from the mongodb user id after authenticated
passport.serializeUser((user, done) => {
    //returns id
    done(null, user.id);
});

//creates token from the server and find user id related to it in mongodb
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
});

//says "passport use this Google strategy with these credentials"
passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
},
//this is a callback function that is done everytime the user comes
//back from the google flow
async (accessToken, refreshToken, profile, done)=>{
    //runs a function to see if user already exist on mongo
    const existingUser = await User.findOne({googleId: profile.id})
    
    if(existingUser){
        //tells passport that everything is complete
        //no error and return existinguser
        done(null, existingUser);
    }else{
        //saves the new user in mongo
        const user = await new User({ googleId: profile.id, email: profile.emails[0].value}).save();
        done(null, user);
    }
    
}));