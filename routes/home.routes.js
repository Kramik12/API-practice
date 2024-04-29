const router = require("express").Router();


router.get("/", (req, res, next) => {
    res.json({
        result: "Data",
        status: true,
        msg: "Home page"
    });
})

router.get("/product/:id", (req, res, next) => {
    res.json({
        params: req.params,
        query: req.query,
        body: req.body
    })
})

router.get("/about", (req, res, next) => {
    res.json({
        result: "About us content",
        status: true,
        msg: "About us page"
    });
})
 
module.exports = router;
