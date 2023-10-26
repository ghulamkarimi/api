import express from 'express';
import dotenv from 'dotenv'; 
import userRouter from './router/userRouter.js';
import blogRouter from './router/blogRouter.js';
import cors from 'cors'
import connectDB from './config/dbConnect.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors())
app.use(express.json());
 
app.use(blogRouter)
app.use(userRouter)

const PORT = process.env.PORT |4010

app.listen(PORT, ()=>{
    console.log(`port is connected an port ${PORT}`)
})
