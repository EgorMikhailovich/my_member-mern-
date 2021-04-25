const express = require("express");
const router = express.Router();
const { create,remove,updateNote }  = require("../controllers/birthday_notes")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");

router.post("/birthday/add_note/:userId/:studentId",verifySchool,create)
router.put("/birthday/update_note/:userId/:notesId",requireSignin,updateNote)
router.delete("/birthday/delete_note/:userId/:notesId",requireSignin,remove)

module.exports = router;