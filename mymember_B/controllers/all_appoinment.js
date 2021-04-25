const user = require("../models/user")
var mongo = require("mongoose")

exports.appoinment_list = (req,res)=>{
    var id = req.params.userId
    var objId = mongo.Types.ObjectId(id)
user.aggregate([
    {$match: {_id:objId}},
    {
        $lookup:{
            from:'missyoucallappoinments',
            as:"missuapp",
            let:{userId:"$_id"},
            pipeline:[
                {$match:{$expr:{$eq:['$userId','$$userId']}}}
            ]
        }
    },
    {
        $lookup:{
            from:'studentappoinments',
            as:"renewapp",
            let:{userId:"$_id"},
            pipeline:[
                {$match:{$expr:{$eq:['$userId','$$userId']}}}
            ]
        }
    },
    {
        $lookup:{
            from:'birthdayappoinments',
            as:"birthapp",
            let:{userId:"$_id"},
            pipeline:[
                {$match:{$expr:{$eq:['$userId','$$userId']}}}
            ]
        }
    },
    {
        $lookup:{
            from:'appointments',
            as:"schoolapp",
            let:{userId:"$_id"},
            pipeline:[
                {$match:{$expr:{$eq:['$userId','$$userId']}}}
            ]
        }
    },
    {
        $project:{
            missuapp:1,
            renewapp:1,
            birthapp:1,
            schoolapp:1
        }
    }
]).exec((err,appData)=>{
    if(err){
        res.send({error:'appoinment not found'})
        console.log(err)
    }
    else{
        res.send(appData)
        }
    })
}