const mongoose = require("mongoose");
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
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: 'inactive'
    }
    // role_id: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Role"
    // }
}, {
    timestamps: true,
    autoIndex: true,
    autoCreate: true
});

const User = mongoose.model("User", UserSchemaDef);
module.exports = User;