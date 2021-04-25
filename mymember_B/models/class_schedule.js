const mongoose = require("mongoose");
const schema = mongoose.Schema
const scheduleSchema = new schema(
    {
        program_name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        program_color:{
            type:String,
        },
        class_name: { type: String, required: true },
        start_date: {
            type: String,
            required: true
        },
         end_date: {
            type: String,
            required: true
        },
         start_time: {
            type: String,
            required: true
        },
         end_time: {
            type: String,
            required: true
        },
        repeat_weekly_on: { type: Array, required: true },
        userId:{
            type:String
        },
        class_attendance:[{
            type:schema.Types.ObjectId,
            ref:"attendence"
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Class_schedule", scheduleSchema);
