import mongoose from "mongoose";
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB');
        
    } catch (err) {
        console.error('DB connection failed:', err);
        process.exit(1); // stop the server if DB fails
    }

}

export default connectToDatabase;