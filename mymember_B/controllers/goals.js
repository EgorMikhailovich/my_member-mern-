const goals = require("../models/goal_schema");
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.goalCreate = (req, res) => {
    const task = new goals(req.body);
    task.save((err, data) => {
        if (err) {
            res.send({error:'goals is not add'})
            console.log(err)
        }
        else{
            goals.findByIdAndUpdate({_id:data._id},{$set:{userId: req.params.userId}})
            .exec((err,goalData)=>{
                if(err){
                    res.send({error:'user id is not add in goals'})
                }
                else{
                    res.send(task)
                }
            })
        }
    });
};

exports.goalread = (req, res) => {
    goals.find({userId :req.params.userId})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
};
exports.goalinfo = (req, res) => {
    const id = req.params.goalId
    goals.findById(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        });
};
exports.goalupdate = (req, res) => {
    const id = req.params.goalId;
    console.log(req.body)
    goals.findByIdAndUpdate(id, { $set: req.body })
        .then((update_resp) => {
            console.log(update_resp)
            res.send("goal has been updated successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};

exports.goalremove = (req, res) => {
    const id = req.params.goalId
    goals.deleteOne({ _id: id })
        .then((resp) => {
            console.log(resp)
            res.json("goal has been deleted successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};