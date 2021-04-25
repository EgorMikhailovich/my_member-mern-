const express = require('express');
const router = express.Router();
const { create,remove } = require('../controllers/my_group')

router.post("/myGroup/add_member/:user_id/:student_id/:member_id",create);
router.delete("/myGroup/delete_member/:user_id/:member_id",remove);

module.exports = router