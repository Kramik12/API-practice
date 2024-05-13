const jwt = require("jsonwebtoken"); 
const CONSTANTS = require("../config/constants");
const IsLoggedIn = (req, res, next) => {
    let token = '';
    if(req.headers['authorization']){
        token = req.headers['authorization'];
    }

    if(req.headers['x-xsrf-token']){
        token = req.headersy['x-xsrf-token'];
    }

    if(req.query['token']){
        token = req.query['token'];
    }

    if(token) {

        let parts = token.split(" ");

        if(parts.length > 1){
            token = parts[FindOperators.length-1];
        }
        else {
            token = parts[0];
        }
         let data = jwt.verify(token, CONSTANTS.JWT_SECRET);
         if(data) {
            //token verify
            User.findById(data.id)
            .then((user) => {
                if(user){
                    next();
                } else {
                    next({
                        status: 403,
                        msg: "User does not exist anymore"
                    })
                }
            })
            .catch((error) => {
                next({
                    status: 500,
                    msg: JSON.stringify(error)
                })
            })
            
         } else {
            next({
                status: 403,
                msg: "Invalid token or token expired"
            })
         }
    } else {
        next({
            status: 403,
            msg: "Unauthorized access"
        })
    }

}

module.exports = IsLoggedIn;