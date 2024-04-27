const express = require("express");
const app = express();

app.get("/login", (req, res) => {
    res.json({
        result: "Login contents",
        status: true,
        msg: "Login page"
    });
})

app.get("/register", (req, res) => {
    res.json({
        result: "Register contents",
        status: true,
        msg: "Register page"
    });
})

//export app
module.exports = app;
