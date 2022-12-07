import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.sendStatus(401)
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRECT)
        next()
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(403)
    }

}

export default verifyToken