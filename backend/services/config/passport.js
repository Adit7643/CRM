import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import dotenv from "dotenv";
import User from "../models/UserModel.js";

dotenv.config({path:"../.env"});
passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try{
        const user = await User.findById(id);
        done(null, user);
    }catch(error){
        done(error, null);
    }
});

passport.use(new LocalStrategy({usernameField:"email"}, 
    async(email, password, done) => {
        try{
            const user = await User.findOne({email});
            if(!user){
                return done(null, false, {message:'Incorrect email.'});
            }
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
         return done(null, false, {message: "Incorrect Password"});
        }
        return done(null, user);
        }catch(err){
            return done(err);
        }
}));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:'http://localhost:3000/auth/google/callback'
}, async(accessToken, refreshToken, profile, done) =>{
    try {
        let user = await User.findOne({googleId:profile.id});
        if(!user){
            user = await User.create({
                googleId:profile.id,
                displayName:profile.displayName,
                email:profile.emails[0].value,
                photo:profile.photos[0].value
            });
        }
        done(null, user);
    } catch (error) {
        done(error, null);
    }
}))

export default passport;