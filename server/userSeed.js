import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './models/User.js';

const connectToDatabase = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected!');
}

const userRegister = async () => {
    await connectToDatabase(); 
    try {
        const hashPassword = await bcrypt.hash("admin", 10);
        const newUser = new User({
            name: "Admin", 
            email: "admin@gmail.com", 
            password: hashPassword, 
            role: "admin"
        });
        await newUser.save();
    } catch(error) {
        console.log(error);
    } finally {
        await mongoose.connection.close();
    }
}

userRegister();