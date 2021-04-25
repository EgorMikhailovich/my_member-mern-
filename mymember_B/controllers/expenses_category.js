const expenses = require("../models/expenses");
const expenses_category = require("../models/expenses_category");
const totalExp = require("../models/totalExp");
var mongo = require("mongoose")

exports.create = (req,res)=> {
    console.log(req.body)
    var userID = mongo.Types.ObjectId(req.params.userId)
    var expCategory = new expenses_category(req.body)  
    console.log(expCategory)
    expCategory.save((err,data)=>{
        if(err){
            res.send({error:'expenses category is not add'})
            console.log(err)
        }
        else{
            expenses_category.findByIdAndUpdate({_id:data._id},{$set:{userId:userID}})
            .exec((err,data)=>{
                if(err){
                    res.send({error:'userid is not add expenses category'})
                }
                else{
                    res.send(data)
                }
            })
        }
    })
}

exports.read = (req,res)=> {
        expenses_category.find({userId:req.params.userId})
        .select('expense_category_type')
        .select('color')
        .exec((err,categoryList)=>{
            if(err){
                res.send({error:'category list not found'})
                console.log(err)
            }
            else{
                res.send(categoryList)
            }
        })
}

exports.category_total = (req,res)=>{
    var userID = mongo.Types.ObjectId(req.params.userId)
    console.log(userID,typeof userID)
    expenses_category.aggregate([
        {"$match":{userId:userID}},  
        {
            "$group": {
                "_id": "$userId",
                 "totalexp": {
                    $sum: {
                        $sum: "$expenses.amount"
                    }
                },
            }
        },
        {
             "$lookup":{
                from:'expenses',
                as:"data",
                pipeline:[{$match:{$expr:{$eq:['$userId', userID]}}}]
              }
        },
        {
           "$project":{
                data:1,
                totalexp:1
            }
        }
   ]).exec((err,data)=>{
        if(err){
            res.send({error:'list not found'})
            console.log(err)
        }
        else{
            res.send(data)
        }
    })
}

exports.info_category = (req,res)=>{
        expenses_category.findById(req.params.categoryId)
        .exec((err,category_info)=>{
            if(err){
                res.send({error:'category info is not found'})
            }
            else{
                res.send(category_info)
            }
        })
}

exports.update_category =(req,res)=>{
        expenses_category.findByIdAndUpdate({_id:req.params.categoryId},req.body)
        .exec((err,updatecat)=>{
            if(err){
                res.send({error:'expense category is not update'})
            }
            else{
                res.send({msg:'expense category is update successfully'})
            }
        })
}

exports.remove_category =(req,res)=>{
        expenses_category.findByIdAndRemove({_id : req.params.categoryId})
        .exec((err,removeCat)=>{
            if(err){
                res.send({error:'category is not remove'})
            }
            else{
                console.log(removeCat)
                var catName = removeCat.expense_category_type
                var userId = removeCat.userId
                expenses.deleteMany({$and:[{"category":catName,"userId":userId}]},
                (err,allDelExp)=>{
                    if(err){
                        res.send({error:'category of expense is not remove'})
                    }
                    else{
                        res.send({error:'category remove successfully'})
                    }
                })
                
            }
        })
}