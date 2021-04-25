const express = require("express");
const router = express.Router();
const { isAdmin } = require("../../controllers/auth")
const { addCategory,updateCategory,removeCategory,category_list } = require("../../controllers/admin/email_system");

router.get("/email_system/category_list/:adminId",isAdmin,category_list)
router.post("/email_system/addCategory/:adminId",isAdmin,addCategory);
router.put("/email_system/edit_category/:adminId/:categoryId",isAdmin,updateCategory);
router.delete("/email_system/remove_category/:adminId/:categoryId",isAdmin,removeCategory);

module.exports = router;


