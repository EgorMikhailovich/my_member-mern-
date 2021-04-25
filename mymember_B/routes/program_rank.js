const express = require("express");
const router = express.Router();
const program = require("../controllers/program_rank")
const { requireSignin, isAuth } = require("../controllers/auth");

const upload = require('../handler/multer')

router.get("/program_rank_info/:user_Id/:program_rank_id",requireSignin,program.program_Info);
router.post("/add_program_rank/:user_Id",requireSignin,upload.single("rank_image"),program.create);
//router.get("/list_of_program_rank/:user_id",requireSignin,program.read);
router.put("/update_program_rank/:user_Id/:program_rank_id",upload.single("rank_image"),requireSignin,program.update);
router.delete("/delete_program_rank/:user_Id/:program_rank_id",requireSignin,program.remove);

module.exports = router;
