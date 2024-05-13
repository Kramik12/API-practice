const LabelService = require("../services/label.service");
const { successResponse, errorResponse } = require("../utilities/helpers");
const svc = new LabelService();

const brandAdd = async (req, res, next) => {
    try {
        let data = req.body;
        if (req.files) {
            data.image = req.file.filename;
        }

        data.type = "brand";

        let success = await svc.addBrand(data)
        if(success) {
            res.json(successResponse(data, "Brand Created Successfully."))
            
        } else {
            res.json(errorResponse("Error while creating brand."))
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