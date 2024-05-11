let titleSchema = {
    title: {
        type: String,
        unique: true,
    },
    slug: {
        type: String,
        unique: true
    }
};
module.exports = titleSchema;