const psubcategory = require("../models/psubcategory");
const pcategory = require("../models/pcategory");
const { deleteOne, $where } = require("../models/psubcategory");

exports.create = (req, res) => {
    console.log(req.body)
    var categoryId = req.params.catId;
    var category = req.body.category;
    var subcategoryDetails = category.subcatdetails;

    for (let row of subcategoryDetails) {
        obj = {
            subcategory: row.subcategoryname,
            color: row.color,
            lable: row.lable,
            category: category.name
        }
        var psubcategoryObj = new psubcategory(obj)
        console.log(psubcategoryObj)
        psubcategoryObj.save((err, data) => {
            if (err) {

                res.send({ error: 'subcategory not add' })
            }
            else{
                
                pcategory.findByIdAndUpdate({ _id: categoryId }, { $push: { program_subcategory: data._id } })
                    .exec((err, data) => {
                        if (err) {
                            res.send({ error: 'subcategory not push in category' })
                        }
                        else {
                            res.send({ msg: 'subcategory add successfully',data })
                        }
                    })
            }
        })
    }
}

exports.update = (req, res) => {
    var categoryId = req.params.catId;
    var subcategoryId = req.params.sub_catId;
    var obj = req.body;

    psubcategory.findByIdAndUpdate({ _id: subcategoryId }, {  $set: { subcategory: obj.subcategoryname, color: obj.color, lable: obj.lable } })
        .exec((err, subcategorydata) =>{
            if (err) {
                res.send({ error: 'subcategory is not update' })
            }
            else {
                res.send({ result: 'subcategory is  update successfully' })
            }
     })
}

exports.remove = (req,res)=>{
    var categoryId = req.params.catId;
    var subcategoryId = req.params.sub_catId;

            psubcategory.findOneAndRemove({_id:subcategoryId},(err,data)=>{
                if(err){
                    res.send({error:'subcategory is not delete'})
                }
                else{
                  pcategory.update({"program_subcategory":subcategoryId},{$pull:{"program_subcategory":subcategoryId}},
                    function(err,data){
                        if(err){
                            res.send({error:'subcategory is not delete from category'})
                        }
                        else{
                            res.send({error:'subcategory is delete from category'})
                        }
                    })
                             
                }
            })
}