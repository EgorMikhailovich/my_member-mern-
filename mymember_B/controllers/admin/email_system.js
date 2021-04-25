const emailSystem = require("../../models/email_system")

exports.category_list =(req,res)=>{
    emailSystem.find({adminId:req.params.adminId})
    .populate('folder')
    .exec((err,categoryList)=>{
        if(err){
            res.send({error:'system category is not found'})
            console.log(err)
        }
        else{
            res.send(categoryList)
        }
    })
}

exports.addCategory =(req,res)=>{
    var cat ={
        categoryName: req.body.categoryName,
        adminId: req.params.adminId,
        createdBy:'admin'
    }
    var category = new emailSystem(cat);
    category.save((err,data)=>{
        if(err){
            res.send({error:'system category is not add'})
        }
        else{
            res.send({msg:'system category is add successfully',category:data})
        }
    })
}

exports.updateCategory =(req,res)=>{
    emailSystem.findByIdAndUpdate(req.params.categoryId,req.body)
    .exec((err,updateCat)=>{
        if(err){
            res.send({error:'system category is not update'})
        }
        else{
            res.send({msg:"system category is update successfully"})
        }
    })
}

exports.removeCategory =(req,res)=>{
    emailSystem.findByIdAndRemove(req.params.categoryId)
    .exec((err,delData)=>{
        if(err){
            res.send({error:'system category is not delete'})
        }
        else{
            res.send({msg:'system category is remove successfully'})
        }
    })
}