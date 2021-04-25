const express = require('express');
const router = express.Router();
const { create,update,remove } = require("../controllers/psubcategory")
const { requireSignin, isAuth } = require("../controllers/auth");

router.post("/program_createSubcategory/:userID/:catId",requireSignin,create);
router.put("/program_updateSubcategory/:sub_catId",requireSignin,update);
router.delete("/program_deleteSubcategory/:sub_catId",requireSignin,remove);

module.exports = router;