const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const managestripeSchema = new mongoose.Schema(
    {
        stripeName:{
            type:String,
            required:true
        },
        day_to_ready:{
            type:Number,
            required:true
        },
        lessons_to_ready:{
            type:Number,
            required:true
        },
        stripe_order:{
            type:Number,
            required:true
        },
        manage_stripe_image:{
            type:String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("manageStripe", managestripeSchema);
