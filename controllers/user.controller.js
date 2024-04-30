class UserController{

    update = (req, res, next) => {
        res.json({
            result: null,
            status: true,
            msg: "User updated"
        });
    }
    delete = (req, res, next) => {
       //logic
       res.json({
        result: null,
        status: true,
        msg: "User deleted"
        });
        
    }
    show = (req, res, next) => {
        //logic
        res.json({
            result: null,
            status: true,
            msg: "User data"
        });
    }
}



module.exports = UserController;