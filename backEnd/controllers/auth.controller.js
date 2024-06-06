import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        
        if (password != confirmPassword) {
            return res.status(400).json({error:"Passwords do not match."})
        }

        const user = await User.findOne({ userName });
        if (user) {
        return res.status(400).json({error:"Username already exists."})
        }

        //Password Hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Generating avatars from API for boys and girls
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword, //using hashed password
            gender,
            profilePic: gender == "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            // generate JWT token here
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({error:"Invalid user data"})
        } 
    } catch(error) {
    }
}
export const login = (req, res) => {
    res.send("Log in user")
console.log("login user")
}
export const logout = (req, res) => {
    res.send("Log out user")
console.log("logout user")
}