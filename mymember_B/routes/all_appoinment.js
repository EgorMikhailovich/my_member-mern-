const express = require("express");
const router = express.Router();
const { appoinment_list }  = require("../controllers/all_appoinment")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.get("/all_appoinment_List/:userId",verifySchool,appoinment_list)

module.exports = router;

