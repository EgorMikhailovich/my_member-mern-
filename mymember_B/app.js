const express = require('express');
const fs = require('fs')
const http = require('http')
const https = require('https')
const ejs = require('ejs')
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require("path");
const crypto = require("crypto")
const fileUpload = require('express-fileupload');
const corn = require('node-cron')
const expressValidator = require('express-validator');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');

//shivani's
const administrate_user = require("./routes/administrater_user");
const programRoutes = require("./routes/program")
const manageRankRoutes = require("./routes/program_rank")
const stripe = require("./routes/stripe");
const manage_stripe = require("./routes/manage_strip")
const todo_api = require("./routes/todo_apis")
const adminstrate = require("./routes/administrater_user")
const goals_api = require("./routes/goals_api");
const class_schedule = require("./routes/class_schedule")
const attendence = require("./routes/attendence")
const campaign_type = require("./routes/campaign_type");
const organization_setup = require("./routes/organization_setup");
const category_manag = require("./routes/category_manag")
const appointment = require('./routes/appointment')
const events = require("./routes/events")
const add_member = require("./routes/addmember")
const test_fees = require("./routes/test_fees")
const pcategory = require("./routes/pcategory")
const psubcategory = require("./routes/psubcategory")
const add_membership = require("./routes/membership")
const finance_info = require("./routes/finance_info")
const bymember_ship = require("./routes/buy_membership")
const candidates = require("./routes/candidate")
const withdraw_funds = require("./routes/withdraw_fund")
const family_member = require("./routes/family_member")
const my_group = require("./routes/my_group")
const camp = require("./routes/camp")
const test_purchase = require("./routes/test_purchase")
const test = require("./routes/Test")
const expense = require("./routes/expences");
const expences_category = require("./routes/expenses_category")
const student_appoinment = require("./routes/student_appoinment") 
const birthday_appoinment = require("./routes/birthday_appoinment")
const renewal_notes = require("./routes/renewal_note")
const birthday_notes = require("./routes/birthday_notes")
const birthday_checklist = require("./routes/birthday_checklist")
const support = require("./routes/support")
const misucall_appoinment = require("./routes/misucall_appoinment")
const misucall_notes = require("./routes/misucall_notes")
const all_appoinment = require("./routes/all_appoinment")
const email_compose = require("./routes/email_compose")
const email_compose_folder = require("./routes/email_compose_folder")
const email_nurturing = require("./routes/email_nurturing")
const email_nurturing_folder = require("./routes/email_nurturing_folder")
const email_library = require("./routes/email_library")
const email_library_folder = require('./routes/email_library_folder')
const compose_template = require("./routes/compose_template")
const nurturing_template = require("./routes/nurturing_template")
const library_template = require("./routes/library_template")
// const emailSystem = require("./routes/emailSystem")
const text_sms = require("./routes/text_sms_general")
const text_genral = require("./routes/text_general")
const text_genral_folder = require("./routes/text_general_folder")
const text_nurturing = require("./routes/text_nurturing")
const text_nurturing_folder = require("./routes/text_nurturing_folder")
const text_nurturing_template = require("./routes/text_nurturing_template")
const document_folder = require("./routes/doc_folder")
const document_subFolder = require("./routes/doc_subfolder")
const upload_doc = require("./routes/doc_upload")
const finance_list = require("./routes/finance_list")
const student_email =require("./routes/std_temp_list")
const student_text = require("./routes/std_text_list")

//admin routes
const manage_user = require("./routes/admin/manage_user")
const email_system = require("./routes/admin/email_system")
const email_system_folder = require("./routes/admin/email_system_folder")
const email_system_template = require("./routes/admin/email_system_template")
const location = require("./routes/admin/settings/location")
const user_membership = require("./routes/admin/membership_management/school_membership")
const buy_user_membership = require("./routes/admin/membership_management/school_buy_membership")

//menu routes
const student_menu = require("./routes/menu/std_menu/all_student_menu")


//school auth key email,text,payment get way
const emailKey = require("./routes/email_key")
const textkey = require("./routes/text_key")
const sample_doc = require("./routes/admin/upload_sample_file")

const app = express();
// app.use(fileUpload({ safeFileNames: true, preserveExtension: true }))
const uuidv1 = require('uuid/v1');
uuidv1()
// status check expire or not

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));
    // const statusCheck = require("./notice/status")

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', braintreeRoutes);
app.use('/api', orderRoutes);
app.use("/api",programRoutes)
app.use("/api",manageRankRoutes);
app.use("/api",stripe);
app.use("/api",adminstrate);
app.use('/api',todo_api)
app.use('/api',goals_api)
app.use("/api",class_schedule);
app.use("/api",attendence);
app.use("/api",campaign_type)
app.use("/api",organization_setup)
app.use("/api",category_manag)
app.use("/api",expense);
app.use("/api",appointment);
app.use("/api",events)
app.use("/api",add_member)
app.use("/api",pcategory)
app.use("/api",psubcategory)
app.use('/api', add_membership)
app.use('/api', finance_info)
app.use('/api', bymember_ship);
app.use('/api',manage_stripe);
app.use('/api',candidates);
app.use('/api',withdraw_funds);
app.use('/api',family_member);
app.use('/api',my_group);
app.use('/api',camp);
app.use("/api",test_fees)
app.use('/api',test_purchase);
app.use('/api',test);
app.use('/api',expences_category);
app.use('/api',support);
app.use('/api',administrate_user)
app.use('/api',student_appoinment);
app.use('/api',birthday_appoinment);
app.use('/api',renewal_notes);
app.use('/api',birthday_notes);
app.use('/api',birthday_checklist)
app.use('/api',misucall_appoinment)
app.use('/api',misucall_notes)
app.use('/api',all_appoinment)
app.use('/api',email_compose)
app.use('/api',email_nurturing)
app.use('/api',email_library)
app.use('/api',email_compose_folder)
app.use('/api',email_nurturing_folder)
app.use('/api',compose_template)
app.use('/api',nurturing_template)
app.use('/api',library_template)
app.use('/api',email_library_folder)
// app.use('/api',emailSystem)
app.use('/api',text_sms)
app.use('/api',text_genral)
app.use('/api',text_genral_folder)
app.use('/api',text_nurturing)
app.use('/api',text_nurturing_folder)
app.use('/api',text_nurturing_template)
app.use('/api',document_folder)
app.use('/api',document_subFolder)
app.use('/api',upload_doc)
app.use('/api',finance_list)
app.use('/api',student_email)
app.use('/api',student_text)
//admin middleware
app.use('/api',manage_user)
app.use('/api',email_system)
app.use('/api',email_system_folder)
app.use('/api',email_system_template)
app.use('/api',location)
app.use('/api',user_membership)
app.use('/api',buy_user_membership)
app.use('/api',sample_doc)
// school auth key middleware
app.use('/api',emailKey)
app.use('/api',textkey)

// menu middleware
app.use('/api',student_menu)

const privateKey1 = fs.readFileSync('/etc/letsencrypt/live/mymember.com/privkey.pem', 'utf8');
const certificate1 = fs.readFileSync('/etc/letsencrypt/live/mymember.com/cert.pem', 'utf8');
const ca1 = fs.readFileSync('/etc/letsencrypt/live/mymember.com/chain.pem', 'utf8');

const credentials1 = {
	key: privateKey1,
	cert: certificate1,
	ca: ca1
};

// app.use(function (req, res, next){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     next();
//   });

const port = process.env.PORT || 8080;

var server = https.createServer(credentials1, app).listen(port, function(){
    console.log("Express server listening on port " + port);
});

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
