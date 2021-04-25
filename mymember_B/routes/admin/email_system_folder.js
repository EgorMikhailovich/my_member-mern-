const express = require("express");
const router = express.Router();
const { isAdmin } = require("../../controllers/auth")
const { create_folder,update_folder,delete_folder }  = require("../../controllers/admin/email_system_folder")

router.post("/email_system/create_folder/:adminId/:catId",isAdmin,create_folder)
router.put("/email_system/update_folder/:adminId/:folderId",isAdmin,update_folder)
router.delete("/email_system/delete_folder/:adminId/:folderId",isAdmin,delete_folder)

module.exports = router;