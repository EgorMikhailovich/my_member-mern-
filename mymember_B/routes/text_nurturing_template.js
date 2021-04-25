const express = require("express");
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { save_sms,remove_sms,update_sms } = require("../controllers/text_nurturing_template")

router.post("/text_nurturing/save_text_sms/:userId/:folderId",verifySchool,save_sms)
router.put("/text_nurturing/update_text_sms/:userId/:textId",verifySchool,update_sms)
router.delete("/text_general/remove_text_sms/:userId/:textId",verifySchool,remove_sms)

module.exports = router;