import express from 'express';

const router = express.Router();

import redis from '../config/redis.js';


router.post('/customers', async (req, res) => {
    try {
        const { customerId, data } = req.body;
        console.log('Ingesting data for customer:', customerId, 'with data:', data);

        if (!customerId || !data) {
            return res.status(400).json({ error: 'Customer ID and data are required' });
        }

        // Store the data in Redis
        await redis.xadd('customerStream', '*', 'data', JSON.stringify({ customerId, ...data }));


        res.status(201).json({ message: 'Data ingested successfully' });
    } catch (error) {
        console.error('Error ingesting data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;