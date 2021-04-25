const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const subcategorySchema = new mongoose.Schema(
    {
        subCategories: {
            type: String
        }, lebelName: {
            type: String
        }, color: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("subCategory_managment", subcategorySchema);
