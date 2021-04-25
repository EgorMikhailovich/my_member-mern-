const campaign = require("../models/campaign");
const { errorHandler } = require('../helpers/dbErrorHandler');
// const todo = require("../models/todo_schema")


exports.Create = async (req, res) => {
    const campaigns = new campaign(req.body);
    campaigns.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        console.log(data)
        res.send("campaign type has been added successfully");
    });
};

exports.read = async (req, res) => {
    campaign.find({})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
};

exports.campInfo = async (req, res) => {
    const id = req.params.campId
    campaign.findById(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
};
exports.update = async (req, res) => {
    const id = req.params.campId;
    campaign.findByIdAndUpdate(id, { $set: req.body })
        .then((update_resp) => {
            console.log(update_resp)
            res.send("campaign type has been updated successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};

exports.remove = async (req, res) => {
    const id = req.params.campId
    campaign.deleteOne({ _id: id })
        .then((resp) => {
            console.log(resp)
            res.json("campaign type has been deleted successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};