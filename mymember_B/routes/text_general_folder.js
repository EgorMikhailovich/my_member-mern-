const express = require("express");
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { addFolder,updateFolder,removefolder } = require("../controllers/text_general_folder")

router.post("/text_general/addFolder/:userId/:catId",verifySchool,addFolder)
router.put("/text_general/updateFolder/:userId/:folderId",verifySchool,updateFolder)
router.delete("/text_general/deleteFolder/:userId/:folderId",verifySchool,removefolder)

module.exports = router;