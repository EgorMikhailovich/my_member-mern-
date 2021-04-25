const class_schedule = require("../models/class_schedule");
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.Create = (req, res)=>{
    const task = new class_schedule(req.body);
    console.log(task)
    task.save((err, data)=>{
        if(err){
            res.send({error:'class schedule is not add',Error:err})
            console.log(err)
        }
        else{
            class_schedule.findByIdAndUpdate({_id:data._id},{$set:{ userId:req.params.userId }})
            .exec((err,scheduleData)=>{
                if(err){
                    res.send({error:'userId is not add in student'})
                }
                else{
                    res.send({msg:'class schedule is add successfully',data:scheduleData})
               }
           })
        }
    });
};

exports.read = (req, res)=>{
    class_schedule.find({userId:req.params.userId})
   .then((result) => {
       res.json(result)
    }).catch((err) => {
        res.send(err)
    })
};

exports.class_schedule_Info = (req, res)=>{
    const id = req.params.scheduleId
    class_schedule.findById(id,{upsert: true})
    .populate("class_attendance")
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
};

exports.update = (req, res)=>{
    const id = req.params.scheduleId;
    class_schedule.findByIdAndUpdate(id, { $set: req.body })
        .then((update_resp) => {
            console.log(update_resp)
            res.send("class schedule has been updated successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};

exports.remove = (req, res)=>{
    const id = req.params.scheduleId
    class_schedule.deleteOne({ _id: id })
        .then((resp) => {
            console.log(resp)
            res.json("class schedule has been deleted successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};