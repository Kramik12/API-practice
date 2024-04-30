const express = require("express");
const router = express.Router();
let AuthController = require("../controllers/auth.controller")
let auth_ctrl = new AuthController();

router.post("/login", auth_ctrl.login)

router.post("/register", auth_ctrl.register)


//export router
module.exports = router;
