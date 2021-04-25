const pcategory = require("../models/pcategory");
const program = require("../models/program");

exports.read = (req,res)=>{
    var categoryId = req.params.categoryId;
    pcategory.findById(categoryId)
             .populate('program_subcategory')
             .exec((err,data)=>{
                if(err){
                    console.log(err)
                    res.send({error:'subcategory is not populate'})
                }
                else{
                    res.send(data)
                }
            })
}

exports.catList = (req,res)=>{
    // {userId:req.params.userId}
    pcategory.find()
    .populate('program_subcategory')
    .exec((err,catlist)=>{
        if(err){
            res.send({error:'program category list not found'})
        }
        else{
            res.send(catlist)
        }
    })
}

exports.create = (req,res)=>{
    var category = req.body.category;
    var programName = req.body.programName;
   
    var categoryDetails={}
    categoryDetails.category = category;
    categoryDetails.programName = programName;
    categoryDetails.userId = req.params.userId;
    console.log(categoryDetails)

                var categoryObj = new pcategory(categoryDetails)
                console.log(categoryObj)
                categoryObj.save((err,categoryData)=>{
                    if(err){
                        console.log(err)
                    }   
                    else{
                        program.updateOne({programName:programName},{$push:{ program_category : categoryData._id }})
                            .exec((err,data)=>{
                                if(err){
                                    console.log(err)
                                    res.send({error:'category is not add'})
                                }
                                else{
                                  res.send({msg:'category add successfully',category:categoryData})
                                }
                            })
                    }
                })        
            }
    


exports.update = (req,res)=>{
    var categoryId = req.params.categoryID;
    var programID = req.params.programID;
    var category_name = req.body.category;
    
    pcategory.findByIdAndUpdate(categoryId,{$set:{category:category_name}}).exec((err,data)=>{
        if(err){
            res.send({error:'category not find'})
        }
        else{
            res.send({ result: 'category is  update successfully' })
        }
    })
}

exports.remove = (req,res)=>{
    var categoryId = req.params.categoryId;
          pcategory.findOneAndRemove({_id:categoryId},(err,data)=>{
                if(err){
                    res.send({error:'category is not delete'})
                }
                else{
                  program.update({"program_category":categoryId},{$pull:{"program_category":categoryId}},
                    function(err,data){
                        if(err){
                            res.send({error:'category is not delete from program'})
                        }
                        else{
                            res.send({error:'category is delete from program'})
                        }
                    })
                }
            })
    }   






