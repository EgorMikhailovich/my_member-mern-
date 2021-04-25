const express = require("express");
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth")
const { category } = require("../controllers/emailSystem");

router.get("/email/category_list/:userId",verifySchool,category)

module.exports = router;