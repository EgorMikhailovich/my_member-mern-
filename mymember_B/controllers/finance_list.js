const bymember = require("../models/buy_membership")
const Member = require("../models/addmember")
const exp = require("../models/expenses")
const financeDetail = require("../models/finance_info")
var mongo = require("mongoose")
const { find } = require("../models/addmember")

exports.income_break = (req, res) => {
    Member.find({ userId: req.params.userId })
        .select('studentType')
        .select('intrested')
        .populate('membership_details')
        .exec((err, trial) => {
            if (err) {
                res.send({ error: 'active trial list not found' })
            }
            else {
                var total_active_trial = 0
                var total_active_std = 0
                var total_after_school = 0
                var total_camp = 0
                // res.send(trial)

                for (mdetail of trial) {
                    if (mdetail.intrested == 'Camp') {
                        for (data of mdetail.membership_details) {
                            total_camp = total_camp + data.dpayment
                        }
                    }
                }

                for (mdetail of trial) {
                    if (mdetail.intrested == 'After School') {
                        for (data of mdetail.membership_details) {
                            total_after_school = total_after_school + data.dpayment
                        }
                    }
                }

                for (mdetail of trial) {
                    if (mdetail.studentType == 'Active Trials') {
                        for (data of mdetail.membership_details) {
                            total_active_trial = total_active_trial + data.dpayment
                        }
                    }
                }
                for (mdetail of trial) {
                    if (mdetail.studentType == 'Active Student') {
                        for (data of mdetail.membership_details) {
                            total_active_std = total_active_std + data.dpayment
                        }
                    }
                }
                res.send({
                    'total_active_trial': total_active_trial,
                    'total_active_std': total_active_std,
                    'total_after_school': total_after_school,
                    'total_camp': total_camp
                })
            }
        })
}
exports.membership =(req,res)=>{
    Member.find({userId:req.params.userId})
    .select('firstName')
    .select('lastName')
    .select('status')
    .select('rating')
    .populate('membership_details','expiry_date due_every membership_name due_every_month')
    .exec((err,memberShip)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(memberShip)
        }
    })
}

// exports.membership_status =(req, res)=>{
//     console.log(req.body)
//     if(req.body.pay_inout == 'All Payments'){
//         var Data = {$and: [{ userId: req.params.userId },
//             { $and: [{ createdMonth: req.body.month }, { createdYear: req.body.year }] }]}
//     }
//     else if(req.body.pay_inout == 'auto pay' || req.body.pay_inout == 'in house'){
//         var Data = {$and: [{ userId: req.params.userId }, { pay_inout: req.body.pay_inout },
//             { $and: [{ createdMonth: req.body.month }, { createdYear: req.body.year }] }]}
//     }
//     bymember.find(Data)
//             .select('membership_status')
//             .select('membership_name')
//             .select('pay_inout')
//             .select('expiry_date')
//             .populate('studentInfo','firstName lastName programName')
//             .exec((err, detail)=>{
//                 if(err){
//                     res.send(err)
//                 }
//                 else{
//                     res.send(detail)
//                 }
//         })
// }

exports.monthly_pay = (req, res) => {
    bymember.aggregate([
        {
            "$group": {
                _id: "$pay_inout", "recieve": { "$sum": "$dpayment" }, "due": { "$sum": "$balance" }
            }
        }
    ]).exec((err, monthly_pay) => {
        if (err) {
            res.send({ error: 'monthly payment list not found' })
        }
        else {
            var total_auto_pay = 0
            var total_in_house = 0
            var total_recieve = 0
            var total_due = 0

            for (row of monthly_pay) {
                total_recieve = total_recieve + row.recieve
                total_due = total_due + row.due
                if (row._id == 'auto pay') {
                    total_auto_pay = total_auto_pay + row.recieve + row.due
                }
                else if (row._id == 'in house') {
                    total_in_house = total_in_house + row.recieve + row.due
                }
            }

            res.send({ 'pay': monthly_pay, 'total_autoPay': total_auto_pay, 'total_inHouse': total_in_house, 'total_recieve': total_recieve, 'total_due': total_due })
        }
    })
}

exports.exp_break = (req, res) => {
    var userID = mongo.Types.ObjectId(req.params.userId)
    exp.aggregate([
        { "$match": { userId: userID } },
        {
            "$group": {
                _id: "$category", "total": { "$sum": "$amount" },
            }
        },
    ]).exec((err, expBreak) => {
        if (err) {
            res.send({ error: 'expense breakdown list not found' })
            console.log(err)
        }
        else {
            res.send(expBreak)
        }
    })
}

exports.cc_expire = (req, res) => {
    var curDate=new Date()
    financeDetail.aggregate([
        {$match:{
            $and:[{userId:req.params.userId},
                 {$expr:{$gt:[{ $month: '$cardExpiry' },{ $month: curDate }]}},
                 {$expr:{$lte:[{ $year: '$cardExpiry' },{ $year: curDate }]}}]
       }},
       {
           $project:{
            memberInfo:1,
            cardExpiry:1
           }
       }
    ],function(err, docs){
        if (err){
            res.send({error:'card expire list not found'})
            console.log(err)
        }
        else{
            var options = {
                path: 'memberInfo', //array name in addmember modal
                model: 'member', //collection name
                select: 'firstName lastName primaryPhone'  // show specific field only
           };
           Member.populate(docs,options,function(err,expList){
            if(err){
                res.send({error:'memberinfo not populate'})
            }
            else{
                res.send(expList)
            }
           })
        }
    })
}
