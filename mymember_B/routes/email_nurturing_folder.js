const express = require("express");
const router = express.Router();
const { create_folder,update_folder,delete_folder }  = require("../controllers/email_nurturing_folder")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.post("/email_nurturing/create_folder/:userId/:catId",verifySchool,create_folder)
router.put("/email_nurturing/update_folder/:userId/:folderId",requireSignin,update_folder)
router.delete("/email_nurturing/delete_folder/:userId/:folderId",requireSignin,delete_folder)

module.exports = router;