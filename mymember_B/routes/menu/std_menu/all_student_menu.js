const express = require('express');
const router = express.Router();
// const { verifySchool } = require("");
const menu = require("../../../controllers/menu/std_menu/all_student_menu");

router.get("/menu/all_std_menu/:userId",menu.all_std_menu)
router.put("/menu/update_all_std_menu/:userId",menu.edit_all_std_menu)

router.get("/menu/after_std_menu/:userId",menu.after_school_list)
router.put("/menu/update_after_std_menu/:userId",menu.edit_after_school)

router.get("/menu/active_trail_menu/:userId",menu.active_trail_menu)
router.put("/menu/update_active_trail_menu/:userId",menu.edit_active_trail)

router.get("/menu/lead_menu/:userId",menu.leads_menu)
router.put("/menu/update_lead_menu/:userId",menu.edit_lead_menu)

router.get("/menu/former_std_menu/:userId",menu.former_std_menu)
router.put("/menu/update_former_std_menu/:userId",menu.edit_former_std)


router.get("/menu/former_trail_std_menu/:userId",menu.fromer_trail_menu)
router.put("/menu/update_former_std_menu/:userId",menu.edit_former_trail_std)

router.get("/menu/camp_std_menu/:userId",menu.camp_std_menu)
router.put("/menu/update_camp_std_menu/:userId",menu.edit_camp_std)

module.exports = router