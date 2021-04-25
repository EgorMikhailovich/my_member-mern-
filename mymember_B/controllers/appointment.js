const appoint = require("../models/appointment");
const _ = require('lodash')
// const todo = require("../models/todo_schema")

exports.Create = (req, res) => {
    var appoinemnt = req.body;
    var App = _.extend(appoinemnt,req.params)
    console.log(App)
    const campaigns = new appoint(App);
    console.log(campaigns)
    campaigns.save((err, appdata) => {
        if (err) {
            res.send({error:'appoinment is not add'})        
            console.log(err)    
        }
        else{
            res.send(appdata)
        }
        })
    }


exports.read = (req, res) => {
    appoint.find({userId:req.params.userId})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
};


exports.appointInfo = (req, res) => {
    const id = req.params.appointId
    appoint.findById(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
};

exports.update = (req, res) => {
    const id = req.params.appointId;
    appoint.findByIdAndUpdate(id, { $set: req.body })
        .then((update_resp) => {
            console.log(update_resp)
            res.send("Appointment has been updated successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};

exports.remove =(req, res) => {
    const id = req.params.appointId
    appoint.deleteOne({ _id: id })
        .then((resp) => {
            console.log(resp)
            res.json("Appointment has been deleted successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};