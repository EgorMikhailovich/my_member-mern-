const EmailSystem = require("../models/email_system")

exports.category =(req,res)=>{
    EmailSystem.find({$or:[{userId:req.params.userId},{createdBy:'admin'}]})
    .populate('folder')
    .exec((err,systemCat)=>{
        if(err){
            res.send({error:'system category is not found'})
        }
        else{
            res.send(systemCat)
        }
    })
}
