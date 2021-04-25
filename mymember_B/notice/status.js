const corn = require('node-cron')
const addmemberModal = require('../models/addmember')
const emailsentsave = require('../models/emailSentSave')
const textSentSave = require("../models/textSentSave")
const sgMail = require('sendgrid-v3-node');
const { sync } = require('make-dir');
// 00 13 19 * * 0-6

//update student expire status
module.exports = corn.schedule("00 02 17 * * 0-6", function(){
    addmemberModal.find({})
        .populate('membership_details')
        .exec((err, stdData) => {
            if (err) {
                res.send({ error: 'student data not found' })
            }
            else {
                for (row of stdData) {
                    for (member of row.membership_details) {
                        var expiry_date = member.expiry_date;
                        var expdate = new Date(expiry_date)
                        console.log(expdate)
                        if (expdate < new Date()) {
                            const subtract = (new Date() - new Date(expiry_date))
                            const diffTime = Math.abs(subtract);
                            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                            console.log(diffDays, typeof diffDays)
                            addmemberModal.findByIdAndUpdate({ _id: row._id }, { status:'expired', days_expire: diffDays })
                                .exec((err, updateStatus) => {
                                    if (err) {
                                        console.log('status is not update')
                                    }
                                    else {
                                        console.log('status update successfully')
                                    }
                                })
                        }
                        else {
                            console.log('membership is not expire')
                        }
                    }
                }
            }
        })
})

// after one day all attendence_status is false
module.exports = corn.schedule("00 24 17 * * 0-6", function () {
    addmemberModal.find({ attendence_status: true }).exec((err, Status) => {
        if (err) {
            console.log({ error: 'status is not find' })
        }
        else {
            for (row of Status) {
                console.log(row._id)
                addmemberModal.update({ _id: row._id }, { $set: { attendence_status: false } })
                    .exec((err, updateStatus) => {
                        if (err) {
                            console.log({ error: 'attendance status is not update' })
                            console.log(err)
                        }
                        else {
                            console.log({ msg: 'attendance status is update' })
                        }
                    })
            }
        }
    })
})

//student rating update
module.exports = corn.schedule("00 12 19 * * 0-6", function () {
    addmemberModal.find({ attendence_status: false }).exec((err, notattend) => {
        if (err) {
            console.log({ error: 'student false status is not found' })
        }
        else {
            for (row of notattend) {
                console.log(row.rating + 1)
                addmemberModal.update({ _id: row._id }, { $set: { rating: row.rating + 1 } })
                    .exec((err, updaterating) => {
                        if (err) {
                            console.log({ error: 'student attendence status is not update' })
                        }
                        else {
                            console.log({ msg: 'student attendence status is update' })
                        }
                    })
            }
        }
    })
})

//left day count of birthday
module.exports = corn.schedule("00 55 11 * * 0-6", function () {
    addmemberModal.find({}).exec((err, list_member) => {
        if (err) {
            console.log({ error: 'member list not found' })
        }
        else {
            console.log(list_member)
            for (row of list_member) {
                var birthDate = row.dob
                var currentDate = new Date()
                var currentYear = new Date().getFullYear();
                var today = new Date(currentYear, currentDate.getMonth(), currentDate.getDate());
                var yearBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

                var timDiffInMilliSeconds = yearBirthday.getTime() - today.getTime();
                var timDiffInDays = timDiffInMilliSeconds / (1000 * 60 * 60 * 24);
                var leftDay = timDiffInDays - 1
                console.log(leftDay)

                addmemberModal.findByIdAndUpdate({ _id: row._id }, { $set: { day_left: leftDay } })
                    .exec((err, left_day) => {
                        if (err) {
                            console.log({ error: 'birthday left day is not update' })
                        }
                        else {
                            console.log({ msg: 'birthday left day is update' })
                        }
                    })

            }
        }
    })
})


// module.exports = corn.schedule('*/20 * * * * *',function(){
//     emailsentsave.find({email_status:true}).exec((err,resp)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(resp)
//         }
//     })
  
// })

