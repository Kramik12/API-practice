const mongoose = require("mongoose");
const { slugSchema, statusSchema, indexSchema } = require("./title.schema");

const ProductSchemaDef = new mongoose.Schema({
    title: {
        type: String,
    },
    ...slugSchema,
    price: {
        type: Number,
        min: 1
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    description: {
        type: String,
        default: null
    },
    discount: {
        type: Number,
        min: 0,
        max: 100
    },
    after_discount: {
        type: Number
    },
    brand: {
        type: mongoose.Types.ObjectId,
        ref: "Brand"
    },
    images: [{
        type: String,
    }],
    seller: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    is_featured: {
        type: Boolean,
        default: false
    },
    ...statusSchema,
    tag: [{
        type: String,
        default: null
    }],
    stock: {
        type: Number
    }
}, indexSchema);

const ProductModel = mongoose.model("Product", ProductSchemaDef);

module.exports = ProductModel;s