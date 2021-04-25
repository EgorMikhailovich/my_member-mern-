const express = require("express");
const router = express.Router();
const finance_info  = require("../controllers/finance_info")
const { requireSignin, isAuth } = require("../controllers/auth");

router.get("/finance/finance_info/:userId/:studentId",requireSignin,finance_info.read);
router.post("/finance_info/create_finance_info/:userId/:studentId",requireSignin,finance_info.Create);
router.put("/finance/update_finance_info/:userId/:financeId",requireSignin,finance_info.update);
router.delete("/finance/delete_finance_info/:userId/:financeId",requireSignin,finance_info.remove);

//router.get("/finance/list_of_finance/:user_id",requireSignin,finance_info.read);
module.exports = router;