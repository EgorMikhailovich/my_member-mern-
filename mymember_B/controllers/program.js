const program = require("../models/program");


exports.create = (req, res) => {
    console.log(req.body, req.file)
    const Id = req.params.userId;

    var prog = new program(req.body)
    prog.save((err, data) => {
        console.log(data)
        if (err) {
            res.send({ error: 'program is not create' })
            console.log(err)
        }
        else {
            if (req.file) {
                const cloudenary = require("cloudinary").v2
                cloudenary.config({
                    cloud_name: process.env.cloud_name,
                    api_key: process.env.cloud_api_key,
                    api_secret: process.env.cloud_api_secret
                });

                var filename = req.file.originalname;
                var path = req.file.path;
                console.log(path)
                var uniquefilename = filename + (Date.now())

                cloudenary.uploader.upload(
                    path,
                    { public_id: `program/${uniquefilename}`, tags: `program` }, // directory and tags are optional
                    function (err, image) {
                        if (err) return res.send(err)
                        console.log('file uploaded to Cloudinary')
                        const fs = require('fs')
                        fs.unlinkSync(path)
                        program.findByIdAndUpdate({ _id: data._id }, { $set: { program_image: image.url, userId: Id } })
                            .then((response) => {
                                res.send(response)
                            }).catch((error) => {
                                res.send("image not add in program")
                                console.log(error)
                            });
                    }
                );
            } else {
                program.findByIdAndUpdate({ _id: data._id }, { $set: { userId: Id } })
                    .exec((err, programData) => {
                        if (err) {
                            res.send({ error: 'user id is not add in program' })
                        }
                        else {
                            res.send(programData)
                        }
                    })
            }
        }
    });
};

exports.read = (req, res) => {
    program.find({ $or: [{ status: 'Admin' },{ userId: req.params.userId }] })
        .populate({
            path: 'program_category',
            populate: {
                path: 'program_subcategory',
                model: 'psubcategory'
            }
        })
        .populate('program_rank')
        .exec((err, programdata) => {
            if (err) {
                res.send({ error: 'program is not found' })
            }
            else {
                res.send(programdata)
            }
        })

};

exports.programs_detail = (req, res) => {
    var id = req.params.proId
    console.log(id)
    program.findById(id)
        .populate('program_category')
        .populate('program_rank')
        .exec((err, data) => {
            if (err) {
                console.log(err)
                res.send({ error: 'category is not populate' })
            }
            else {
                res.send(data)
            }
        })
};

exports.program_rank = (req, res) => {
    var id = req.params.proId
    console.log(id)
    program.findById(id)
        .select('programName')
        .populate('program_rank')
        .exec((err, data) => {
            if (err) {
                console.log(err)
                res.send({ error: 'rank is not populate' })
            }
            else {
                res.send(data)
            }
        })
};

exports.update = (req, res) => {
    const uid = req.params.proId;
    program.updateOne({ _id: uid }, req.body)
        .then((result) => {
            if (req.file) {
                const cloudenary = require("cloudinary").v2
                cloudenary.config({
                    cloud_name: process.env.cloud_name,
                    api_key: process.env.cloud_api_key,
                    api_secret: process.env.cloud_api_secret
                });
                var filename = req.file.originalname;
                var path = req.file.path;
                var uniquefilename = filename + (Date.now())

                cloudenary.uploader.upload(
                    path,
                    { public_id: `program/${uniquefilename}`, tags: `program` }, // directory and tags are optional
                    function (err, image) {
                        if (err) return res.send(err)
                        console.log('file uploaded to Cloudinary')
                        const fs = require('fs')
                        fs.unlinkSync(path)

                        program.findByIdAndUpdate(uid, { $set: { program_image: image.url } })
                            .then((response) => {
                                res.json(response)
                            });
                    }
                );
            } else {
                res.send(result);
                console.log(result);
            }
        }).catch((err) => {
            console.log(err);
            res.send(err);
        })
}


exports.remove = (req, res) => {
    const uid = req.params.proId;
    program.remove({ _id: uid })
        .then((resp) => {
            console.log(resp);
            res.json({ data: resp, message: "program deleted succesfuly" });
        }).catch((err) => {
            res.send(err)
        })
};




