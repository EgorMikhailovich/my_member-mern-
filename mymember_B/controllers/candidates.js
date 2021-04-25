const candidateModal = require("../models/candidates");
const addmemberModal = require("../models/addmember");
const User = require("../models/user")
const stripe = require("../models/stripe");
const mongo = require('mongoose')
exports.create_candidate = (req, res) => {

    var studentId = req.body.studentId
    studentId.forEach(stdId => {  
      addmemberModal.findById(stdId)
        .populate('membership_details')
        .exec((err, data) => {
            if (err) {
                res.send({ error: 'data not find' })
            }
            else {
                console.log(data)

                var membershipDetails = data.membership_details;
                for (row of membershipDetails){
                    var expiry_date = row.expiry_date;
                }
                console.log(expiry_date)

                candidateData = {};
                candidateData.memberprofileImage = data.memberprofileImage;
                candidateData.firstName = data.firstName;
                candidateData.lastName = data.lastName;
                candidateData.program = data.program;
                candidateData.category = data.category;
                candidateData.memberprofileImage = data.memberprofileImage;
                candidateData.expiry_date = expiry_date;
                candidateData.userId = req.params.userId

                var candidateObj = new candidateModal(candidateData);
                candidateObj.save((err, candidate_data) => {
                    if (err) {
                        res.send(err)
                    }
                    else {
                        res.send({msg:'student add in candidate list',result:candidateData})
                    }
                })
            }
        })
    })

}

exports.create_candidateStripe = (req,res)=>{
   var stripeName = req.body.stripeName;
   candidateModal.findByIdAndUpdate(req.params.candidateId,{$set:{candidate_status : stripeName, current_stripe:0}})          
   .exec((err,data)=>{
       console.log(data)
       if(err){
           res.send({error:'candidate status is not update'})
       }
       else{
            res.send({msg:'candidate status is update'})
       }
   })

}

exports.candidate_List = (req,res)=>{
    var id = req.params.userId
    var objId = mongo.Types.ObjectId(id)
    User.aggregate([
            {$match: {_id:objId}},
                {
                    $lookup: { 
                        from: 'candidates', 
                        as: 'candidate' ,
                        let:{userId:"_id"},
                        pipeline:[
                             {$match:{$expr:{$eq:['userId','userId']}}},
                        ]
                    },   
                },
                {
                    $lookup: { 
                        from: 'stripes', 
                        as: 'stripe' ,
                        let:{userId:"_id"},
                        pipeline:[
                             {$match:{$expr:{$eq:['userId','userId']}}},
                             {$project:{stripeName:1}}
                        ]
                    },   
                },
                {
                    $project:{
                        candidate:1,
                        stripe:1
                    }
                }
            ]).exec((err,candidate)=>{
                if(err){
                    res.send({error:'candidate list not found'})
                    console.log(err)
                }
                else{
                    res.send(candidate)
                }
            })

}

exports.promote_stripe = (req,res)=>{
    candidateModal.findByIdAndUpdate({_id: req.params.candidateId},{$set:{current_stripe: req.body.current_stripe}})
    .exec((err,promote)=>{
        if(err){
            res.send({error:'stripe is not promote'})
        }
        else{
            res.send({msg:'stripe is promote'})
        }
    })
}

exports.delete_candidate = (req,res)=>{
    candidateModal.remove({_id:req.params.candidateId},(err,delCandidate)=>{
        if(err){
            res.send({error:'candidate is not remove'});
        }
        else{
            res.send({msg:'candidate is remove'});
        }
    })
}

