const membershipModal = require("../models/membership");
const buyMembership = require("../models/buy_membership");
var addmemberModal = require('../models/addmember')
const { errorHandler } = require('../helpers/dbErrorHandler');
const _ = require('lodash')

exports.membership_Info = (req, res) => {
    const id = req.params.membershipId
    buy_membership.findById(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
};

exports.update = (req, res) => {
    // const id = req.params.membershipId;
    // console.log(id,req.body)
    buyMembership.findByIdAndUpdate(req.params.membershipId,req.body)
        .then((update_resp) => {
            console.log(update_resp)
            res.send(update_resp)
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};

exports.remove = (req, res) => {
    const id = req.params.membershipId
    buyMembership.deleteOne({ _id: id })
        .then((resp) => {
            addmemberModal.update({"membership_details": id},{$pull:{"membership_details":id}}
            ,function(err,data){
                if(err){
                    res.send({error:"mebership is not delete in student"});
                    console.log(err)
                }
                else{
                    res.send({msg:"mebership is delete in student"});
                }
            })
        }).catch((err) => {
            console.log(err)
            res.send(err)
    })
};


exports.create = (req,res)=>{
    var studentId = req.params.studentId;
    var Id = { userId:req.params.userId }
    if(req.body.ptype == 'cash' || req.body.ptype == 'check'){
        if(req.body.balance == 0){
            status={membership_status:'Paid'} 
             membershipDetails = _.extend(req.body,status)
        }
        else{
             status={membership_status:'Due'} 
             membershipDetails = _.extend(req.body,status)
        }    
           var membership = new buyMembership(membershipDetails);
           memberbuy = _.extend(membership,Id)
           memberbuy.save((err,data)=>{
                if(err){
                    res.send({error:'membership not buy'})
                    console.log(err)
                }
                else{
                    query = {'_id': studentId}
                    update = {
                        $set: {status: "active"},
                        $push: {membership_details: data._id}
                    }
                    addmemberModal.findOneAndUpdate(query,update,(err,stdData)=>{
                        if(err){
                            res.send({error:'membership id is not add in student'})
                        }
                        else{
                           buyMembership.findOneAndUpdate({_id:data._id},{$push:{studentInfo:stdData._id}})
                           .exec((err,result)=>{
                               if(err){
                                   res.send({error:'student id is not add in buy membership'})
                               }
                               else{
                                   res.send({msg:'membership purchase successfully',data:result})
                               }
                           })
                        }

                    })    
                }
            })
        }
    else if(req.body.ptype == 'card'){

    }
}

exports.buyMembership =(req,res)=>{
    var Id = { userId:req.params.userId }
    if(req.body.ptype == 'cash' || req.body.ptype == 'check'){
       
        if(req.body.balance == 0){
            status={membership_status:'Paid'} 
             membershipDetails = _.extend(req.body,status)
        }
        else{
             status={membership_status:'Due'} 
             membershipDetails = _.extend(req.body,status)
        }  
           var membership = new buyMembership(membershipDetails);
           memberbuy = _.extend(membership,Id)
           memberbuy.save((err,data)=>{
                if(err){
                    res.send({error:'membership not buy'})
                    console.log(err)
                }
                else{
                    query = {'firstName': req.body.student_name}
                    update = {
                        $set: {status: "active"},
                        $push: {membership_details: data._id}
                    }
                    addmemberModal.findOneAndUpdate(query,update,(err,stdData)=>{
                        if(err){
                            res.send({error:'membership id is not add in student'})
                        }
                        else{
                            // res.send({msg:'membership purchase successfully'})
                            buyMembership.findOneAndUpdate({_id:data._id},{$push:{studentInfo:stdData._id}})
                            .exec((err,result)=>{
                                if(err){
                                    res.send({error:'student id is not add in buy membership'})
                                }
                                else{
                                    res.send({msg:'membership purchase successfully',data:result})
                                }
                            })
                        }

                    })    
                }
            })
        }
    else if(req.body.ptype == 'card'){

    }
}

exports.membership_info = (req,res)=>{
    var membershipId = req.params.membershipId
    membershipModal.findById(membershipId).exec((err,data)=>{
        if(err){
            res.send({error:'membership is not found'});
        }
        else{
            res.send(data);
        }
    })
}