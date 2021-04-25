const express = require('express');
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { readfolder,createfolder,editFolder,removeFolder } = require("../controllers/doc_folder")

router.get("/document_folder/read_folder/:userId",verifySchool,readfolder)
router.post("/document_folder/create_folder/:userId",verifySchool,createfolder)
router.put("/document_folder/edit_folder/:userId/:docfolderId",requireSignin,editFolder)
router.delete("/document_folder/delete_folder/:userId/:docfolderId",requireSignin,removeFolder)

module.exports = router