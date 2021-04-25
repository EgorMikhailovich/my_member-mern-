const express = require('express');
const router = express.Router();
const { create,remove,updateNote } = require("../controllers/renewal_note");
const { requireSignin, isAuth, verifySchool } = require("../controllers/auth");

router.post("/renewal/add_note/:userId/:studentId",verifySchool,create);
router.put("/renewal/update_note/:userId/notesId",requireSignin,updateNote)
router.delete("/renewal/delete_note/:userId/:notesId",requireSignin,remove);

module.exports = router;