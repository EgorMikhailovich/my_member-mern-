const express = require('express');
const router = express.Router();
const { create,
        fee_info,
        deletetestfee,
        updatetestFee,
        read,
      } = require("../controllers/test_fees")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.get('/test/fees_list/:userId',verifySchool,read);
router.post('/test_fees/:userId',verifySchool,create); 
router.get('/test/fees_info/:feeId',requireSignin,fee_info);
router.delete('/test/feesdelete/:userId/:feeId',requireSignin,deletetestfee);
router.put('/test/testfeesupdate/:userId/:feeId',requireSignin,updatetestFee);

module.exports = router