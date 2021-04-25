const express = require('express');
const router = express.Router();
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const { create,list_std,promote_std } = require("../controllers/Test")

router.get("/test/student_list/:userId",verifySchool,list_std)
router.post("/test/add_student_list/:userId",verifySchool,create)
router.put("/test/promote_student/:userId/:stdId/:proId/:nxt_rank_id",verifySchool,promote_std)

module.exports = router