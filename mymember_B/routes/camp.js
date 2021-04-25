const express = require('express');
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const{ create,read,camp_info,update_camp,delete_camp } = require("../controllers/camp");

router.get("/camp/list_camp/:userId",verifySchool,read);
router.post("/camp/add_camp/:userId",verifySchool,create);
router.get("/camp/info_camp/:userId/:campId",requireSignin,camp_info);
router.put("/camp/update_camp/:userId/:campId",requireSignin,update_camp);
router.delete("/camp/delete_camp/:userId/:campId",requireSignin,delete_camp);

module.exports = router