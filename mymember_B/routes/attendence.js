const express = require("express");
const router = express.Router();
const { create,remove,list_attendence }  = require("../controllers/attendence")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.get("/attendence/attendence_list/:userId",verifySchool,list_attendence)
router.post("/attendence/create_attendence/:userId/:scheduleId",verifySchool,create)
router.delete("/attendence/remove_attendence/:userId/:attendenceId",requireSignin,remove)

module.exports = router;