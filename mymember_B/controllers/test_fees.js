var testFee = require('../models/TestingFees')
var _ = require('lodash')
exports.create = (req, res) => {
    console.log(req.body)
    var test_fees = req.body;
    
    // var testData = _.extend(test_fees,req.params)
    var testFeeObj = new testFee(test_fees);
    testFeeObj.save(function (err, FeeData){
        if(err){
            res.send(err)
            console.log(err)
        }
        else{   
           testFee.findByIdAndUpdate(FeeData._id,{userId:req.params.userId})
           .exec((err,fee)=>{
               if(err){
                   res.send({error:'user id is not update in fee'})
               }
               else{
                   res.send(fee)
               }
           })
        }
    })
}

exports.read = (req, res) => {
    testFee.find({userId: req.params.userId}).exec((err, data) => {
        if (err){
            res.send({ error: 'test fee list is not found' })
        }
        else {
            res.send(data)
        }
    })
}

exports.fee_info = (req, res) => {
    var testID = req.params.feeId;
    testFee.findById(testID).exec((err, data) => {
        if (err) {
            res.send({ error: 'testID is not found' })
        }
        else {
            res.send(data)
        }
    })
}

exports.deletetestfee = (req, res) => {
    console.log('id', req.params)
    var testID = req.params.feeId;
    testFee.findByIdAndDelete(testID).exec((err, data) => {
        if (err) {
            res.send({ error: 'test is not delete' })
        }
        else {
            res.send({ msg: 'test is delete' })
        }
    })
};

exports.updatetestFee = (req, res) => {
    var feeID = req.params.feeId;
    var data = req.body
    console.log(data);
    testFee.findByIdAndUpdate({ _id: feeID },{
        fees_name: data.fees_name,
        fees_description: data.fees_description,
        programName: data.programName,
        total_price: data.total_price,
        color: data.color
    })
    .exec((err,updateData)=>{
        if(err){
            res.send({error:'fees details is not update'})
        }
        else{
            res.send({msg:'fees details is update successfully'})
        }
    })
}

// exports.updateStatus = (req,res)=>{
//     var feeId = req.params.feeId;
//     var status = req.params.status
//     if(status=='false')
//     {
//     testFee.findByIdAndUpdate({ _id:feeId },{$set:{ status:'true' } })
//     .exec((err,data)=>{
//         if(err){
//             res.send({error:'fee status is not update'})
//         }
//         else{
//             testFee.findById(feeId).exec((err,data)=>{
//                 res.send(data)
//                 })                       
//             }
//         })
//     }
//     else if(status=='true'){
//         testFee.findByIdAndUpdate({ _id:feeId },{$set:{ status:'false' } })
//         .exec((err,data)=>{
//         if(err){
//             res.send({error:'fee status is not update'})
//         }
//         else{
//             testFee.findById(feeId).exec((err,data)=>{
//                 res.send(data)
//                 })                       
//             }
//         })
//     }
// }