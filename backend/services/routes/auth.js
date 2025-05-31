import express from 'express';
import passport from 'passport';

var router = express.Router();

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true
    }));

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/dashboard',
    failureRedirect: '/',
    failureFlash: true
}));

export default router;