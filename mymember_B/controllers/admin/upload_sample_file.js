const sample_file = require("../../models/admin/upload_sample_file")
const cloudUrl = require("../../gcloud/imageUrl")

exports.sample_file =(req,res)=>{
     if(req.file){
            cloudUrl.imageUrl(req.file).then((docUrl)=>{ 
            var doc = new sample_file({
                sample_file:docUrl
            })
            doc.save((err,resp)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(resp)
                }
            })
        }).catch((error)=>{
                res.send({error:'sample doc file url is not create'})
        })
    }
}