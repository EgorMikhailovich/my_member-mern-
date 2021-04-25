const docfile = require("../models/doc_upload")
const docsubfolder = require("../models/doc_subfolder")
const {Storage} = require("@google-cloud/storage")
const sampleFile = require("../models/admin/upload_sample_file")
const std = require("../models/addmember")


var uid = require("uuid")
var uidv1 = uid.v1
require("dotenv").config()
const storage = new Storage({projectId: process.env.GCLOUD_PROJECT,credentials:{client_email:process.env.GCLOUD_CLIENT_EMAIL,private_key:process.env.GCLOUD_PRIVATE_KEY}})
const bucket = storage.bucket(process.env.GCS_BUCKET)

exports.docupload =(req,res)=>{
    console.log('run')
    console.log(req.file)
    const newFileName = uidv1() + "-" + req.file.originalname
    const doc = bucket.file('All-Images/'+newFileName)
    const blogStream =  doc.createWriteStream({resumable:false})
    
    blogStream.on("error",err=>res.send(err))
    blogStream.on("finish",()=>{
        const publicUrl = `https://storage.googleapis.com/${process.env.GCS_BUCKET}/${doc.name}`
        const docFileDetails = {
            document_name:req.body.document_name,
            document:publicUrl,
            subFolder:req.body.subFolder
        }
        var mydoc = new docfile(docFileDetails)
        mydoc.save((err,docdata)=>{
            if(err){
                res.send({error:'document is not add database'})
            }
            else{
                docsubfolder.update({subFolderName:req.body.subFolder},{$push:{uploadDocument:docdata._id}},
                function(err,updteDoc){
                    if(err){
                        res.send({error:'document is not add in subfolder'})
                    }
                    else{
                        res.send({result:updteDoc,Doc:docdata})
                    }
                })
            }
        })
    })
    
    blogStream.end(req.file.buffer)
}
    
exports.file_sample =(req,res)=>{
    sampleFile.findOne()
    .select('sample_file')
    .exec((err,doc_sample)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(doc_sample)
        }
    })
}

exports.groupList =(req,res)=>{
  std.aggregate([
        {$match:{$and:[{userId:req.params.userId}]}},
        {$group: {
           _id: "$studentType",
           list:{$push: {   firstName:"$firstName",
                            lastName:"$lastName", 
                            primaryPhone:"$primaryPhone",
                            email:"$email",
                            studentBeltSize:"$studentBeltSize",
                            program:"$program",
                            age:"$age" 
                        }},
             
       }},
    ]).exec((err,sList)=>{
        if(err){
            res.send(err)
        }
        else{
            var d = sList
            std.aggregate([
                {$match:{$and:[{userId:req.params.userId}]}},
                {$group: {
                   _id: "$leadsTracking",
                   list:{$push: {   firstName:"$firstName",
                                    lastName:"$lastName", 
                                    primaryPhone:"$primaryPhone",
                                    email:"$email",
                                    studentBeltSize:"$studentBeltSize",
                                    program:"$program",
                                    age:"$age" 
                                }},
                     
               }}
            ]).exec((err,resp)=>{
                for(row of resp){
                      d.push(row)
                }
               res.send(d)
            })
        }
    })
}