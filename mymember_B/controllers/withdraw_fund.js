const withdrawModal = require("../models/withdraw_fund");

exports.create = (req,res)=>{
    var withdrawObj = new withdrawModal(req.body);
    withdrawObj.save((err,data)=>{
        if(err){
            res.send({error: 'withdraw fund is not submit'});
        }
        else{
            res.send({msg:'withdraw fund is successfully submit'});
        }
    })                                                                                                                                                                                                                                            
}

exports.read = (req,res)=>{
    withdrawModal.find()
    .exec((err,data)=>{
        if(err){
            res.send({error: 'withdraw list is not find'});
        }
        else{
            res.send(data);
        }
    })
}