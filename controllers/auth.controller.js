
const { response } = require("express");
const { addRecord, getRecord } = require("../services/mongodb.service");
const { MongoClient, ObjectId } = require("mongodb");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const CONSTANTS = require("../config/constants");
class AuthController {
    login = async (req, res, next) => {
        let data = req.body;
        try {
            let result = await User.findOne({
                email: data.email
            });

            console.log(result);

            if (result) {
                //password check
                if(bcrypt.compareSync(data.password, result.password)){

                    let token = this.generateToken({
                        id: result._id,
                        name: result.name,
                        email: result.email,
                        role: result.role
                    })

                    myEvents.emit("hello");
                    
                    res.json({
                        result: {
                            token: token,
                            user: result
                        },
                        status: true,
                        msg: "You are successfully logged in"
                    })
                } else{
                    next({status: 400, msg: "Password does not match"})
                }
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
    register = async (req, res, next) => {

        //if single file upload, req.file
        //multiple file upload, req.files

        let data = req.body;
        if (req.file) {
            data.image = req.file.filename;
        }

        try{
            //let use = getRecord('users', {email: data.email});

            let user = await User.findOne({
                email: data.email
            })
            if(user) {
                next({ status: 400, msg: "Email already taken"})
            } else {
                data['password'] = bcrypt.hashSync(data['password'], 10);

                //addRecord('users', data)
                let user = new User(data);
                user.save()
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

    generateToken = (data) => {
        let token = jwt.sign(data, CONSTANTS.JWT_SECRET);
        return token;
    }
}

module.exports = AuthController;