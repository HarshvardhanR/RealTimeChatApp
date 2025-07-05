import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import {connectDB} from '../src/lib/db.js'

const app = express();
app.use(express.json());
dotenv.config();
app.use("/auth/api", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("Server listening on PORT: "+ PORT);
    connectDB(); 
})