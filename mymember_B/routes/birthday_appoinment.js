const express = require("express");
const router = express.Router();
const { create,remove,birthlist }  = require("../controllers/birthday_appoinment")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.get("/birthday_appoinment_list/:userId",verifySchool,birthlist)
router.post("/birthday/birthday_appoinment/:userId/:studentId",verifySchool,create);
router.delete("/birthday/birthday_remove_appoinment/:userId/:appoinmentId",requireSignin,remove);

module.exports = router;
