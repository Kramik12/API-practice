const mongoose = require("mongoose");

const LabelSchemaDef = new mongoose.Schema({
    title: {
        type: String,
    },
    link: {
        type: String,
    },
    slug: {
        type: String,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    type: {
        type: String,
        enum: ["brand", "banner"]
    } 
}, {

    timestamps: true,
    autoCreate: true,
    autoIndex: true
});

const LabelModel = mongoose.model("Banner", LabelSchemaDef);
module.exports = LabelModel;