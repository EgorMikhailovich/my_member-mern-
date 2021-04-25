const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema(
    {
        programName:{
            type:String,
            required:true
        },
        category: {
            type: String,
            required: true
        },
        subCategory: [{
            type:ObjectId,
            ref:"subCategory_managment"
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("category_managment", categorySchema);
