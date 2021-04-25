const express = require('express');
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { docupload,file_sample,groupList } = require("../controllers/doc_upload")
const upload = require("../handler/multer")

router.get("/group_student_list/:userId",verifySchool,groupList)
router.get("/sample_file/:userId",verifySchool,file_sample)
router.post("/upload_document/:userId",verifySchool,upload.single('document'),verifySchool,docupload)

module.exports = router