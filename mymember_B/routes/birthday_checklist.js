const express = require("express");
const router = express.Router();
const { BirthChecklist,remove }  = require("../controllers/birthday_checklist")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.post("/birthday/birthday_checklist/:userId/:studentId",verifySchool,BirthChecklist)
router.delete("/birthday/remove_birthday_checklist/:userId/:checkListId",requireSignin,remove)

module.exports = router;