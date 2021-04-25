const express = require("express");
const router = express.Router();
const appointment  = require("../controllers/appointment")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.post("/add_appointment/:userId",verifySchool,appointment.Create);
router.get("/appointment/list_of_appointments/:userId",verifySchool,appointment.read);
router.get("/appointment/list_of_appoinment_info/:userId/:appointId",requireSignin,appointment.appointInfo)
router.put("/appointment/update_appointment/:userId/:appointId",requireSignin,appointment.update);
router.delete("/delete_appointment/:userId/:appointId",requireSignin,appointment.remove);

module.exports = router;
