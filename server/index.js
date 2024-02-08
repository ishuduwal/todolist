import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/Todo.js';
import userrouter from './routes/User.js';

const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true })) 
app.use(cors());
app.use('/', routes);
app.use('/user', userrouter);
const PORT = process.env.port || 5000
mongoose.connect(process.env.mongodb).then(() =>
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))).catch(err => console.log(err))
