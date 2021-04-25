const textNuturing = require("../models/text_nurturing")

exports.category_list = (req,res)=>{
    textNuturing.find({userId:req.params.userId})
    .populate('folder')
    .exec((err,categoryList)=>{
        if(err){
            res.send({error:'text nurturing category is not found'})
            console.log(err)
        }
        else{
            res.send(categoryList)
        }
    })
}

exports.addCategory = (req,res)=>{
    var cat ={
        categoryName: req.body.categoryName,
        userId: req.params.userId
    }
    var category = new textNuturing(cat);
    category.save((err,data)=>{
        if(err){
            res.send({error:'text nurturing category is not add'})
        }
        else{
            res.send({msg:'text nurturing category is add successfully',category:data})
        }
    })
}

exports.updateCategory =(req,res)=>{
    textNuturing.findByIdAndUpdate(req.params.categoryId,req.body)
    .exec((err,updateCat)=>{
        if(err){
            res.send({error:'text nurturing category is not update'})
        }
        else{
            res.send({msg:"text nurturing category is update successfully"})
        }
    })
}

exports.removeCategory =(req,res)=>{
    textNuturing.findByIdAndRemove(req.params.categoryId)
    .exec((err,removeCat)=>{
        if(err){
            res.send({error:'category is not removecategory remove successfully'})
        }
        else{
            res.send({error:'category remove successfully'})
        }
    })
}