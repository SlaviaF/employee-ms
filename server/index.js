import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter); 

const startServer = async () => {
  try {
    await connectToDatabase();

    app.listen(process.env.PORT, () =>
      console.log(`Server is running on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    throw error; 
  }
};

startServer();
// eslint-disable-next-line no-undef
app.listen(process.env.PORT, ()=> console.log(`Server is running on port ${process.env.PORT}`))


