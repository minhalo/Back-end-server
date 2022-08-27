import db from "../models/index"

let check_user_by_email_login = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = false
                 
            let user_email = await db.User.findOne({
                where: { email: email },
                raw: true
            })

            let user = {
                isvalid: check,
                password: 0
            }

            if (user_email) {
                check = true
                user.isvalid = check
                user.password = user_email.password
                user.account = {
                    id: user_email.id,
                    email: user_email.email
                }
            }
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = check_user_by_email_login