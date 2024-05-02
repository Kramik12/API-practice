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
    
    //if single file upload, req.file
    //multiple file upload, req.files

    let data = req.body;
    if(req.file){
        data.image = req.file.filename;
    }

        res.json({
            result: data,
            status: true,
            msg: "Register page"
        });
    }
}

module.exports = AuthController;