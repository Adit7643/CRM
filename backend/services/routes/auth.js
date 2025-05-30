import express from 'express';
import login from '../controllers/authController.js';

var router = express.Router();

router.post('/login', login);

export default router;