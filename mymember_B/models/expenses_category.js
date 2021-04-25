const { uniqueId } = require("lodash");
const mongoose = require("mongoose");
const schema = mongoose.Schema

const expenses_category_Schema = new schema({
    expense_category_type:{
        type:String,
        required:true,
    },  
    color:{
        type:String,
        required:true
    },
    userId:{
        type:schema.Types.ObjectId
    },
    expenses:[{
        type:Object,
        ref:"Expense"
    }]
},
{ timestamps: true }
)

module.exports = mongoose.model("expenseCategory", expenses_category_Schema);

