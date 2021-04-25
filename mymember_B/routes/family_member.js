const express = require('express');
const router = express.Router();
const { requireSignin  } = require('../controllers/auth');
const { create,remove } = require('../controllers/family_member');

router.post("/family/add_member/:user_id/:student_id/:member_id",create);
router.delete("/family/delete_member/:user_id/:member_id",remove)

module.exports = router