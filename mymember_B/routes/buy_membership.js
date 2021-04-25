const express = require("express");
const router = express.Router();
const { update,create,membership_info,remove,buyMembership } = require("../controllers/buy_membership")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

// router.post("/membership/buy_membership/:user_id",requireSignin,buy_membership.Create);
// router.get("/membership/list_of_buy_membership/:user_id",requireSignin,buy_membership.read);
// router.get("/membership/list_of_buy_membership_info/:user_id/:membershipId",requireSignin,buy_membership.membership_Info)

router.get("/membership/buy_membership_info/:userId/:membershipId",requireSignin,membership_info)
router.post("/membership/buy_membership/:userId/:studentId",requireSignin,create);
router.post("/membership/buy_membership/:userId",requireSignin,buyMembership);
router.put("/membership/update_buy_memberships/:userId/:membershipId",requireSignin,update);
router.delete("/membership/delete_buy_membership/:userId/:membershipId",requireSignin,remove);

module.exports = router;
