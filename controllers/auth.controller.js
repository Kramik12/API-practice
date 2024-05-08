
const { response } = require("express");
const { addRecord, getRecord } = require("../services/mongodb.service");
const { MongoClient, ObjectId } = require("mongodb");

class AuthController {
    login = (req, res, next) => {
        let data = req.body;
        try {
            let result = getRecord('users', {
                email: data.email,
                password: data.password
            });
            if (result && result.length) {
                res.json({
                    result: result,
                    status: true,
                    msg: "You are successfully logged in"
                })
            } else {
                res.json({
                    result: null,
                    status: false,
                    msg: "User not found"
                })
            }
        } catch(error) {
            next(error);
        }

    }
    register = (req, res, next) => {

        //if single file upload, req.file
        //multiple file upload, req.files

        let data = req.body;
        if (req.file) {
            data.image = req.file.filename;
        }

        try{
            let use = getRecord('users', {email: data.email});
            if(user && user.length) {
                next({ status: 400, msg: "Email already taken"})
            } else {
                addRecord('users', data)
                .then((response) => {
                    res.json({
                        result: response,
                        status: true,
                        msg: "User registered successfully"
                    })
                })
                .catch((error) => {
                    next(error);
                })
            }
        }
        catch(error) {
            next(error);
        }
        
    }
    getUserById = async(req, res, next) => {
        // MongoClient.connect(dbUrl, (err, client) => {
        //     if(err) {
        //         next(err);
        //     } else {
        //         let db = client.db('Backend_practice');
        //         db.collection('users').find({_id: ObjectId(req.params.id) })
        //         .toArray()
        //         .then((user) => {
        //             //user
        //         })
        //     }
        // })
    }

}

module.exports = AuthController;