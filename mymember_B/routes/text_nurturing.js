const express = require("express");
const router = express.Router();
const { addCategory,category_list,updateCategory,removeCategory }  = require("../controllers/text_nurturing")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.get("/text_nuturing/category_list/:userId",verifySchool,category_list)
router.post("/text_nuturing/addCategory/:userId",verifySchool,addCategory)
router.put("/text_nurturing/editCategory/:userId/:categoryId",requireSignin,updateCategory)
router.delete("/text_nurturing/removeCateogry/:userId/:categoryId",requireSignin,removeCategory)

module.exports = router;