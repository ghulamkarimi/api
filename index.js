import express from 'express';
import dotenv from 'dotenv'; 
import userRouter from './router/userRouter.js';
import blogRouter from './router/blogRouter.js';
import cors from 'cors'
import connectDB from './config/dbConnect.js';

dotenv.config();
connectDB();

const app = express();
const baseUrl = "/api/"
app.use(cors())
app.use(express.json());
 
app.use(`${baseUrl}blog`,blogRouter)
app.use(`${baseUrl}user`,userRouter)

const PORT = process.env.PORT |4008

app.listen(PORT, ()=>{
    console.log(`port is connected an port ${PORT}`)
})