module.exports = corn.schedule('*/20 * * * * *',function(){
    console.log('run')
    let options = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        },
      
        formatter = new Intl.DateTimeFormat([], options);
        var a =(formatter.format(new Date()));
        console.log(a,'dt')

        var str = a
        var h = str.split(",");
        console.log(h[0],h[1],'split_td')
        var dates = h[0]
        var d = dates.split('/')
        var dateary = d
        // var hms = h[1].split(':')    
        // console.log(hms,'splitT')  

        // 4/21/2021, 11:08:00 AM dt
// 0|app       | 4/21/2021  11:08:00 AM split_td
// 0|app       | [ ' 11', '08', '00 AM' ] splitT
// 0|app       | 2021 20 4  11 08 0 0
// 0|app       | 2022-09-04T11:08:00.000Z cur
// 0|app       | data not come

// var h1 = '11:08:00 AM'
// var time12h=h1 // time change in 24hr
// console.log(time12h,'fdh1111')
// const [time, modifier] = time12h.split(' ');
// let [hours, minutes] = time.split(':');
// console.log(hours,minutes,'h','m')
// if (hours === '12') {
//   hours = '00';
// }
// if (modifier === 'PM') {
//   hours = parseInt(hours, 10) + 12;
// }

// console.log(msg= {hour:`${hours}`,min:`${minutes}`})
// console.log(msg.hour ,msg.min )


// run
// 0|app  | 4/21/2021, 11:59:00 AM dt
// 0|app  | 4/21/2021  11:59:00 AM split_td
// 0|app  | [ '', '11:59:00', 'AM' ] 24hour_am_pm
// 0|app  | [ '' ] hour_m
// 0|app  | { hour: '', min: 'undefined' }
// 0|app  |  undefined
// 0|app  | 2021 3 21  undefined 0 0
// 0|app  | Invalid Date cur
// 0|app  | data not come

        
        var time12h=h[1] // time change in 24hr
        var tisp = time12h.split(' ');
        console.log(tisp,'24hour_am_pm')
        const [b,time, modifier] = time12h.split(' ');
        var ti = time.split(':')
        console.log(ti,'hour_m')
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
      }
   
    console.log(msg= {hour:`${hours}`,min:`${minutes}`})
    console.log(msg.hour,msg.min)
    
        var y = d[2]
        var mo = parseInt(dateary[0])-1
        var d = parseInt(dateary[1])
        var h = msg.hour
        var mi = msg.min
        var se = '0'
        var mil = '0'
        console.log(y,mo,d,h,mi,se,mil)
        var curdat = new Date(y,mo,d,h,mi,se,mil)
        console.log(curdat,'cur')

        emailsentsave.aggregate([
            {
                $match: {
                    $and: [{ email_status: true },{email_type:'schedule'},
                    { $expr: { $eq: [{ $month: '$DateT' }, { $month: curdat }] } },
                    { $expr: { $eq: [{ $dayOfMonth: '$DateT' }, { $dayOfMonth: curdat }] } },
                    { $expr: { $eq: [{ $year: '$DateT' }, { $year: curdat }] } },
                    { $expr: { $eq: [{ $hour: '$DateT' }, { $hour: curdat }] } },
                    { $expr: { $eq: [{ $minute: '$DateT' }, { $minute: curdat }] } },
                    ]
                }
            }
        ]).exec((err,resp)=>{
            if(resp.length >0){
            console.log(resp)
            var Data = resp
            Data.forEach((row)=>{
                console.log(row)
                var to = row.to
                var from = row.from
                var sub = row.subject
                var template = row.template
                var dmy = row.DateT
                    console.log('inside email')
                    const emailData = {
                        sendgrid_key:'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',
                        to:to,
                        from_email: from,
                        from_name: 'noreply@gmail.com',
                    };
                    emailData.subject = sub;
                    emailData.content = template;
                 
                    sgMail.send_via_sendgrid(emailData).then(resp => {
                        emailsentsave.findByIdAndUpdate(row._id, {$set:{email_type:'sent'}})
                            .exec((err, emailUpdate) => {
                                if (err) {
                                    console.log('email status is not update')
                                }
                                else {
                                    console.log('email sent successfully status schdule sent')
                                }
                            })
                    }).catch(err => {
                        console.log('email not send')
                        console.log(err)
                    })
            })
  
        }
        else{
            console.log('data not come')
        }
})
})


