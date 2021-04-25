const express = require("express");
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { add_template,list_template,remove_template,status_update_template,update_template,single_tem_update_status } = require("../controllers/nurturing_template")

router.get("/email_nurturing/list_template/:userId/:folderId",verifySchool,list_template)
router.post("/email_nurturing/add_template/:userId/:folderId",verifySchool,add_template)
router.put("/email_nurturing/update_template/:userId/:templateId",verifySchool,update_template)
router.put("/email_nurturing/single_template_status_change/:userId/:tempId",verifySchool,single_tem_update_status)
router.put("/email_nurturing/update_template_status/:userId/:folderId",verifySchool,status_update_template)// all template status change
router.delete("/email_nurturing/remove_template/:userId/:templateId",requireSignin,remove_template)

module.exports = router;