import express from 'express';
import authRoutes from './routes/auth.route.js'
const app = express();

app.use("/auth/api", authRoutes);
app.listen(5001, ()=>{
    console.log("Server listening on port 5001");
})