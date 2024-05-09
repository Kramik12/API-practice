const { response } = require("express");
const { updateRecord, deleteRecord, getRecord } = require("../services/mongodb.service");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

class UserController{
    user;
    setUser = (user) => {
        this.user = user;
    }

    update = (req, res, next) => {
        let data = req.body;
        if(req.file) {
            data.image = req.file.filename;
        }
        updateRecord('user', data, {
            _id: ObjectId(req.params.id)
        })
        .then((success) => {
            res.json({
            result: success,
            status: true,
            msg: "User updated successfully."
            })
        }) 
        .catch(error => next(error));
    }

    delete = (req, res, next) => {
        deleteRecord('users', {_id: ObjectId(req.params.id)})
        .then((success) => {
            res.json({
                result: success,
                status: true,
                msg: "User deleted Successfully."
            })
        })
        .catch(error => next(error));
    }

    show = (req, res, next) => {
        //logic
        res.json({
            result: null,
            status: true,
            msg: "User data"
        });
    }

    listAll = (req, res, next) => {
        getRecord('users')
        .then((response) => {
            res.json({
                result: response,
                status: true,
                msg: "fetched"
            })
        })
        .catch((error) => {
            next({stauts: 500, msg: error})
        })
    }
}



module.exports = UserController;