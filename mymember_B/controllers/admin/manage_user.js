const user = require("../../models/user")
const sgMail = require('sendgrid-v3-node');
const cloudUrl = require("../../gcloud/imageUrl")

exports.user_List = (req, res) =>{
    user.find({ role: 0 })
    .populate('user_membership_details','membershipName startDate expiry_date')
    .exec((err, userList) => {
        if (err || !userList) {
            res.send({ error: 'user list not found' })
            console.log(err)
        }
        else {
            res.send(userList)
        }
    })
}

exports.userInfo = (req,res)=>{
    user.findOne({_id:req.params.userId})
    .populate('user_membership_details')
    .exec((err,userinfo)=>{
        if(err){
            res.send({error:'user info not found'})
        }
        else{
            res.send(userinfo)
        }
    })
}

exports.create_user = (req,res)=>{
    var userObj = new user(req.body);
    console.log(req.body)
    userObj.save(function(err,User){
        if(err){
            res.send(err)
            console.log(err)
        }
        else{
            if(req.file){
                cloudUrl.imageUrl(req.file).then((subuserImgUrl)=>{
                    user.findByIdAndUpdate(User._id,{$set:{logo:subuserImgUrl}})
                    .then((response) => {
                        res.json(response)
                     }).catch((error)=>{
                        res.send({error:'user image is not add'})
                    })
                    }).catch((error)=>{
                        res.send({error:'image url is not create'})
                    })
            }
            else{
                res.send({msg:'user create successfully',data:User})
            }
        }
    })
}

exports.manage_Status = (req, res) => {
    console.log(req.params.userId)
    user.findById(req.params.userId).exec((err, list)=>{
        if (err) {
            res.send({ error: 'user list not find' })
        }
        else{
            console.log(list.status)
            if(list.status == 'Deactivate') {
               user.findByIdAndUpdate({_id: req.params.userId},{$set:{status:'Active'}})
               .exec((err, updateData) => {
                    if (err) {
                        res.send({ error: 'user status not update' })
                    }
                    else {
                        console.log(updateData)
                        var to = updateData.email
                        const userinfo = {
                            sendgrid_key: process.env.email,
                            to: to,
                            from_email: 'tekeshwar810@gmail.com',
                            from_name: 'noreply@gmail.com',
                        };
                        userinfo.subject = 'email information';
                        userinfo.content = `<p>email:${updateData.email}</p>
                                            <p>password:${updateData.password}</p>`;
                        sgMail.send_via_sendgrid(userinfo).then(resp=>{
                            console.log(resp)
                            res.send({msg:'your acount is activate please check your email'})
                        }).catch(err=>{
                            res.send({error:'email is not send'})
                        })  
                    }
                })
            }
            else if(list.status == 'Active') {
                user.findByIdAndUpdate({_id:req.params.userId},{$set:{status:'Deactivate'}})
                .exec((err, updateData) => {
                    if (err) {
                        res.send({ error: 'user status not update' })
                    }
                    else {
                        res.send({ msg: 'user status is deactivate'})
                    }
                })
            }
        }

    })
}

exports.update_user = (req,res)=>{
    console.log(req.body)
    user.updateOne({_id: req.params.userId},req.body).exec((err,updateUser)=>{
        if(err){
            res.send(err)
        }
        else{
            if(req.file){
                cloudUrl.imageUrl(req.file).then((subuserImgUrl)=>{
                    user.findByIdAndUpdate(req.params.userId,{$set:{logo:subuserImgUrl}})
                    .then((response) => {
                        res.json(response)
                        }).catch((error)=>{
                        res.send({error:'user image is not update'})
                      })
                    }).catch((error)=>{
                        res.send({error:'image url is not create'})
                })
            }
            else{
                res.send(updateUser)
            }
        }
    })

}

exports.remove =(req,res) =>{
    user.findByIdAndRemove(req.params.userId).exec((err,removeData)=>{
        if(err){
            res.send({error:'user is not remove'});
        }
        else{
            res.send({msg:'user remove successfully'});
        }
    })
}