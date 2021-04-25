const express = require("express");
const router = express.Router();
const { create,read } = require("../controllers/withdraw_fund");
const { requireSignin, isAuth } = require("../controllers/auth");

router.get("/withdraw/check_list",requireSignin,read);
router.post("/withdraw/request_check",requireSignin,create);

module.exports = router;