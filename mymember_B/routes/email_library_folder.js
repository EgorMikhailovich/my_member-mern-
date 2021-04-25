const express = require("express");
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { create_folder,update_folder,delete_folder }  = require("../controllers/email_library_folder")

router.post("/email_library/create_folder/:userId/:catId",verifySchool,create_folder)
router.put("/email_library/update_folder/:userId/:folderId",requireSignin,update_folder)
router.delete("/email_library/delete_folder/:userId/:folderId",requireSignin,delete_folder)

module.exports = router;