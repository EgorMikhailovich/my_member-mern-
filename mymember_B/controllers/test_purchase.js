// const { findByIdAndUpdate } = require("../models/test_purchase");
const testpurchaseModal = require("../models/test_purchase");
var testFee = require('../models/TestingFees')
const studentModal = require("../models/addmember");

exports.create = (req,res)=>{
    var purchaseDetail = req.body;
    var testId = req.params.test_fee_Id;
    var studentId = req.params.studentId;

    if(purchaseDetail.ptype == 'cash' || purchaseDetail.ptype == 'check'){
        var test_purchase = new testpurchaseModal(purchaseDetail);
        test_purchase.save((err,purchase_data)=>{
            if(err){
                res.send({error:'test is not purchase'})
                console.log(err)
            }
            else{
                testFee.findById(testId)
                .populate({
                    path:'program_detail',
                    populate:{
                    path:'program_rank'    
                   }
                })
                .exec((err,feeData)=>{
                    if(err){
                        res.send({error:'fee details not found'})
                    }
                    else{
                        z
                        console.log(purchase_data)
                        testpurchaseModal.findByIdAndUpdate(purchase_data._id,{$push:{test_info:feeData}})
                        .exec((err,test_purchase)=>{
                        if(err){
                            res.send({error:'program detail is not add test purchase'})
                        }
                        else{
                            studentModal.findByIdAndUpdate(studentId,{$push:{test_purchasing : test_purchase._id}})
                            .exec((err,data)=>{
                                if(err){
                                    res.send({error:'test purchase is not add in sutdent'})
                                }
                                else{
                                    res.send({msg:'test purchase successfully'})
                                 }
                              })
                            }
                        })
                    }   
                })
            }
        })
    }
    else if(purchaseDetail.ptype == 'card'){
        
    }
}

