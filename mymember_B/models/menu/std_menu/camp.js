const mongoose = require("mongoose");
const schema = mongoose.Schema;

const campstdSchema = new schema(
    {
        user_id:{
            type:String
        },
        photo:{
            type:String
        },
        first_name:{
            type:String
        },
        last_name:{
            type:String
        },
        status:{
            type:String
        },
        primary_phone:{
            type:String
        },
        program_category:{
            type:String
        },
        start_date:{
            type:String
        },
        expiry_date:{
            type:String
        },
        rating:{
            type:String
        },
        belt:{
            type:String
        },
        manage:{
            type:String
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("camp_Std_menu", campstdSchema);
