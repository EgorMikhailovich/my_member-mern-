const location = require("../../../models/admin/settings/location")

exports.listLocation = (req,res)=>{
    location.find().exec((err,list)=>{
        if(err){
            res.send({error:'location list not found'})
        }
        else{
            res.send(list)
        }
    })
    
}

exports.addLocation = (req,res)=>{
    var addLocation = new location(req.body)
    addLocation.save((err,loc)=>{
        if(err){
            res.send({error:'location is not create'})
        }
        else{
            location.findByIdAndUpdate(loc._id,{ $set:{adminId:req.params.adminId,createdBy:'admin'} })
            .exec((err,locupdate)=>{
                if(err){
                    res.send({error:'admin id is not add in location'})
                }
                else{
                    res.send({ msg:'location create successfully', Location:loc })
                }
            })            
        }
    })
}

exports.updateLocation = (req,res)=>{
    location.updateOne({_id:req.params.locationId},req.body)
    .then((result)=>{
        res.send({msg:'location is update successfully'})
    }).catch((err)=>{
        res.send({error:'location is not update'})
        console.log(err)
    })
}

exports.removeLocation = (req,res)=>{
    location.findByIdAndRemove(req.params.locationId)
    .exec((err,delLoc)=>{
        if(err){
            res.send({error:'location is not remove'})
        }
        else{
            res.send({msg:'location is remove successfully'})
        }
    })
   
}