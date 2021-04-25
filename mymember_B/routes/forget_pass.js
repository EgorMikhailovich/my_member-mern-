const express = require("express");
const router = express.Router();
const User = require("../models/administrate_user")
var nodemailer = require("nodemailer")
var bodyParser = require('body-parser')
const parser = bodyParser.urlencoded({
    extended: false
});
const crypto = require("crypto")
const uuidv1 = require('uuid/v1');
uuidv1()
const bcrypt = require('bcryptjs');


function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
};

router.post('/sent_resetPass_link', parser, (req, res) => {
    const tokens = randomString(15, 'PICKCHAR45SFROM789THI123SSET');
    console.log(tokens)
    var emails = req.body.email
    console.log(emails)
    User.findOne({ email: emails })
        .then((result) => {
            console.log(result)
            if (result === null) {
                res.send("email not found")
            }
            else {
                const hr = "http://localhost:4200/reset_pass/"+tokens
                console.log(hr)
                // const tokens = token()
                // console.log(tokens)
                User.update({ email: emails }, { $set: { resetPasswordToken: tokens, resetPasswordExpires: Date.now() + 3600000 } })
                    .then((resp) => {
                        let mailTransporter = nodemailer.createTransport({
                            host: 'smtp.gmail.com',
                            port: 465,
                            secure: true,
                            auth: {
                                user: 'shivanic18@navgurukul.org',
                                pass: 'Chouhan18@'
                            }
                        });
                        let mailDetails = {
                            from: 'shivanic18@navgurukul.org',
                            to: emails,
                            subject: 'Your Reset pasword link',
                            html: '<h3>This is password reset link. please reset Your password.</h3> + <h1><a href='+hr+'>'+hr+'</a></h1>'
                        };
                        mailTransporter.sendMail(mailDetails, function (err, data) {
                            if (err) {
                                console.log(err)
                                console.log('Error Occurs');
                                res.send(err);
                            } else {
                                res.send(data);
                                console.log('Email sent successfully');
                                res.json("email send sucussfully");
                            }
                        });
                    })

            }
        })
});






module.exports = router