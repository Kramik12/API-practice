const { brandList, brandAdd } = require("../controllers/brand.controller");

const router = require("express").Router();

const uploader = require("../middleware/uploader.middleware");


router.route('/')
.get(brandList)
.post(uploader.array('image'), brandAdd)

router.route('/:id')
.get((req, res, next) => {})
.put((req, res, next) => {})
.delete((req, res, next) => {})

module.exports = router;
