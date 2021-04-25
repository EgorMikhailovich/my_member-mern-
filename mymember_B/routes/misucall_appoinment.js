const express = require("express");
const router = express.Router();
const {create,remove,updateAppoinment,missuList} = require("../controllers/misucall_appoinment")
const { requireSignin,isAuth,verifySchool} = require("../controllers/auth");

router.get("/missYouCall_appoinmnet/:userId",verifySchool,missuList)
router.post("/missYouCall_appoinment/:userId/:studentId",verifySchool,create)
router.put("/missYouCall_appoinment/:userId/:appoinmentId",requireSignin,updateAppoinment)
router.delete("/missYouCall_appoinment_remove/:userId/:appoinmentId",requireSignin,remove);

module.exports = router;