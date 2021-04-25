const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

const schema = mongoose.Schema;
const programSchema = new schema(
    {
        programName:{
            type: String,
            required: true,
            maxlength: 32
        },
        color:{
            type: String,
            required: true
        },
        lable: {
            type: Number,
            required:true
        },
        total_rank:{
            type: Number,
            required: true
        },
        progression: {
            type: String,
            required:true
        },
        type: {
            type: String,
            required:true
        },
        program_image:{
            type: String
        },
        requirement: {
            type: String
        },
        program_category:[{
            type: schema.Types.ObjectId,
            ref:"pcategory"
        }],
        program_rank:[{
            type:schema.Types.ObjectId,
            ref:"Program_rank"
        }],
        userId:{
            type:String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Program", programSchema);
