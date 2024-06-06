import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userID, res) => {
    const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //15 days converted to miliseconds
        httpOnly: true,  //prevents XSS attacks cross-site scripting attacks
        sameSite: "strict", //CSRF attacks cross-site request forgery attacks
    });
};

export default generateTokenAndSetCookie;