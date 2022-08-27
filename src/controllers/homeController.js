import db from '../models/index'

let getHomepage = async (req, res) => {
    return res.render('homepage.ejs')
}

module.exports = {
    getHomepage: getHomepage,
}