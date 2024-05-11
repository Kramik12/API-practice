const mongoose = require("mongoose");

const CategorySchemaDef = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    parent_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        default: null
    },
    slug: {
        type: String,
        unique: true
    },
    summary: {
        type: String
    },
    image: {
        type: String
    },
    status: {
        type: String,
        enum: ["active", "inactive"]
    }
});

const CategoryModel = mongoose.model("Category", CategorySchemaDef);
module.exports = CategoryModel;