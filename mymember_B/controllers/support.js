const { get } = require('lodash')
var supportModal = require('../models/support')
var cloudUrl = require("../gcloud/imageUrl")
// const cloudinary = require('cloudinary').v2

exports.create = (req, res) => {
    var supportObj = new supportModal(req.body);
    supportObj.save((err,ticket)=>{
        if(err){
            console.log(err)
        }
        else{
            if(req.file){
              cloudUrl.imageUrl(req.file).then((ticketImgUrl)=>{
                   console.log(ticketImgUrl)
                   supportModal.findByIdAndUpdate(ticket._id,{$set:{ticket_image:ticketImgUrl,userId:req.params.userId}})
                   .then((response) => {
                           res.send(response)
                        }).catch((err) => {
                            res.send(err)
                     })   
             }).catch((error)=>{
                   res.send({error: "image url is not create"})
          })
        }
            else{
                supportModal.findByIdAndUpdate({_id:ticket._id},{$set:{userId:req.params.userId}})
                .exec((err,data)=>{
                    if(err){
                        res.send({error:'user id is not add in ticket'})
                    }
                    else{
                        res.send(data)
                    }
                })
            }
        }
    })
    
}

exports.read=(req,res)=>{
    supportModal.find().exec((err,data)=>{
        if(err){
            res.send({ error : 'ticket list not found' })
        }
        else{
            if(data.length > 0){
                res.send(data) 
            }
            else{
                res.send({ error : 'list is empty' })
            }
        }
    })
}

exports.closeList=(req,res)=>{
    supportModal.find({$and:[{userId:req.params.userId},{status:'Closed'}]})
    .exec((err,ticket_status)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(ticket_status)
        }
    })
}

exports.count_ticket=(req,res)=>{
    supportModal.aggregate([
        {"$match":{userId:req.params.userId}},
        {"$group":{
            _id:"$status",
            "count":{"$sum":1},
        }},
    ]).
    exec((err,countTicket)=>{
        if(err){
            res.send(err)
        }
        else{
            var total_ticket=0
            countTicket.forEach(element => {
                total_ticket=total_ticket+element.count
            });
            res.send({Ticket_Count:countTicket,Total_Ticket:total_ticket})
        }
    })
}

exports.remove_ticket=(req,res)=>{
    supportModal.remove({_id:req.params.ticketId},(err,removeTicket)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(removeTicket)
        }
    })
}

exports.updateTicket=(req,res)=>{
    supportModal.findByIdAndUpdate({_id:req.params.ticketId},req.body)
    .exec((err,ticketUpdate)=>{
        if(err){
            res.send(err)
        }
        else{
            if(req.file){
            cloudUrl.imageUrl(req.file).then((ticketImgUrl)=>{
                 supportModal.updateOne({_id:ticketUpdate._id},{$set:{ticket_image:ticketImgUrl}})
                    .then((response) => {
                            res.send(response)
                         }).catch((err) => {
                             res.send(err)
                      })   
              }).catch((error)=>{
                    res.send({error: "image url is not create"})
           })
          }
            else{
                res.send(ticketUpdate)
            }
        }
    })
}