const { update } = require("../models/expenses");
const Expenses = require("../models/expenses");
const expenses_category = require("../models/expenses_category");
const cloudUrl = require("../gcloud/imageUrl")
const user = require("../models/user")
var mongo = require("mongoose")

exports.read = (req,res)=>{
    var userID = mongo.Types.ObjectId(req.params.userId)
    Expenses.aggregate([
        {"$match":{userId:userID}},
        {"$group":{
            _id:"$userId","total":{"$sum":"$amount"},
            exp_List:{
               $push:
                    {
                     _id:'$_id',
                     amount:'$amount',
                     category:'$category',
                     description:"$description",
                     expenses:"$expenses",
                     date:"$date",
                     subject:"$subject",
                     expense_image:"$expense_image"
                    }
                }
        }},
    ]).exec((err,data)=>{
        if(err){
            res.send({error:'all total not get'})
        }
        else{
            console.log(data)
            Expenses.aggregate([
                {"$match":{userId:userID}},
                {"$group":{
                    _id:"$category","total":{"$sum":"$amount"},
                }},
            ]).exec((err,datacat)=>{
                if(err){
                    res.send({error:'cat total not found'})
                }
                else{
                    res.send({'all_total':data,'cat_total':datacat})
                }
            })
        }
    })
}

exports.Create = (req,res)=>{
    var userID = mongo.Types.ObjectId(req.params.userId)
    const exp = new Expenses(req.body)
    exp.save((err,expData)=>{
        console.log(expData)
        if(err){
            res.send(err)
            console.log(err)
        }
        else{
            if(req.file){
                cloudUrl.imageUrl(req.file).then((expimgUrl)=>{ 
                    Expenses.findByIdAndUpdate(expData._id,{$set:{userId:userID,expense_image:expimgUrl}})
                    .exec((err,updateExp)=>{
                        console.log(updateExp)
                if(err){
                        res.send({error:'user id is not add in expense'})
                      }
                else{
                    expenses_category.updateOne({expense_category_type:req.body.category},{$push:{expenses:updateExp}},
                    (err,updatedata)=>{
                    if(err){
                        res.send({error:'expense is not add in category'})
                     }
                       else{
                         res.send({msg:'expense is create with image successfully',exp:updateExp})   
                       }
                    })
                }
              })
            }).catch((error)=>{
                    res.send({error:'expense image url is not create'})
            })
        }
        else{
            Expenses.findByIdAndUpdate(expData._id,{$set:{userId:req.params.userId}})
            .exec((err,updateExp)=>{
                if(err){
                    res.send({error:'user id is not add in expense'})
                }
                else{
                    expenses_category.updateOne({expense_category_type:req.body.category},{$push:{expenses:updateExp}},
                    (err,updatedata)=>{
                       if(err){
                        res.send({error:'expense is not add in category'})
                       }
                       else{
                         res.send({msg:'expense is create successfully',exp:updateExp})   
                       }
                    })
                }
            })
          }
        }
    })
}

// exports.expenseInfo = (req, res) => {
//     const id = req.params.expenseId
//     Expenses.findById(id)
//         .then((result) => {
//             res.json(result)
//         }).catch((err) => {
//             res.send(err)
//         });
// };

exports.update = (req, res)=>{
   Expenses.findByIdAndUpdate(req.params.expenseId,req.body)
   .exec((err,expUpdate)=>{
       if(err){
           res.send({error:'exprense is not update'})
       }
       else{
            // res.send({msg:'expense is update successfully',result:expupdtCat})
            if(req.file){
                cloudUrl.imageUrl(req.file).then((expimgUrl)=>{ 
                Expenses.findByIdAndUpdate(expUpdate._id,{$set:{expense_image:expimgUrl}})
                .exec((err,updateExp)=>{
                        console.log(updateExp)
                if(err){
                        res.send({error:'expense image is not update'})
                      }
                else{
                    res.send({error:'expense is update with image'})
                }
            })
         }).catch((error)=>{
                    res.send({error:'expense image url is not create'})
            })
        }
        else{
            res.send({error:'expense is update'})
        }
     }
  })
};

exports.remove = (req, res)=>{
    const id = req.params.expenseId
    Expenses.deleteOne({ _id: id })
        .then((resp) => {
            console.log(resp)
            res.json("Expenses has been deleted successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};