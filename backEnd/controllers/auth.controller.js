import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        console.log("Request Body:", req.body); 
        if (password !== confirmPassword) {
            return res.status(400).json({error:"Passwords do not match."})
        }

        const user = await User.findOne({ userName });
        if (user) {
        return res.status(400).json({error:"Username already exists."})
        }

        //Password Hashing
        const salt = await bcrypt.genSalt(10);
        console.log("Salt generated:", salt);
        if (!password || !salt) {
          console.error("Password or salt is undefined");
          return res.status(500).json({ error: "Server error" });
        }
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Hashed Password:", hashedPassword);

        // Generating avatars from API for boys and girls
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
          fullName,
          userName,
          password: hashedPassword, //using hashed password
          gender,
          profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
        });

        if (newUser) {
            // generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);
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
    } catch (error) {
        console.log("Error in signup controller", error.message);
        return res.status(500).json({ error: "Server error" });
    }
}
export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
        return res.status(400).json({error: "invalid username or password"})
        }
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
          _id: user._id,
          fullName: user.fullName,
          userName: user.userName,
          profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("Error in login controller", error.message)
    return res.status(500).json({ error: "Server error" });
    }
}
export const logout = (req, res) => {
    res.send("Log out user")
console.log("logout user")
}