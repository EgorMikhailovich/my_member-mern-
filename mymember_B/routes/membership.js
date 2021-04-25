const express = require('express');
const router = express.Router();
const { create,read,membershipInfo,remove,membershipUpdate,membershipStatus} = require ('../controllers/membership')
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const upload = require('../handler/multer')

router.get('/membership/membership_list/:userId',verifySchool,read)
router.post('/membership/add_membership/:userId',verifySchool,upload.single('membership_profile'),create)
router.delete('/membership/delete_membership/:userId/:membershipId',requireSignin,remove)
router.get('/membership/info_membership/:userId/:membershipId',requireSignin,membershipInfo)
router.put('/membership/update_membership/:userId/:membershipId',requireSignin,upload.single('membership_profile'),membershipUpdate)

module.exports = router;