// module.exports = corn.schedule('*/60 * * * * *',function(){
// EmailSent.find({$and:[{email_type:'schedule'},{email_status:true}]})
//     .exec((err,scheduleData)=>{
//         if(err){
//             console.log('schedule data not found')
//         }
//         else{
//             var Data = scheduleData
//             Data.forEach((row)=>{
//                 var Auth = row.email_auth_key
//                 var to = row.to
//                 var from = row.from
//                 var sub = row.subject
//                 var d = new Date(row.sent_date)
//                 var time = row.sent_time
//                 var tsplit = time.split(':')
//                 var date = d.getDate()
//                 var mon = d.getMonth()+1
//                 var hour = tsplit[0]
//                 var min = tsplit[1]
//                 console.log(date)

//                 corn.schedule(`${min} ${hour} ${date} ${mon} *`, function() {
//                     console.log('inside email')
//                     const emailData = {
//                         sendgrid_key:Auth,
//                         to:to,
//                         from_email: from,
//                         from_name: 'noreply@gmail.com',
//                     };
//                     emailData.subject = sub;
//                     emailData.content = '<h1>hello sir i am ok</h1>';
                 
//                     sgMail.send_via_sendgrid(emailData).then(resp => {
//                     EmailSent.findByIdAndUpdate(row._id, {$set:{email_type:'sent'}})
//                             .exec((err, emailUpdate) => {
//                                 if (err) {
//                                     console.log('email status is not update')
//                                 }
//                                 else {
//                                     console.log('email sent successfully status schdule sent')
//                                 }
//                             })
//                     }).catch(err => {
//                         console.log('email not send')
//                         console.log(err)
//                     })
//             })

//             })
//         }
//     })
// })

// module.exports = corn.schedule('*/30 * * * * *',function(){
//     textSentSave.find({$and:[{text_type:'schedule'},{textStatus:true}]})
//     .exec((err,txtData)=>{
//         if(err){
//             console.log('schedule data not found')
//         }
//         else{
//             console.log(txtData)
//             var Data = txtData
//             Data.forEach((row)=>{
//                 var ACCOUNT_SID = process.env.ACCOUNT_SID
//                 var AUTH_TOKEN = process.env.AUTH_TOKEN
//                 var MSG_SERVICE_SID = process.env.MSG_SERVICE_SID
//                 var to = row.to
//                 var msg = row.msg
//                 var d = new Date(row.schedule_date)
//                 var date = d.getDate()
//                 var mon = d.getMonth()+1
//                 console.log(date,mon)
//               var job = corn.schedule(`* * * ${date} ${mon} *`, function() {
                    
//                     function sendBulkMessages(msg,to){
//                         const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
//                         var numbers = []; 
//                         for(i = 0; i < to.length; i++) 
//                         { 
//                             numbers.push(JSON.stringify({  
//                             binding_type: 'sms', address: to[i]})) 
//                         } 
                       
//                         const notificationOpts = { 
//                           toBinding: numbers, 
//                           body: msg, 
//                         }; 

//                         client.notify 
//                         .services(process.env.SERVICE_SID) 
//                         .notifications.create(notificationOpts) 
//                         .then((resp)=>{
//                                 console.log(row._id)                            
//                                textSentSave.findByIdAndUpdate(row._id,{text_type:'sent'})
//                               .exec((err,updatetxt)=>{
//                                    if(err){
//                                       console.log('schedule text sms not sent')
//                                    }
//                               else{

//                                   console.log('schedule text sms sent successfully')
//                                   job.stop()
//                                }
//                            })
//                         }).catch((error)=>{
//                             res.send(error)
//                         })
//                     }  
//                     sendBulkMessages(msg,to)

//                 })
//             })
//         }
//     })
// })





