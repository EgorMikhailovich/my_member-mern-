const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
       
        goal_category: {type: String, required: true},

        compeleting_Date: {
            type: String,
            required: true
        },
         reminder_Date: {
            type: String,
            required: true
        }, 
        tag: {
            type: String,
            required: true
        },
         goal_status: {
            type: String,
            required: true
        },
        notes:{ type: String, required: true },
        userId:{
            type:String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Goal", todoSchema);
