const mongoose = require("mongoose");
const {titleSchema, statusSchema, indexSchema }= require("./title.schema");


const LabelSchemaDef = new mongoose.Schema({
   ...titleSchema,
    link: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    ...statusSchema,
    type: {
        type: String,
        enum: ["brand", "banner"]
    },
    created_by: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    } 
},indexSchema );

const LabelModel = mongoose.model("Banner", LabelSchemaDef);
module.exports = LabelModel;