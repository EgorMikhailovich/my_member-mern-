const mongoose = require("mongoose");
var schema = mongoose.Schema;
var psubcategorySchema = new schema(
    {
       subcategory:{
            type: String,
            required: true,
        },
        lable:{
            type:String,
            require:true
        },
        color:{
            type:String,
            require:true
        },
        category:{
            type:String,
            require:true
        }
    },
);

module.exports = mongoose.model("psubcategory", psubcategorySchema);
