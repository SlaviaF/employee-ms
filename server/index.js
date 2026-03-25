import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.listen(process.env.PORT, ()=> console.log(`Server is running on port ${process.env.PORT}`))


