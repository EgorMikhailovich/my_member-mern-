const BuyMembership = require("../../../models/admin/membership_management/school_buy_membership")
const userModal = require("../../../models/user")
const _ = require('lodash')

exports.membershipBuy = (req,res)=>{
    if(req.body.ptype == 'cash' || req.body.ptype == 'check'){
   
    var ary = req.body.startDate.split('/')   
    var day = parseInt(ary[0])+1
    var date = new Date(`${ary[2]},${ary[1]},${day}`)
    var expdate = new Date(date.setMonth(date.getMonth() + 1))  
    var obj = {expiry_date : expdate.toLocaleDateString()}
        
        var member = _.extend(req.body,obj)
        console.log(member)
        
        var membership = new BuyMembership(member);
        console.log(membership)
        membership.save((err,data)=>{
             if(err){
                 res.send({error:'user membership not buy'})
                 console.log(err)
             }
             else{
                 query = {'_id':req.params.userId}
                 update = {
                            $set: {status: true},
                            $push: {user_membership_details:data._id}
                          }
                    userModal.findOneAndUpdate(query,update,(err,stdData)=>{
                     if(err){
                         res.send({error:'user id is not add in student'})
                         console.log(err)
                     }
                     else{
                         res.send({msg:'user membership purchase successfully'})
                     }
                 })    
             }
         })
     }
  else if(req.body.ptype == 'card'){

  }       

}