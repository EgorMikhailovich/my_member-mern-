const express = require('express');
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { createSubFolder,editSubFolder,removeSubFolder,documentList } = require("../controllers/doc_subfolder")

router.get("/document_subfolder/list_docuemnt/:userId/:subfolderId",verifySchool,documentList)
router.post("/document_subfolder/create_subfolder/:userId/:folderId",verifySchool,createSubFolder)
router.put("/document_subfolder/edit_subfolder/:userId/:subfolderId",requireSignin,editSubFolder)
router.delete("/document_subfolder/remove_subfolder/:userId/:subfolderId",requireSignin,removeSubFolder)

module.exports = router