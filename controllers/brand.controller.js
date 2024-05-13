const svc = require("../services/brand.service");

const brandAdd = async (req, res, next) => {
    try {
        let data = req.body;
        if (req.files) {
            let images = [];
            req.files.map((o, i) => {
                images.push(o.filename);
            })
            data.images = images;
        }

        let success = await svc.addBrand(data)
        if(success) {
            res.json({
                result: data,
                msg: "Brand created successfully",
                status: true
            })
        } else {
            res.json({
                result: data,
                msg: "Error while adding brand",
                status: false
            })
        }

    } catch(error) {
        next({status: 400, msg: JSON.stringify(error)})
    }

}

const brandUpdate = (req, res, next) => {

}

const brandList = (req, res, next) => {

}

module.exports = {
    brandAdd,
    brandUpdate,
    brandList
}