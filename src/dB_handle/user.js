import db from "../models/index"

let check_user_by_email = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = false
            let user_email = await db.User.findOne({
                where: { email: email },
                raw: true
            })

            if (user_email) {
                check = true
            }
            resolve(check)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = check_user_by_email  