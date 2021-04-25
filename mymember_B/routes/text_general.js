const express = require("express");
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { listCat,addcategory,updateCategory,removeCat } = require("../controllers/text_general")

router.get("/text_general/categoryList/:userId",verifySchool,listCat)
router.post("/text_general/addCategory/:userId",verifySchool,addcategory)
router.put("/text_general/updateCategory/:userId/:catId",verifySchool,updateCategory)
router.delete("/text_general/removeCategory/:userId/:catId",verifySchool,removeCat)

module.exports = router;