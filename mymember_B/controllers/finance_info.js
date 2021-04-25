const finance_info = require("../models/finance_info");
const addmemberModal = require('../models/addmember');
const { errorHandler } = require('../helpers/dbErrorHandler');
const _ = require('lodash')

exports.Create = (req, res) =>{
    const studentId = req.params.studentId
    const body_info = req.body
    
    var D = new Date(req.body.expiry_year,req.body.expiry_month)
    cardExpiry={cardExpiry:D,userId:req.params.userId}
    var finance_Detail = _.extend(req.body,cardExpiry)

    // const finance = new finance_info(finance_Detail)
    // console.log(finance)

    const finance = new finance_info(finance_Detail);
    finance.save((err, data)=>{
        console.log(err)
        if (err) {
            res.send({error:'finance info is not add'})
        }
        else{
            console.log(data)
            finance_info.findByIdAndUpdate({_id:data._id},{$push:{memberInfo: studentId}})
            .exec((err,financedata)=>{
                if(err){
                    res.send({error:'student id not add in finance'})
                }
                else{
                    addmemberModal.findByIdAndUpdate({_id:studentId},{$push:{ finance_details: financedata._id }})
                    .exec((err,data)=>{
                         if(err){
                             res.send({error:'finance info is not add in student'})
                        }
                         else{
                            res.send({msg:'finance info is add in student',result:data})
                        }   
                    })
                }
            })
        }
    });
};

exports.read =(req, res) => {
    console.log(req.params.studentId)
    finance_info.find({student_Id:req.params.studentId})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err);
            res.send(err)
        })
};

// exports.finance_Info = (req, res) => {
//     const id = req.params.financeId
//     finance_info.findById(id)
//         .then((result) => {
//             res.json(result)
//         }).catch((err) => {
//             res.send(err)
//         })
// };

exports.update = (req, res) => {
    const id = req.params.financeId;
    finance_info.updateOne({ _id: id }, { $set: req.body })
        .then((update_resp) => {
            console.log(update_resp)
            res.send("finance Info has been updated for this student successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        });
};

exports.remove = (req, res) => {
  const id = req.params.financeId;
  finance_info.deleteOne({ _id: id })
        .then((resp) => {
        addmemberModal.update({"finance_details":id},{$pull:{"finance_details":id}},
        function(err,data){
             if(err){
                 res.send({error:'finance info is not delete in student'})
            }
             else{
                res.send({msg:'finance info is delete in student'})
            }
        })  
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};
