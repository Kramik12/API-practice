const mongoose = require("mongoose");

const BrandSchemaDef = new mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    }
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
});

const BrandModel = mongoose.model("Brand", BrandSchemaDef);

module.exports = BrandModel;