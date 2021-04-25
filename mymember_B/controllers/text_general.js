const textGen = require("../models/text_general")

exports.listCat = (req,res)=>{
    textGen.find({userId:req.params.userId})
    .populate('folder')
    .exec((err,listGen)=>{
        if(err){
            console.log(err)
            res.send({error:'text genral list not found'})
        }
        else{
            res.send(listGen)
        }
    })
}

exports.addcategory = (req,res)=>{
    var GenObj = new textGen(req.body)
    GenObj.save((err,txtGen)=>{
        if(err){
            res.send({error:'text genral category is not create'})
        }
        else{
            console.log(txtGen)
            textGen.findByIdAndUpdate(txtGen._id,{$set:{userId:req.params.userId}})
            .exec((err,txtupdate)=>{
                if(err){
                    res.send({error:'user id is not add in text general'})
                }
                else{
                    res.send({msg:'genral category add successfully',data:txtGen})
                }
            })
        }
    })
}

exports.updateCategory =(req,res)=>{
    textGen.update({_id:req.params.catId},req.body)
    .exec((err,updatecat)=>{
        if(err){
            res.send({error:'genral category is not update'})
        }
        else{
            res.send(updatecat)
        }
    })
}

exports.removeCat =(req,res)=>{
    textGen.remove({_id:req.params.catId},(err,removeCat)=>{
        if(err){
            res.send({error:'genral cat is not remove'})
        }
        else{
            res.send(removeCat)
        }
    })
}
