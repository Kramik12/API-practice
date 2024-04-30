let router = require("express").Router();
const UserController = require("../controllers/user.controller");
const usr_ctrl = new UserController();

router.route("/user/:id")
    .put(usr_ctrl.update)
    .delete(usr_ctrl.delete)
    .get(usr_ctrl.show)


module.exports = router;
