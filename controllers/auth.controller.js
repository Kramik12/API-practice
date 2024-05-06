const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://localhost:27017";
const dbname = "Backend_practice";
class AuthController{
    login = (req, res, next) => {
        let data = req.body;
        //db query
        res.json({
            result: data,
            status: true,
            msg: "Login page"
        })
    }
   register = (req, res, next) => {
    
    //if single file upload, req.file
    //multiple file upload, req.files

    let data = req.body;
    if(req.file){
        data.image = req.file.filename;
    }
        // db query
        MongoClient.connect(dbURL);
        res.json({
            result: data,
            status: true,
            msg: "Register page"
        });
    }
}

module.exports = AuthController;