const multer = require("multer");

const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let path = "uploads/";
        cb(null, path)
    },
    filename: (req, file, cb) => {
        let filename = Date.now()+file.originalname;
        cb(null, filename);
    }
})

const uploader = multer({
    storage: myStorage,
    limits: 5*1024*1024, // not mandatory
    fileFilter: (req, file, cb) => {
        let ext_parts = file.originalname.split(".");
        let ext = ext_parts.pop();

        let allowed = ['jpg', 'png', 'jpeg', 'gif', 'bmp', 'webp', 'svg'];
        if(allowed.includes(ext.toLowerCase())){
            cb(null, true);
        } else {
            cb(true, null);
        }
    }
});

module.exports = uploader;