const Label = require("../models/labels.model");

class BrandService {
    addBrand = async (data) => {
        data['type'] = "brand";
        let brand = new Label(data);
        return await brand.save();
    }
}