
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const login = async (req, res) => {

    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
            if(!user) {
                return res.status(404).json({success:false, error: "User not found"});

            }
            const isMatch = await bcrypt.compare(password, user.password)
             if(!isMatch) {
               return res.status(404).json({success:false, error: "Wrong Password"});
             }
             // eslint-disable-next-line no-undef
             const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_KEY, {expiresIn: "30d"})
             res.status(200).json({success:true, token, user: {_id: user._id,name: user.name, role: user.role}})
        
    } catch(error) {
        res.status(500).json({sucess: false, error: error.message}); 
    }


};
const verify = (req, res) => {
    return res.status(200).json({success: true, user: req.user})
}
export {login, verify};