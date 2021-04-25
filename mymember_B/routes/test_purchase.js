const express = require('express');
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const{ create } = require("../controllers/test_purchase")

router.post("/test/test_purchase/:studentId/:test_fee_Id",requireSignin,create);

module.exports = router