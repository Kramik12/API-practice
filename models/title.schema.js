let slugSchema = {
    slug: {
        type: String,
        unique: true
    }
}
let titleSchema = {
    title: {
        type: String,
        unique: true,
    },
    ...slugSchema
};
let statusSchema = {
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
}
let indexSchema = {
    timestamps: true,
    autoCreate: true,
    autoIndex: ture
}
module.exports = {titleSchema, statusSchema, indexSchema, slugSchema};