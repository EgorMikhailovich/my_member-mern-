const program = require("../models/program");
const manage_rank = require("../models/program_rank");
const user = require("../models/user")
const cloudUrl = require("../gcloud/imageUrl")

exports.create = (req, res) => {
    console.log(req.body)
    const prog = new manage_rank(req.body)
    prog.save((err, data) => {
        if (err) {
            res.send({ error: 'manage rank is not add' })
            console.log(err)
        }
        else {
            if (req.file) {
                cloudUrl.imageUrl(req.file).then((result) => {
                    console.log('Result', result)
                    manage_rank.findByIdAndUpdate(data._id, { $set: { rank_image: result } })
                        .exec((err, rankdata) => {
                            if (err) {
                                res.send({ error: 'image is not add in rank' })
                            }
                            else {
                                console.log(data)
                                program.updateOne({ programName: req.body.programName }, { $push: { program_rank: data._id } })
                                    .exec((err, data) => {
                                        if (err) {
                                            res.send({ error: 'rank is not add in program' })
                                        }
                                        else {
                                            res.send({ msg: 'rank is add in program with image', rankData: rankdata })
                                        }
                                    })
                            }
                        })

                }).catch((error) => {
                    res.send({error:'image url is not create'})
                    console.log(error)
                })
            }
            else {
                program.updateOne({ programName: req.body.programName }, { $push: { program_rank: data._id } })
                    .exec((err, programdata) => {
                        if (err) {
                            res.send({ error: 'rank is not add in program' })
                        }
                        else {
                            res.send({ msg: 'rank is add in program', rankData: data })
                        }
                    })
            }
        }
    });
};


exports.read = (req, res) => {
    // const uid = req.body.uid;
    manage_rank.find()
        .then((category) => {
            res.json(category)
        }).catch((err) => {
            console.log(err);
            res.send(err)
        })
};

exports.program_Info = async (req, res) => {
    const id = req.params.program_rank_id;
    manage_rank.findById(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        });
};
exports.update = (req, res) => {
    const program_rank_id = req.params.program_rank_id;
    manage_rank.updateOne({ _id: program_rank_id }, req.body)
        .then((result) => {
            if (req.file) {
                const cloudenary = require("cloudinary").v2
                cloudenary.config({
                    cloud_name: process.env.cloud_name,
                    api_key: process.env.cloud_api_key,
                    api_secret: process.env.cloud_api_secret
                });
                const path = req.file.path
                const uniqueFilename = new Date().toISOString()
                cloudenary.uploader.upload(
                    path,
                    { public_id: `program_rank/${uniqueFilename}`, tags: `program_rank` }, // directory and tags are optional
                    function (err, image) {
                        if (err) return res.send(err)
                        console.log('file uploaded to Cloudinary')
                        const fs = require('fs')
                        fs.unlinkSync(path)
                        manage_rank.findByIdAndUpdate(program_rank_id, { $set: { rank_image: image.url } })
                            .then((response) => {
                                res.json({ msg: 'program rank is update with image' })
                                console.log('image is update and')
                            });
                    }
                );
            } else {
                res.send(result);
                console.log(result);
            }
            // res.send(result);
            // console.log(result);
        }).catch((err) => {
            console.log(err);
            res.send(err);
        })
}


exports.remove = (req, res) => {
    const program_rank_id = req.params.program_rank_id;
    manage_rank.remove({ _id: program_rank_id }, (err, data) => {
        if (err) {
            res.send({ error: 'program rank is not delete' })
        }
        else {
            program.update({ "program_rank": program_rank_id }, { $pull: { "program_rank": program_rank_id } },
                function (err, data) {
                    if (err) {
                        res.send({ error: 'program rank is not delete from program' })
                    }
                    else {
                        res.send({ msg: 'program rank is delete from program' })
                    }
                })
        }
    })
};


