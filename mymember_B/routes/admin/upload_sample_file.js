const express = require("express");
const router = express.Router();
const { isAdmin } = require("../../controllers/auth")
const { sample_file } = require("../../controllers/admin/upload_sample_file");
const upload = require("../../handler/multer")

// router.get("/email_system/category_list/:adminId",isAdmin,category_list)
router.post("/upload_sample_file/:adminId",upload.single('sample_doc'),isAdmin,sample_file);

module.exports = router;


