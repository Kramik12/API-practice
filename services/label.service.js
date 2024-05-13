const Label = require("../models/labels.model");

class LabelService {
    addLabel = async (data) => {
        // data['type'] = "brand";
        let label = new Label(data);
        return await label.save();
    }
}

module.exports = LabelService;