const mongoose = require("mongoose");
const schema = mongoose.Schema;


const appointSchema = new schema(
    {
        title: {
            type: String,
            required: true
        },
        event: {
            type: String,
            required: true
        },
        select_One: {
            type: String,
            required: true
        },
        start_date: {
            type: String,
            required: true
        },
        end_date: {
            type: String,
            required: true
        }, start_time: {
            type: String,
            required: true
        },
        end_time: {
            type: String,
            required: true
        }, notes: {
            type: String,
            required: true
        },
        userId:{
            type:schema.Types.ObjectId
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointSchema);
