//ini kode untuk authorization yaitu pengenalan user 

//import jsonwebtoken
const jwt = require("jsonwebtoken")
const SECRET_KEY = "TokoKomputer"

//endpoint
auth = (req, res, next) => {
    let header = req.headers.authorization
    let token = header && header.split(" ")[1]//ngambil token aja dari semua headers

    let jwtHeader = {
        algorithm: "HS256"
    }

    if(token == null){
        res.status(401).json({ message: "Unauthorized"})
    }else{
        jwt.verify(token, SECRET_KEY, jwtHeader, (error,user) => {
            if (error) {
                res.status(401).json({
                    message: "Invalid token"
                })
            } else {
                console.log(user);
                next()
            }
        })
    }
} //next middle where
module.exports = auth