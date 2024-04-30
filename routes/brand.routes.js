const { brandList, brandAdd } = require("../controllers/brand.controller");

const router = require("express").Router();

router.route('/')
.get(brandList)
.post(brandAdd)

router.route('/:id')
.get((req, res, next) => {})
.put((req, res, next) => {})
.delete((req, res, next) => {})

module.exports = router;
