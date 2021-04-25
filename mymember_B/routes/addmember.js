const express = require('express');
const router = express.Router();

const { addmember,
    studentinfo,
    deletemember,
    updatemember,
    read,
    active_trial_Std,
    leads_Std,
    Former_Std,
    active_Std,
    Former_trial_Std,
    camp_Std,
    lastestMember,
    expire_member,
    expire_this_month,
    missuCall_list,
    birth_this_month,
    birth_next_month,
    this_month_lead,
    last_three_month,
    missuCall_list_urjent,
    trial_this_month,
    after_school_Std,
    studentCount,
    listMember,
    next_std_find,
    std_count,
    bluckStd
} = require("../controllers/addmember")
const { requireSignin, isAuth, verifySchool } = require("../controllers/auth");
const upload = require('../handler/multer');

router.post('/bluck_student_add/:userId',bluckStd)

// router.post("/member/next_std_find/:stdId",next_std_find)
// perticular std count
router.get('/memeber/std_count/:userId',verifySchool,std_count)

//dashboard routes
router.get('/member/student_type_count/:userId', studentCount)
router.get('/member/latest_member/:userId', verifySchool, lastestMember);
router.get('/member/expire_member/:userId', verifySchool, expire_member);
router.get('/member/expire_this_month_member/:userId', verifySchool, expire_this_month);
router.get('/member/miss_you_call/:userId', verifySchool, missuCall_list);
router.get('/member/miss_you_call_urjent/:userId', verifySchool, missuCall_list_urjent)
router.get('/member/this_month_birth/:userId', verifySchool, birth_this_month);
router.get('/member/next_month_birth/:userId', verifySchool, birth_next_month);
router.get('/member/lead_this_month/:userId', verifySchool, this_month_lead)
router.get('/member/lead_past_three_month/:userId', verifySchool, last_three_month)
router.get('/member/this_month_active_trial/:userId', verifySchool, trial_this_month)

router.get("/member/member_list_name/:userId", verifySchool, listMember)
router.get('/member/member_list/:userId', verifySchool, read);
router.get('/member/member_info/:userId/:StudentId', verifySchool, studentinfo);

router.post('/member/add_member/:userId',verifySchool,upload.single('memberprofileImage'),addmember); 

router.delete('/member/delete_member/:userId/:memberID', verifySchool, deletemember);
router.put('/member/update_member/:userId/:memberID', upload.single('memberprofileImage'), verifySchool, updatemember);

//student type 
router.get('/member/active_trial/:userId', verifySchool, active_trial_Std);
router.get('/member/active_student/:userId', verifySchool, active_Std);
router.get('/member/Former_trial/:userId', verifySchool, Former_trial_Std);
router.get('/member/Former_student/:userId', verifySchool, Former_Std);
router.get('/member/Leads/:userId', verifySchool, leads_Std);
router.get('/member/camp_student/:userId', verifySchool, camp_Std);
router.get('/member/after_school_student/:userId', verifySchool, after_school_Std);


module.exports = router