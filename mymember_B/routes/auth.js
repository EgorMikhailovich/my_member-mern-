const express = require("express");
const router = express.Router();
const {
    signup,
    signin,
    signout,
    forgetpasaword,
    resetPassword,
    requireSignin,
    activation,
    get_navbar,
    edit_navbar_li,
    edit_navbar_ui
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
// router.post("/email_activation",activation)
router.post("/signin", signin);
router.post("/signout", signout);
router.put("/forgetPassword", forgetpasaword);
router.put("/resetPassword", resetPassword);

router.get("/get_navbar", get_navbar);
router.post("/edit_navbar_li", edit_navbar_li);
router.post("/edit_navbar_ui", edit_navbar_ui)

module.exports = router;
