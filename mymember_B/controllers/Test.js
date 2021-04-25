const TestModal = require("../models/Test");
const student = require("../models/addmember");
const program = require("../models/program")
const manage_change_rank = require("../models/change_rank")
var async = require('async')

exports.create = (req,res)=>{
   student.find({_id:req.body.stdList})
   .select('firstName')
   .select('lastName')
   .select('studentBeltSize')
   .select('category')
   .select('program')
   .select('memberprofileImage')
   .populate('manage_change_rank')
   .exec((err,data)=>{
       if(err){
           res.send(err)
       }
       else{
           console.log(data)
           TestModal.insertMany(data).then((result)=>{
                    async.eachSeries(result, function updateObject (obj, done) {
                    TestModal.update({_id: obj._id },{ $set : {userId: req.params.userId,start_date:req.body.start_date }}, done);
                    }, function allDone (error) {
                        if(error){
                            res.send(error)
                        }
                          else{
                                res.send({msg:'student add in test'})
                            }
                });
           }).catch((err)=>{
               res.send({error:"student is already exist in test"})
           })
           
       }
   })
}

exports.list_std =(req,res)=>{
    TestModal.find({userId:req.params.userId})
    .populate('manage_change_rank')
    .exec((err,stdList)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(stdList)
        }
    })
}


exports.promote_std =(req,res)=>{
    program.findOne({_id:req.params.proId},{usert:true})
    .populate({
        path:'program_rank',
        model:'Program_rank',
        match:{'_id':{$gte:req.params.nxt_rank_id}},
        options: { sort: {'_id': 1}, limit: 2},
        select:('rank_name rank_image')
    })
    .exec((err,proF)=>{
        if(err){
            res.send(err)
        }
        else{
            var rank1 =  proF.program_rank[0]
            var rank2 = proF.program_rank[1]
            manage_change_rank.updateOne({stdId:req.params.stdId},
            {$set:{current_rank_name:rank1.rank_name,
                   current_rank_img:rank1.rank_image,
                   next_rank_name:rank2.rank_name,
                   next_rank_img:rank2.rank_image}},
                (err,updte1)=>{
                    if(err){
                        res.send(err)
                    }
                    else{
                       TestModal.remove({_id:req.params.stdId},(err,resp)=>{
                                    if(err){
                                        res.send(err)
                                    }
                                    else{
                                        res.send({msg:'student promote successfully'})
                                    }
                                })
                            }
                       })
                   }
            })
}