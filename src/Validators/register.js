import Validator from "validatorjs";

let data_for_user = (email, password, cpassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check_pad = {}

      let data = {
        email: email,
        password: password,
        password_confirmation: cpassword
      }

      let register = {
        email: 'required|email',
        password: ['required', `regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,20}$/`, 'confirmed'],
        password_confirmation: ['required'],
      };
      let validation = new Validator(data, register);

      check_pad.validate = validation.passes()
      check_pad.errors_pass = validation.errors.first('password')
      check_pad.errors_email = validation.errors.first('email')
      resolve(check_pad)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = data_for_user  