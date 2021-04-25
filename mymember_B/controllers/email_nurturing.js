const emailNurturing = require("../models/email_nurturing")

exports.category_list =(req,res)=>{
    emailNurturing.find({userId:req.params.userId})
    .populate('folder')
    .exec((err,categoryList)=>{
        if(err){
            res.send({error:'compose category is not found'})
            console.log(err)
        }
        else{
            res.send(categoryList)
        }
    })
}

exports.addcategory = (req,res)=>{
    var cat ={
        categoryName: req.body.categoryName,
        userId: req.params.userId
    }
    var category = new emailNurturing(cat);
    category.save((err,data)=>{
        if(err){
            res.send({error:'category is not add'})
        }
        else{
            res.send({msg:'category is add successfully',category:data})
        }
    })
}

exports.updateCategory =(req,res)=>{
    emailNurturing.findByIdAndUpdate(req.params.categoryId,req.body)
    .exec((err,updateCat)=>{
        if(err){
            res.send({error:'category is not update'})
        }
        else{
            res.send({msg:"category is update successfully"})
        }
    })
}

exports.removeCategory =(req,res)=>{
    emailNurturing.findByIdAndRemove(req.params.categoryId)
    .exec((err,delData)=>{
        if(err){
            res.send({error:'category is not delete'})
        }
        else{
            res.send({msg:'category is remove successfully'})
        }
    })
}