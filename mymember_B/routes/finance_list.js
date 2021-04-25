const express = require("express");
const router = express.Router();
const { monthly_pay,exp_break,income_break,cc_expire,membership }  = require("../controllers/finance_list")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.get("/finance/monthly_pay_list/:userId",verifySchool,monthly_pay)
router.get("/finance/expense_breakdown/:userId",verifySchool,exp_break)
router.get("/finace/income_breakdown/:userId",verifySchool,income_break)
router.get("/finance/cc_expire/:userId",verifySchool,cc_expire)
//router.get("/finance/student_membership_status/:userId",verifySchool,membership_status)
router.get("/finance/student_membership_details/:userId",verifySchool,membership)

module.exports = router;