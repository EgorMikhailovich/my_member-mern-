const mongoose = require("mongoose");
const schema = mongoose.Schema

const birthdayChecklistSchema = new schema({
 
    congratulated:{
        type:String
    },
    status:{
        type:String,
        required:true
    },
    invite_given:{
        type:String,
        required:true
    },
    party_date:{
        type:String,
        required:true
    },
    card_given:{
        type:String
    },
    gift_givent:{
        type:String
    },
    package:{
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userId:{
        type:String
    }

},
{ timestamps:true }
)

module.exports = mongoose.model("birthdaycheckList", birthdayChecklistSchema);

