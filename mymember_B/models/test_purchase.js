const mongoose = require('mongoose')
const schema = mongoose.Schema
const testpurchaseSchema = new schema({
    student_name:{
        type:String,
        required:true
    },
    total_price:{
        type:Number,
    },
    ptype:{
        type:String,
        required:true
    },
    test_info:{
        type:Object,
    },
    purchase_date:{
        type:String,
        required:true
    },
    check_number:{
        type:String,
    },
    card_number:{
        type:String
    },
    card_holder_name:{
        type:String
    },
    cvv_number:{
        type:String
    },
    expiry_date:{
        type:String
    },
    
},
 { timestamps:true }
)

module.exports = mongoose.model("testpurchase", testpurchaseSchema);