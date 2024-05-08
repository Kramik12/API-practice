const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const dbURL = "mongodb://localhost:27017";
const db_name = "Backend_practice";

const dbConnection = (cb) => {
    MongoClient.connect(dbURL, (err, client) => {
        if(err) {
            cb({status: 500, msg: "Error connecting db server"})
        } else {
            const db = client.db(db_name);
            cb(null, db)
        }
    })
}

const addRecord = (table, data) => {
    return new Promise((resolve, reject) => {
        if(err) {
            return reject(err);
        } else {
            db.collection(table).insertOne(data)
            .then((ack) => {
                return resolve(ack);
            })
            .catch((error) => {
                return reject({status: 400, msg: error});
            })
        
        }
    })
}

const getRecord = (table, filter) => {
    return new Promise((resolve, reject) => {
        dbConnection((err, db) => {
            if(err) {
                reject(err);
            } else {
                db.collection(table).find(filter)
                .toArray()
                .then((data) => {
                    return resolve(data);
                })
                .catch((error) => {
                    return reject({status: 500, msg:error})
                })
            }
        })
    })
}

const updateRecord = (table, filter) => {
    return new Promise((resolve, reject) => {
        dbConnection((err, db) => {
            if(err) {
                return reject(err);
            } else {
                db.collection(table).updateMany(filter, {
                    $set: data
                })
                .then((success) => {
                    return resolve(success);
                })
                .catch((success) => {
                    return reject({status: 500, msg:error})
                })
            }
        })
    })
}

const deleteRecord = (table, filter) => {
    return new Promise((resolve, reject) => {
        dbConnection((err, db) => {
            if(err){
                return reject(err);
            } else {
                db.collection(table).deleteMany(filter)
                .then((success) => {
                    return resolve(success);
                })
                .catch((error) => {
                    return reject({status:500, msg:error})
                })
            }
        })
    })
}

module.exports = {addRecord, getRecord, updateRecord, deleteRecord};