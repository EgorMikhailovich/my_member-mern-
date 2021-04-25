const express = require('express');
const router = express.Router();
const { create,update,read,remove,catList } = require("../controllers/pcategory")
const { requireSignin, isAuth,verifySchool } = require("../controllers/auth");

router.get("/programCategory_list/:userId",verifySchool,catList)
router.get("/programCategory_details/:categoryId",requireSignin,read)
router.post("/program_createCategory/:userId",requireSignin,create)
router.put("/program_updateCategory/:categoryId",requireSignin,update)
router.delete("/program_deleteCategory/:categoryId",requireSignin,remove)

module.exports = router;