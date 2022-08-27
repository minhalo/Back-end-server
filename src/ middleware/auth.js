import jwt from 'jsonwebtoken'

const auth = (req,res,next) => {
    let author = req.headers.authorization
    // console.log(author.split(' ')[1])
    next()
}


module.exports = auth