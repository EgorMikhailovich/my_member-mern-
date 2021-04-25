const mongoose = require("mongoose");
const schema = mongoose.Schema

const totalExpSchema = new schema({
    totalExpense:{
        type:Number,
    },
    userId:{
        type:schema.Types.ObjectId
    }
},
{ timestamps: true }
)

module.exports = mongoose.model("totalExpense", totalExpSchema);

