// function timefun(){
// var DT = new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'})
// var TimeDate = DT.split(',')
// var date=TimeDate[0]
// var time12h=TimeDate[1]

// const [b,time, modifier] = time12h.split(' ');

// let [hours, minutes] = time.split(':');
// if (hours === '12') {
//   hours = '00';
// }
// if (modifier === 'PM') {
//   hours = parseInt(hours, 10) + 12;
// }
// return({Date:date,Time:`${hours}:${minutes}`})

// }
// var data = timefun()      
// console.log(data)
//         //   var emailDetail =  new all_temp(obj)
//         //   emailDetail.sent_date = data.Date
//         //   emailDetail.sent_time = data.Time 
//         var DT = '04/19/2021'   

// var dz = new Date(`${data.Date} ${data.Time}`);
// var t = dz.toISOString()
// console.log(t)

// var newDate =  new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'})
// console.log(newDate)

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

    console.log(a,'ffffsd')

    // var TimeDate = DT.split(',')
    // var date=TimeDate[0]
    // var time12h=TimeDate[1]
    // const [b,time, modifier] = time12h.split(' ');
   
    // let [hours, minutes] = time.split(':');
    // if (hours === '12') {
    //   hours = '00';
    // }
    // if (modifier === 'PM') {
    //   hours = parseInt(hours, 10) + 12;
    // }
    // return({Date:date,Time:`${hours}:${minutes}`})
    

// 4/21/2021, 11:08:00 AM dt
// 0|app       | 4/21/2021  11:08:00 AM split_td
// 0|app       | [ ' 11', '08', '00 AM' ] splitT
// 0|app       | 2021 20 4  11 08 0 0
// 0|app       | 2022-09-04T11:08:00.000Z cur
// 0|app       | data not come

    
    var str = a
    var h = str.split(",");
    console.log(h[0],h[1],'split_td')
    var dates = h[0]
    var d = dates.split('/')
    var dateary = ['4','21','2021']
    console.log(dateary,'fd')
    var h1 = '11:08:00 AM'
    
    var time12h=h1 // time change in 24hr
    console.log(time12h,'fdh1111')
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    console.log(hours,minutes,'h','m')
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
   
    console.log(msg= {hour:`${hours}`,min:`${minutes}`})
    console.log(msg.hour ,msg.min )

    var y = dateary[2]
    var mo = parseInt(dateary[0])-1
    var d = parseInt(dateary[1])
    var h = msg.hour
    var mi = msg.min
    var se = '0'
    var mil = '0'
    console.log(y,mo,d,h,mi,se,mil)
    var curdat = new Date(y,mo,d,h,mi,se,mil)
    
    console.log(curdat.getHours(),curdat.getMinutes(),curdat,'cur')

    // var y ='2021'
    // var mo = '4'
    // var d = '20'
    // var h = '11'
    // var mi = '04'
    // var se = '0'
    // var mil = '0'


    // new Date(year, month, day, hours, minutes, seconds, milliseconds)

        
var TI = '15:25'
var follow = 0
// var d = new Date()
// // console.log(d)
// var nd = d.getDate()+follow

// var nm = d.getMonth()
// var ny = d.getFullYear()

// var nD = new Date(`${nm} ${nd} ${ny} ${TI}`)
// console.log(nD)
// console.log(nD.getDate())
// var dz = new Date(`${req.body.sent_date} ${req.body.sent_time}`);
// const moment = require('moment');
// var sent_date = '04/19/2021'
// var sent_time = '15:33'
// var date = new Date(`${sent_date} ${sent_time}`);
// date.setDate(date.getDate() + follow);

// var mT = moment(date).format('MM/DD/YYYY')    
// console.log(date,mT)