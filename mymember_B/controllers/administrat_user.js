const administrate = require("../models/administrate_user");
const { errorHandler } = require('../helpers/dbErrorHandler');
const expressJwt = require('express-jwt'); // for authorization check
const jwt = require('jsonwebtoken'); // to generate signed token
const uuidv1 = require('uuid/v1');
uuidv1()
const cloudUrl = require("../gcloud/imageUrl")

exports.signup = (req, res) => {
    var id = req.params.userId
    const user = new administrate(req.body);
    user.save((err, user)=>{
        if (err) {
            console.log(err)
            return res.status(400).json({
                // error: errorHandler(err)
                error: 'Email is already taken'
            });
        }
        else {
            if(req.file){
                cloudUrl.imageUrl(req.file).then((subuserImgUrl)=>{
                administrate.findByIdAndUpdate(user._id,{$set:{profile_image:subuserImgUrl,schoolId:id}})
                .then((response) => {
                    res.json(response)
                 }).catch((error)=>{
                    res.send({error:'sub user image is not add'})
                })
                }).catch((error)=>{
                    res.send({error:'image url is not create'})
                })
            }
            else {
                administrate.findByIdAndUpdate({ _id: user._id }, { $set: { schoolId: id } })
                    .exec((err, data) => {
                        if(err){
                            res.send({ error: 'school id is not add in user' })
                        }
                        else{
                            res.send(data)
                        }
                })
            }
        }

    });
};

// exports.prfile_update = (req, res) => {
//     console.log("req.body", req.body);
//     const id = req.params.uid;
//     console.log(req.file)
//     administrate.findByIdAndUpdate({ _id: id },req.body)
//     .then((resp) => {
//             if(req.file){
//                 cloudUrl.imageUrl(req.file).then((subuserImgUrl)=>{
//                 administrate.findByIdAndUpdate(id,{$set:{profile_image:subuserImgUrl}})
//                 .then((response) => {
//                       res.json({ data: response, message: "update your profile image successfully" })
//                 });
//                 }).catch((error)=>{
//                     res.send({error:'image url is not create'})
//                 })
//             }
//             else {
//                 res.json({
//                     data: resp,
//                     message: "update your profile successfully"
//                 });
//             }
//         }).catch((err)=>{
//             res.send({error:'sub user details is not update'})
//     })
// };

exports.signin = (req, res) => {
    // find the user based on email
    console.log(req.body)
    const { email, password } = req.body;
    administrate.findOne({ email },(err, user) => {
        console.log(user)
        if (err || !user) {
            console.log(err)
            return res.status(400).json({
                error: 'User with that email does not exist. Please signup'
            });
        }
        if(req.body.password === user.password){
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        // persist the token as 't' in cookie with expiry date
        res.cookie('t', token, { expire: new Date() + 9999 });
        // return response with user and token to frontend client
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, email, name, role } });
        }
        else{
            res.send({error:'email and password does not match'})
        }
        // consta = bcrypt.compare(user.hashed_password, function (err, hash) {
        // if user is found make sure the email and password match
        // create authenticate method in user model
        // if (!user.authenticate(password)){
        //     console.log(password)
        //     return res.status(401).json({
        //         error: 'Email and password dont match'
        //     });
        // };
        
    });
};


exports.signout = (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Signout success' });
};

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'auth'
});

// exports.isAuth = (req, res, next) => {
//     let user = req.profile && req.auth && req.profile._id == req.auth._id;
//     if (!user) {
//         return res.status(403).json({
//             error: 'Access denied'
//         });
//     }
//     next();
// };

// exports.isAdmin = (req, res, next) => {
//     if (req.profile.role === 0) {
//         return res.status(403).json({
//             error: 'Administrator resourse! Access denied'
//         });
//     }
//     next();
// };

exports.read = (req, res) => {
    administrate.find({ schoolId: req.params.userId }).exec((err, data) => {
        if (err) {
            res.send({ error: 'user list not found' })
        }
        else {
            if (data.length > 0) {
                res.send(data)
            }
            else {
                res.send({ msg: 'user list is empty' })
            }
        }
    })
}

exports.remove = (req, res)=>{
    var sub_users_id = req.params.sub_users_id
    administrate.findByIdAndRemove(sub_users_id,(err, data)=>{
        if (err) {
            res.send({error: 'user is not remove'})
        }
        else{
            res.send({msg: 'user is remove'})
        }
    })
}

exports.edit_userInfo = (req, res) => {
    console.log('run')
    var sub_user_id = req.params.sub_user_id;
    console.log(sub_user_id)
    administrate.findById(sub_user_id).exec((err, userData) => {
        if (err) {
            res.send({ error: 'user data is not found' })
            console.log(err)
        }
        else {
            res.send(userData)
        }
    })
}

exports.update = (req, res) => {
    var sub_user_id = req.params.sub_user_id;
    administrate.findByIdAndUpdate({ _id: sub_user_id }, req.body)
        .then((result) => {
            if(req.file){
                cloudUrl.imageUrl(req.file).then((subuserImgUrl)=>{
                administrate.findByIdAndUpdate(sub_user_id,{$set:{profile_image:subuserImgUrl}})
                .then((response) => {
                      res.json({ data: response, message: "update your profile image successfully" })
                }).catch((error)=>{
                    res.send({error:'sub user image is not update'})
                })
            }).catch((error)=>{
                    res.send({error:'image url is not create'})
          })
        }
           else{
                res.send({ msg: 'user is update successfully' });
            }
        }).catch((err) => {
            console.log(err);
            res.send(err);
        });
}

