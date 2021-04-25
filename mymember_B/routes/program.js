const express = require("express");
const router = express.Router();
const program = require("../controllers/program")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const upload = require('../handler/multer')

router.post("/add_program/:userId",verifySchool,upload.single("program_image"),program.create);
router.get("/list_of_program/:userId",verifySchool,program.read);
router.get("/program_details/:userId/:proId",verifySchool,program.programs_detail);
router.get("/program_rank/:userId/:proId",verifySchool,program.program_rank)
router.put("/update_program/:userId/:proId",verifySchool,upload.single("program_image"),program.update);
router.delete("/delete_program/:userId/:proId",verifySchool,program.remove);

module.exports = router;
