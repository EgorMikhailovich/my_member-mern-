const express = require("express");
const router = express.Router();
const { isAdmin } = require("../../../controllers/auth")
const { createMembership,listMembership,updateMembership,removeMembership } = require("../../../controllers/admin/membership_management/school_membership")

router.get("/list_user_membership/:adminId",isAdmin,listMembership)
router.post("/create_user_membership/:adminId",isAdmin,createMembership)
router.put("/update_user_membership/:adminId/:membershipId",isAdmin,updateMembership)
router.delete("/remove_user_membership/:adminId/:membershipId",isAdmin,removeMembership)

module.exports = router;