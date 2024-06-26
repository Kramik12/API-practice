let router = require("express").Router();

const UserController = require("../controllers/user.controller");
const usr_ctrl = new UserController();
const uploader = require("../middleware/uploader.middleware");

router.route('/')
    .get(usr_ctrl.listAll)
    // .post()

router.route("/:id")
    .put(uploader.single('image'), usr_ctrl.update)
    .delete(usr_ctrl.delete)
    .get(usr_ctrl.show)


module.exports = router;
