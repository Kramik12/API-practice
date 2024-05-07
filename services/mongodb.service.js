const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const dbURL = "mongodb://localhost:27017";
const db_name = "Backend_practice";

const dbConnection = () => {
    MongoClient.connect(dbURL, (err, client) => {
        if(err) {}
    })
}