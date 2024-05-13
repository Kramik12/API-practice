const { brandList, brandAdd } = require("../controllers/brand.controller");

const router = require("express").Router();

const uploader = require("../middleware/uploader.middleware");
const IsLoggedIn = require("../middleware/logincheck.middleware");

router.route('/')
.get(brandList)
.post(IsLoggedIn, uploader.single('image'), brandAdd)

router.route('/:id')
.get((req, res, next) => {})
.put(IsLoggedIn, (req, res, next) => {})
.delete(IsLoggedIn, (req, res, next) => {})

module.exports = router;
