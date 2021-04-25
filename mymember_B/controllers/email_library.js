const emailLibrary = require("../models/email_library")

exports.category_list =(req,res)=>{
    emailLibrary.find({userId:req.params.userId})
    .populate('folder')
    .exec((err,categoryList)=>{
        if(err){
            res.send({error:'library category is not found'})
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
    var category = new emailLibrary(cat);
    category.save((err,data)=>{
        if(err){
            res.send({error:'library category is not add'})
        }
        else{
            res.send({msg:'library category is add successfully',category:data})
        }
    })
}

exports.updateCategory =(req,res)=>{
    emailLibrary.findByIdAndUpdate(req.params.categoryId,req.body)
    .exec((err,updateCat)=>{
        if(err){
            res.send({error:'library category is not update'})
        }
        else{
            res.send({msg:"library category is update successfully"})
        }
    })
}

exports.removeCategory =(req,res)=>{
    emailLibrary.findByIdAndRemove(req.params.categoryId)
    .exec((err,delData)=>{
        if(err){
            res.send({error:'library category is not delete'})
        }
        else{
            res.send({msg:'library category is remove successfully'})
        }
    })
}