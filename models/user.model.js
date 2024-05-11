const mongoose = require("mongoose");
const { indexSchema, statusSchema } = require("./title.schema");
const LocationSchema = new mongoose.Schema({
    location: String
});
const UserSchemaDef = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        shipping: LocationSchema,
        billing: LocationSchema
    },
    role: {
        type: String,
        enum: ['admin', 'seller', 'customer'],
        default: 'customer'
    },
    image: [{
        type: String
    }],
    date_of_birth: {
        type: Date
    },
    ...statusSchema
}, indexSchema);

const User = mongoose.model("User", UserSchemaDef);
module.exports = User;