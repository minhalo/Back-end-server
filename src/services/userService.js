import db from "../models/index"
import bcrypt from 'bcryptjs'
import data_for_user from '../Validators/register'
import check_user_by_email from "../dB_handle/user"
import check_user_by_email_login from '../dB_handle/login'
import data_for_user_login from "../Validators/login"
import jwt from "jsonwebtoken"

let handleUserReg = (email, password, cpassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let user = await check_user_by_email(email)
            let register_check_validator = await data_for_user(email, password, cpassword)
            if (register_check_validator.validate) {
                if (!user) {
                    const hash = bcrypt.hashSync(password, 10);
                    let ok = {
                        email: email,
                        password: hash,
                    }
                    await db.User.create(ok)

                    userData.errCode = 0;
                    userData.errMessage = "Pass validation";
                }
                else {
                    userData.errCode = 1;
                    userData.errMessage = "Account already exists";
                }
            }
            else {
                if (register_check_validator.errors_pass) {
                    userData.errCode = 2;
                    userData.errMessage = register_check_validator.errors_pass;
                }
                if (register_check_validator.errors_email) {
                    userData.errCode = 3;
                    userData.errMessage = register_check_validator.errors_email;
                }
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let user = await check_user_by_email_login(email)
            let login_user_validator = await data_for_user_login(email, password)
            if (login_user_validator.validate) {
                if (user.isvalid) {
                    let check = bcrypt.compareSync(password, user.password)
                    if (check) {
                        const accessToken = jwt.sign(user.account, process.env.ACCESS_TOKEN_SECRET)
                        const refreshtoken = jwt.sign(user.account, process.env.REFRESH_TOKEN_SECRET)
                        userData.errCode = 0;
                        userData.errMessage = "Pass validation";
                        userData.accessTokens = accessToken;
                        await db.User.update(
                            { refreshtoken: refreshtoken },
                            { where: { id:user.account.id } }
                        )
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = "Wrong password"
                    }
                }
                else {
                    userData.errCode = 2;
                    userData.errMessage = "Wrong username"
                }
            }
            else {
                if (login_user_validator.errors_pass) {
                    userData.errCode = 1;
                    userData.errMessage = login_user_validator.errors_pass;
                }
                if (login_user_validator.errors_email) {
                    userData.errCode = 2;
                    userData.errMessage = login_user_validator.errors_email;
                }
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}



module.exports = {
    handleUserLogin: handleUserLogin,
    handleUserReg: handleUserReg,
}






// let userData = {}
// let user = await db.User.findOne({
//     where: { email: email },
//     attributes: ['email', 'password'],
//     raw: true
// })
// if(user){
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//     userData.errCode = 0
//     userData.accessTokens = accessToken
// }
// resolve(userData)