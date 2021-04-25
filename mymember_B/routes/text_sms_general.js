const express = require("express");
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { send_sms,save_sms,remove_sms,update_sms,recieve } = require("../controllers/text_sms_general")

router.post("/text_general/send_text_sms/:userId",verifySchool,send_sms)
router.post("/text_general/save_text_sms/:userId/:folderId",verifySchool,save_sms)
router.put("/text_general/update_text_sms/:userId/:textId",verifySchool,update_sms)
router.delete("/text_general/remove_text_sms/:userId/:textId",verifySchool,remove_sms)

// router.post("/text_recieve",recieve)

module.exports = router;