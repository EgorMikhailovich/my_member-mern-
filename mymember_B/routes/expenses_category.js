const express = require('express');
const router = express.Router();
const{ create,read,update_category,info_category,remove_category,category_total } =require("../controllers/expenses_category")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const upload = require('../handler/multer');

router.get("/expenses/list_category/:userId",verifySchool,read);
router.post("/expenses/add_category/:userId",verifySchool,create);
router.get("/expenses/info_category/:userId/:categoryId",requireSignin,info_category);
router.put("/expenses/update_category/:userId/:categoryId",requireSignin,update_category);
//new
router.delete("/expenses/remove_category/:userId/:categoryId",requireSignin,remove_category);

//all expense list with total
router.get("/expenses/all_category_total/:userId",verifySchool,category_total)
//

module.exports = router