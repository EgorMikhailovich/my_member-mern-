const express = require("express");
const router = express.Router();
const { create,remove,updateNote,seven_to_forteen,fifteen_to_thirty,moreThirty,listApp_and_callHistory }  = require("../controllers/misucall_notes");
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.get("/missyouCall/seven_to_fourteen_miss/:userId",verifySchool,seven_to_forteen)
router.get("/missyouCall/fifteen_to_thirty_miss/:userId",verifySchool,fifteen_to_thirty)
router.get("/missyouCall/miss_more_then_thirty/:userId",verifySchool,moreThirty)

router.get("/missyouCall/list_appoinment_and_call_history/:userId",verifySchool,listApp_and_callHistory)
router.post("/missYouCall/add_note/:userId/:studentId",verifySchool,create);
router.put("/missYouCall/update_note/:userId/notesId",requireSignin,updateNote)
router.delete("/missYouCall/delete_note/:userId/:notesId",requireSignin,remove);

module.exports = router;