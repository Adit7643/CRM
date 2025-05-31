import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from './config/passport.js';  // Assuming your passport config is in passport.js
import authRoutes from './routes/auth.js';  // Assuming your auth.js is in ./routes
import dotenv from 'dotenv';
dotenv.config({path:"../.env"});  // Load .env file
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'yourSecretKey',  // Replace with a secure secret!
    resave: false,
    saveUninitialized: false
}));

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);

// Dashboard route (protected)
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Welcome, ${req.user.displayName || req.user.email}!`);
    } else {
        res.redirect('/');
    }
});

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the home page. Please <a href="/auth/google">Login with Google</a> or <form action="/auth/login" method="POST"><input type="text" name="email" placeholder="Email" required><input type="password" name="password" placeholder="Password" required><button type="submit">Login</button></form>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
