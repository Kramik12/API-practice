const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/Backend_practice";

mongoose.connect(dbUrl, {
    autoIndex: true,
    autoCreate: true
}, (err) => {
    if(err) {
        console.log("Error while connecting db...");
    } else {
        console.log("DB connection successfully.");
    }
});
