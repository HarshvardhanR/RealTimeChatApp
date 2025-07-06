import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import {connectDB} from '../src/lib/db.js'

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("Server listening on PORT: "+ PORT);
    connectDB(); 
})