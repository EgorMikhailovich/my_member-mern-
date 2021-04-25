const allstdMenu = require("../../../models/menu/std_menu/all_student")
const afterstdMenu = require("../../../models/menu/std_menu/after_school")
const activeTrailMenu = require("../../../models/menu/std_menu/active_trail")
const leadStudent = require("../../../models/menu/std_menu/lead_std")
const formerStudent = require("../../../models/menu/std_menu/formar_std")
const formerTrailStudent = require("../../../models/menu/std_menu/former_trail")
const campStudent = require("../../../models/menu/std_menu/camp")

exports.all_std_menu = (req,res)=>{
    allstdMenu.find({user_id:req.params.userId})
    .exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'all student menu not find'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.edit_all_std_menu =(req,res)=>{
    console.log(req.body)
    console.log(req.params.userId)
    allstdMenu.updateOne({user_id:req.params.userId},req.body,(err,resp)=>{
        if(err){
            res.json({code:400,msg:'all student menu not update'})
        }
        else{
            res.json({code:200,msg:'all student menu update'})
        }
    })
}

exports.after_school_list =(req,res)=>{
    afterstdMenu.find({user_id:req.params.userId})
    .exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'after school student menu not find'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.edit_after_school = (req,res)=>{
    afterstdMenu.updateOne({user_id:req.params.userId},req.body,(err,resp)=>{
        if(err){
            res.json({code:400,msg:'after student menu not update'})
        }
        else{
            res.json({code:200,msg:'after student menu update'})
        }
    }) 
}

exports.active_trail_menu =(req,res)=>{
    activeTrailMenu.find({user_id:req.params.userId})
    .exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'active trail student menu not find'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.edit_active_trail = (req,res)=>{
    activeTrailMenu.updateOne({user_id:req.params.userId},req.body,(err,resp)=>{
        if(err){
            res.json({code:400,msg:'active trail student menu not update'})
        }
        else{
            res.json({code:200,msg:'active trail student menu update'})
        }
    }) 
}

exports.leads_menu =(req,res)=>{
    leadStudent.find({user_id:req.params.userId})
    .exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'leads student menu not find'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.edit_lead_menu = (req,res)=>{
    leadStudent.updateOne({user_id:req.params.userId},req.body,(err,resp)=>{
        if(err){
            res.json({code:400,msg:'leads student menu not update'})
        }
        else{
            res.json({code:200,msg:'leads student menu update'})
        }
    }) 
}

exports.former_std_menu =(req,res)=>{
    formerStudent.find({user_id:req.params.userId})
    .exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'former student menu not find'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.edit_former_std = (req,res)=>{
    formerStudent.updateOne({user_id:req.params.userId},req.body,(err,resp)=>{
        if(err){
            res.json({code:400,msg:'former student menu not update'})
        }
        else{
            res.json({code:200,msg:'former student menu update'})
        }
    }) 
}

exports.fromer_trail_menu =(req,res)=>{
    formerTrailStudent.find({user_id:req.params.userId})
    .exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'former trail student menu not find'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.edit_former_trail_std = (req,res)=>{
    formerTrailStudent.updateOne({user_id:req.params.userId},req.body,(err,resp)=>{
        if(err){
            res.json({code:400,msg:'former trail student menu not update'})
        }
        else{
            res.json({code:200,msg:'former trail student menu update'})
        }
    }) 
}

exports.camp_std_menu =(req,res)=>{
    campStudent.find({user_id:req.params.userId})
    .exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'camp student menu not find'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.edit_camp_std = (req,res)=>{
    campStudent.updateOne({user_id:req.params.userId},req.body,(err,resp)=>{
        if(err){
            res.json({code:400,msg:'former trail student menu not update'})
        }
        else{
            res.json({code:200,msg:'former trail student menu update'})
        }
    }) 
}