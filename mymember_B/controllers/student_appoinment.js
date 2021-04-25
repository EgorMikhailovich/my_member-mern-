const studentAppoinment = require("../models/student_appoinment");
const student = require("../models/addmember")
const user = require("../models/user")
const _ = require('lodash')
require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.email);
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const VoiceResponse = require('twilio').twiml

exports.create = (req, res) => {
    student.findById(req.params.studentId).exec((err, std_data) => {
        if (err) {
            res.send({ error: 'student data not found' })
        }
        else {
            var obj = {
                userId: req.params.userId,
                firstName: std_data.firstName,
                lastName: std_data.lastName
            }
            var std_app = new studentAppoinment(req.body)
            var appoinment = _.extend(std_app, obj)
            appoinment.save((err, appoinmentData) => {
                if (err) {
                    res.send({ error: 'student appoinment is not create' })
                }
                else {
                    user.findByIdAndUpdate(req.params.userId, { $push: { renewal_appoinment_history: appoinmentData._id } })
                        .exec((err, data) => {
                            if (err) {
                                res.send({ error: 'student appoinment is not add in school' })
                            }
                            else {
                                res.send({ msg: 'student appoinment create successfully', appoinment: appoinmentData })
                            }
                    })
                }
            })
        }
    })
}

exports.read = (req, res) => {
    studentAppoinment.find({ userId: req.params.userId })
        .exec((err, stdApp) => {
            if (err) {
                res.send({ error: 'student appoinment not found' })
            }
            else {
                res.send(stdApp)
            }
        })
}

exports.remove = (req, res) => {
    var appoinmentId = req.params.appoinmentId;
    studentAppoinment.findByIdAndRemove({ _id: appoinmentId }, (err, appoinmentRemove) => {
        if (err) {
            res.send({ error: 'renewal appoinment is not delete' })
        }
        else {
            user.update({ "renewal_appoinment_history": appoinmentRemove._id }, { $pull: { "renewal_appoinment_history": appoinmentRemove._id } })
                .exec((err, appUpdateUser) => {
                    if (err) {
                        res.send({ error: 'renewal student appoinment is not delete in student' })
                    }
                    else {
                        res.send({ msg: 'renewal student appoinment is remove successfully' })
                    }
                })
        }

    })
}

exports.send_email = (req, res) => {
    var To = req.body.To
    var From = req.body.From
    var Sub = req.body.Sub
    const emailData = {
        to: To,
        from: From,
        subject: Sub,
        html: `<p>my mail</p>`
    };
    sgMail.send(emailData, function (err, data) {
        if (err) {
            res.send({ error: 'email not sent' })
            console.log(err)
        }
        else {
            res.send({ msg: 'email send successfully',data:data })
        }
    })
}

exports.send_sms = (req, res) => {
    var number = req.body.number
    console.log(number)
    client.messages.create({
        to: number,
        from: '+12679301602',
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',

    }, function (err, data) {
        if (err) {
            res.send({ error: 'msg not set' })
            console.log(err)
        }
        else {
            res.send(data)
        }
    })
}

exports.voiceCall = (req, res) =>{
    client.calls.create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: req.body.number,
        from: '12192445425'
    },function (err, call) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(call)
        }
    })
}