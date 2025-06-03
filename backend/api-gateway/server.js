import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  crudRoutes from './routes/DataIngestion.js'; // Assuming you have a DataIngestion.js file for CRUD operations

const app = express();
dotenv.config("../.env");

const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: ['http://localhost:5173'], // Adjust as needed
    credentials: true, // Allow credentials if needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders:["content-type", "authorization"] // Allowed headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', crudRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the API Gateway');
});
app.listen(PORT, () => {
    console.log(`API Gateway running on http://localhost:${PORT}`);
});