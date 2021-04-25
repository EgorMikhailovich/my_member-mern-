const express = require('express');
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { text_create,text_contact_list } = require("../controllers/std_text_list")

router.get('/student_text_temp_list/:userId',verifySchool,text_contact_list)
router.post('/create_contact_text_list/:userId',verifySchool,text_create)

module.exports = router