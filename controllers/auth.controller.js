class AuthController{
    login = (req, res, next) => {
        let data = req.body;

        res.json({
            result: data,
            status: true,
            msg: "Login page"
        })
    }
   register = (req, res, next) => {
        res.json({
            result: "Register contents",
            status: true,
            msg: "Register page"
        });
    }
}

module.exports = AuthController;