const express = require("express");
const router = express.Router();
const { isAdmin } = require("../../../controllers/auth")
const { membershipBuy } = require("../../../controllers/admin/membership_management/school_buy_membership")

router.post("/buy_membership_school/:adminId/:userId",isAdmin,membershipBuy)

module.exports = router;