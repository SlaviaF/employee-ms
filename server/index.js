import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use('auth/auth', authRouter); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.listen(process.env.PORT, ()=> console.log(`Server is running on port ${process.env.PORT}`))


