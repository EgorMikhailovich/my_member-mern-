const express = require('express');
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const{ add_key } = require("../controllers/email_key");

router.post("/add_email_auth_key/:userId",verifySchool,add_key)

module.exports = router