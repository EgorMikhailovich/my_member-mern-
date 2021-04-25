const express = require("express");
const router = express.Router();
const { create_folder,update_folder,delete_folder }  = require("../controllers/email_compose_folder")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.post("/email_compose/create_folder/:userId/:catId",verifySchool,create_folder)
router.put("/email_compose/update_folder/:userId/:folderId",requireSignin,update_folder)
router.delete("/email_compose/delete_folder/:userId/:folderId",requireSignin,delete_folder)

module.exports = router;