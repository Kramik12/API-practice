const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        result: "Data",
        status: true,
        msg: "Home page"
    });
})

app.get("/product/:id", (req, res) => {
    res.json({
        params: req.params,
        query: req.query,
        body: req.body
    })
})

app.get("/about", (req, res) => {
    res.json({
        result: "About us content",
        status: true,
        msg: "About us page"
    });
})
 
module.exports = app;
