const { env } = require("process");
const stripe = require("../models/stripe");
const cloudUrl = require("../gcloud/imageUrl")
// var s = require("../uploads")

exports.create = (req, res) => {
    const Id = req.params.userId
    const stripeObj = new stripe(req.body)
    stripeObj.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        else {
            if (req.file) {
                cloudUrl.imageUrl(req.file).then((expimgUrl) => {
                    stripe.findByIdAndUpdate(data._id, { $set: { userId: Id, stripe_image: expimgUrl } })
                        .exec((err, updateStripe) => {
                            console.log(updateStripe)
                            if (err) {
                                res.send({ error: 'image url is not add in stripe' })
                            }
                            else {
                                res.send({ msg: 'stripe is add with image successfully' })
                            }
                        })
                }).catch((error) => {
                    res.send({ error: 'stripe image url is not create' })
                })
            }
            else {
                stripe.findByIdAndUpdate({ _id: data._id }, { $set: { userId: Id } })
                    .exec((err, stripeData) => {
                        if (err) {
                            res.send({ error: 'user id is not add in stripe' })
                        }
                        else {
                            res.send(stripeData)
                        }
                    })
            }
        }
    });
};


exports.read = (req, res) => {
    stripe.find({ $or: [{ userId: req.params.userId }, {status : 'Admin'}] })
        .then((stripe) => {
            if (stripe.length > 0) {
                res.send(stripe)
            }
            else {
                res.send({ msg: 'stripe is empty' })
            }
        }).catch((err) => {
            console.log(err);
            res.send(err)
        })
};

exports.update = (req, res) => {
    const uid = req.params.stripeId;
    console.log(req.body)
    stripe.findByIdAndUpdate({ _id: uid }, req.body)
        .then((result) => {
            if (req.file) {
                cloudUrl.imageUrl(req.file).then((expimgUrl) => {
                    stripe.findByIdAndUpdate(result._id, { $set: { stripe_image: expimgUrl } })
                        .exec((err, updateStripe) => {
                            console.log(updateStripe)
                            if (err) {
                                res.send({ error: 'image url is not add in stripe' })
                            }
                            else {
                                res.send({ error: 'stripe is update with image successfully' })
                            }
                        })
                }).catch((error) => {
                    res.send({ error: 'stripe image url is not create' })
                })
            } else {
                res.send({ msg: 'stripe is update' })
            }
        }).catch((err) => {
            console.log(err);
            res.send(err);
        });
}
exports.stripe_detail = (req, res) => {
    const id = req.params.stripeId
    stripe.findById(id)
        .select('stripeName')
        .populate('manage_stripe')
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        });
};

exports.remove = (req, res) => {
    var uid = req.params.stripeId;
    console.log('userid', uid)
    stripe.remove({ _id: uid })
        .then((resp) => {
            console.log(resp);
            res.json({ data: resp, message: "stripe deleted succesfuly" });
        }).catch((err) => {
            res.send(err)
        })
};




