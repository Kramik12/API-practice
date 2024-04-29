const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
    res.json({
        result: "Login contents",
        status: true,
        msg: "Login page"
    });
})

router.get("/register", (req, res, next) => {
    res.json({
        result: "Register contents",
        status: true,
        msg: "Register page"
    });
})

//export app
module.exports = router;
