const campModal = require("../models/camp")

exports.create = (req,res)=> {
    var campObj = new campModal(req.body)
    campObj.save((err,data)=>{
        if(err){
            res.send({error:'camp is not create'})
        }
        else{
            campModal.findByIdAndUpdate({_id:data._id},{$set:{ userId:req.params.userId }})
            .exec((err,data)=>{
                if(err){
                    res.send({error:'user id is not add in camp'})
                }
                else{
                    res.send({msg:'camp is add successfully'})
                }
            })
        }
    })
}

exports.read = (req,res)=> {
    campModal.find({userId:req.params.userId})
    .exec((err,data)=>{
        if(err){
            res.send({error:'camp list not found'})
        }
        else{
            res.send(data)
        }
    })
}

exports.camp_info = (req,res)=>{
    campModal.findById(req.params.campId)
    .exec((err,data)=>{
        if(err){
            res.send({error:'camp info is not found'})
        }
        else{
            res.send(data)
        }
    })
}

exports.update_camp = (req,res)=>{
    campModal.findByIdAndUpdate(req.params.campId,req.body)    
    .exec((err,data)=>{
        if(err){
            res.send({error:'camp is not update'})
        }
        else{
            res.send({msg:'camp is update successfully'})
        }
    })
}

exports.delete_camp =(req,res)=>{
    campModal.findByIdAndRemove(req.params.campId,(err,data)=>{
        if(err){
            res.send({error:'camp is not remove'})
        }
        else{
            res.send({msg:'camp is remove successfully'})
        }
    })
}

