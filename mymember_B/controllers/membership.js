const membershipModal = require('../models/membership')
const cloudinary = require("cloudinary").v2
const cloudUrl = require("../gcloud/imageUrl")

exports.create = (req,res)=>{
    console.log(req.body,req.file)
    var Id = req.params.userId;
    var membershipDetails = req.body;
    var membershipObj = new membershipModal(membershipDetails);
    membershipObj.save((err,data)=>{
        if(err){
            console.log(err)
            res.send({error :'membership not add'})
        }
        else{
        if(req.file){
            cloudUrl.imageUrl(req.file).then((expimgUrl)=>{ 
                membershipModal.findByIdAndUpdate(data._id,{$set:{membership_profile:expimgUrl,userId: Id}})
                .exec((err,updateStripe)=>{
                    console.log(updateStripe)
             if(err){
                    res.send({error:'image url is not add in membership'})
                  }
            else{
                res.send({msg:'membership is add with image successfully',result:data})
            }
          })
        }).catch((error)=>{
                res.send({error:'membership image url is not create'})
        })
     }
        else{
            membershipModal.findByIdAndUpdate({_id:data._id},{$set:{ userId:Id }})
            .exec((err,membershipData)=>{
                if(err){
                    res.send({error:'user id is not add in membership'});
                }
                else{
                    res.send({msg:'membership add successfully',result:membershipData});
                }
            })
        }
    }
 })
}

exports.read =(req,res)=>{
        membershipModal.find({userId : req.params.userId}).exec((err,data)=>{
            
            if(err){
                res.send({error:'membership list is not find'});
            }
            else{
                if(data.length>0){
                    res.send(data);    
                }
                else{
                    res.send({msg:'membership list is empty'})
                }
            }
     })
}

exports.membershipInfo =(req,res)=>{
    var membershipId = req.params.membershipId;
    membershipModal.findById(membershipId).exec((err,data)=>{
        if(err){
            res.send({error:'membership data not found'});
        }
        else{
            res.send(data);
        }
    })
}

exports.remove = (req,res)=>{
    var membershipId = req.params.membershipId;
    membershipModal.findByIdAndDelete(membershipId,(err,data)=>{
        if(err){
            res.send({error:'membership is not delete'})
        }
        else{
            res.send({error:'membership is delete successfully'})
        }
    })
}

exports.membershipUpdate =(req,res)=>{
    var membershipId = req.params.membershipId;
    console.log(membershipId)
    console.log(req.body)
    membershipModal.updateOne({_id:membershipId}, req.body).exec((err,data)=>{
        if(err){
            res.send({error:'membership is not update'})
        }
        else{
            if(req.file){
                cloudUrl.imageUrl(req.file).then((expimgUrl)=>{ 
                    membershipModal.updateOne({_id:data._id},{$set:{membership_profile:expimgUrl}})
                    .exec((err,updateStripe)=>{
                        console.log(updateMembership)
                       if(err){
                        res.send({error:'image url is not update in membership'})
                          }
                      else{
                        res.send(updateMembership)
                    }
              })
            }).catch((error)=>{
                    res.send({error:'membership image url is not create'})
            })
          }
            else{
                res.send(data)
            }
        }
    })
}

