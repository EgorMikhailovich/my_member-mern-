const mongoose = require("mongoose");
const schema = mongoose.Schema

const TestingSchema = new schema(
    {
        fees_name:{
            type:String,
            required:true
        },
        fees_description:{
            type:String,
            required:true
        },
        programName:{
            type:String,
            required:true
        },
        total_price:{
            type: Number,
            required:true
        },
        color:{
            type:String,
            required:true
        },
        userId:{
            type:String
        }
    },{ timestamps: true }
);

module.exports = mongoose.model("TestFees", TestingSchema);
