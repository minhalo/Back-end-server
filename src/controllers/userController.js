
import userService from "../services/userService"

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let userData = await userService.handleUserLogin(email, password)
    return res.status(200).json({
        errCode: userData.errCode,
        access_token: userData.accessTokens,
        message: userData.errMessage,
    })
}

let handleRegister = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let cpassword = req.body.cpassword;

    let userData = await userService.handleUserReg(email, password, cpassword)
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
    })

}

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
}