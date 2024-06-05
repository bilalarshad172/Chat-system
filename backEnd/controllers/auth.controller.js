export const signup = async (req, res) => {
    try {
        const {fullName, userName, password, confirmPassword, gender } = req.body;
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