const express = require('express');
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { create,read,remove,send_email,send_sms,voiceCall } = require("../controllers/student_appoinment");
const router = express.Router();

router.get("/student_appoinment_list/:userId",verifySchool,read)
router.post("/student_appoinment/:userId/:studentId",verifySchool,create)
router.delete("/student_appoinment_remove/:userId/:appoinmentId",requireSignin,remove)

router.post("/renewals/send_sms/:userId",verifySchool,send_sms)
router.post("/renewals/send_email/:userId",verifySchool,send_email)
router.post("/renewals/voice_call",voiceCall)

module.exports = router