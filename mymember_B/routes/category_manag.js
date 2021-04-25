const express = require("express");
const router = express.Router();
const category_managment = require("../controllers/category_managment")
//new
//new
const { requireSignin, isAuth } = require("../controllers/auth");
var bodyParser=require('body-parser')
const parser = bodyParser.urlencoded({
    extended: false
});
//
//
router.post("/add_category_managment/:user_id",parser,requireSignin,category_managment.Create);
router.get("/list_of_category_managment/:user_id",parser,requireSignin,category_managment.read);
router.get("/categoies_by_program/:user_id",parser,requireSignin,category_managment.by_program_name);
// router.post("/update_category_managment/:user_id",parser,requireSignin,category_managment.update);
router.get("/delete_category_managment/:user_id",parser,requireSignin,category_managment.remove);

module.exports = router;
