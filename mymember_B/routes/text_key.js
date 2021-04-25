const express = require("express");
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { add_auth_key } =require("../controllers/text_key")

router.post("/add_text_auth_key/:userId",verifySchool,add_auth_key)

module.exports = router;