const express = require("express");
const router = express.Router();
const expenses  = require("../controllers/expenses")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const upload = require('../handler/multer')

//new
router.get("/list_of_expenses/:userId",verifySchool,expenses.read);
router.post("/add_expenses/:userId",verifySchool,upload.single("expense_image"),expenses.Create);
//router.get("/expence_info/:userId/:expenseId",requireSignin,expenses.expenseInfo)
router.put("/update_expenses/:userId/:expenseId",verifySchool,upload.single("expense_image"),expenses.update);
router.delete("/delete_expenses/:userId/:expenseId",requireSignin,expenses.remove);

module.exports = router;
