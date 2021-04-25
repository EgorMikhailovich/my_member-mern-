var allStudent = require("./models/menu/std_menu/all_student")
var active_std = require("./models/menu/std_menu/active_trail")
var after_std = require("./models/menu/std_menu/after_school")
var formerStd = require("./models/menu/std_menu/formar_std")
var formertrail = require("./models/menu/std_menu/former_trail")
var Leads = require("./models/menu/std_menu/lead_std")
var Camp = require("./models/menu/std_menu/camp")

function dummy_menu(){

this.all_std = (userId) => {
       return new Promise((resolve, reject) => {
         var all_std_data ={
            user_id:userId,
            photo:'Photo',
            first_name:'First Name',
            last_name:'Last Name',
            status:'Status',
            primary_phone:'Primary Phone',
            program_category:'Program Category',
            start_date:'Start Date',
            expiry_date:'Expiry Date',
            rating:'Rating',
            belt:'Belt',
            manage:'Manage'
         }
         allStudent.create(all_std_data).then((resp)=>{
             resolve(resp)
         }).catch((error)=>{
             reject(error)
         })
       })
}
this.active_std = (userId) => {
    return new Promise((resolve, reject) => {
      var active_std_data ={
         user_id:userId,
         photo:'Photo',
         first_name:'First Name',
         last_name:'Last Name',
         status:'Status',
         primary_phone:'Primary Phone',
         program_category:'Program Category',
         start_date:'Start Date',
         expiry_date:'Expiry Date',
         rating:'Rating',
         belt:'Belt',
         manage:'Manage'
      }
      active_std.create(active_std_data).then((resp)=>{
          resolve(resp)
      }).catch((error)=>{
          reject(error)
      })
    })
}
this.after_school_std = (userId) => {
    return new Promise((resolve, reject) => {
      var afterSchool ={
         user_id:userId,
         photo:'Photo',
         first_name:'First Name',
         last_name:'Last Name',
         status:'Status',
         primary_phone:'Primary Phone',
         program_category:'Program Category',
         start_date:'Start Date',
         expiry_date:'Expiry Date',
         rating:'Rating',
         belt:'Belt',
         manage:'Manage'
      }
      after_std.create(afterSchool).then((resp)=>{
          resolve(resp)
      }).catch((error)=>{
          reject(error)
      })
    })

}
this.former_std = (userId) => {
    return new Promise((resolve, reject) => {
      var formerStudent ={
         user_id:userId,
         photo:'Photo',
         first_name:'First Name',
         last_name:'Last Name',
         status:'Status',
         primary_phone:'Primary Phone',
         program_category:'Program Category',
         start_date:'Start Date',
         expiry_date:'Expiry Date',
         rating:'Rating',
         belt:'Belt',
         manage:'Manage'
      }
      formerStd.create(formerStudent).then((resp)=>{
          resolve(resp)
      }).catch((error)=>{
          reject(error)
      })
    })

}
this.former_trail_std = (userId) => {
    return new Promise((resolve, reject) => {
      var formerTrail ={
         user_id:userId,
         photo:'Photo',
         first_name:'First Name',
         last_name:'Last Name',
         status:'Status',
         primary_phone:'Primary Phone',
         program_category:'Program Category',
         start_date:'Start Date',
         expiry_date:'Expiry Date',
         rating:'Rating',
         belt:'Belt',
         manage:'Manage'
      }
      formertrail.create(formerTrail).then((resp)=>{
          resolve(resp)
      }).catch((error)=>{
          reject(error)
      })
    })

}
this.leads_std = (userId) => {
    return new Promise((resolve, reject) => {
      var lead ={
         user_id:userId,
         photo:'Photo',
         first_name:'First Name',
         last_name:'Last Name',
         status:'Status',
         primary_phone:'Primary Phone',
         program_category:'Program Category',
         start_date:'Start Date',
         expiry_date:'Expiry Date',
         rating:'Rating',
         belt:'Belt',
         manage:'Manage'
      }
      Leads.create(lead).then((resp)=>{
          resolve(resp)
      }).catch((error)=>{
          reject(error)
      })
    })

}
this.camp_std = (userId) => {
    return new Promise((resolve, reject) => {
      var camp ={
         user_id:userId,
         photo:'Photo',
         first_name:'First Name',
         last_name:'Last Name',
         status:'Status',
         primary_phone:'Primary Phone',
         program_category:'Program Category',
         start_date:'Start Date',
         expiry_date:'Expiry Date',
         rating:'Rating',
         belt:'Belt',
         manage:'Manage'
      }
      Camp.create(camp).then((resp)=>{
          resolve(resp)
      }).catch((error)=>{
          reject(error)
      })
    })

}

}

module.exports = new dummy_menu()
