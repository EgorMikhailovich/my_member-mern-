const textKey = require("../models/text_key")

exports.add_auth_key = async(req,res)=>{
    var textkeyObj = new textKey({
        ACCOUNT_SID:req.body.account_sid,
        AUTH_TOKEN:req.body.auth_token,
        MSG_SERVICE_SID:req.body.msg_service_id,
        twillo_no:req.body.twillo_no,
        userId:req.params.userId
    })
    try{
        var text = await textkeyObj.save()
        res.send({msg:'text authentication key add successfully'})
        
    }catch(e){
        res.send(e)
    }
}