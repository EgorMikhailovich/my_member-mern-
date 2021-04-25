const express = require("express");
const router = express.Router();
const manage_stripe = require("../controllers/manage_strip")
const { requireSignin, isAuth } = require("../controllers/auth");
const upload = require('../handler/multer')

router.get("/stripe_manage_info/:userId/:manage_stripeId",requireSignin,manage_stripe.manage_stripe_detail);
router.post("/add_manage_stripe/:userId",requireSignin,upload.single('manage_stripe_image'),manage_stripe.create);
//router.get("/list_of_manage_stripe/:user_id",requireSignin,manage_stripe.read);
router.put("/update_manage_stripe/:userId/:manage_stripeId",requireSignin,upload.single('manage_stripe_image'),manage_stripe.update);
router.delete("/delete_manage_stripe/:userId/:manage_stripeId",requireSignin,manage_stripe.remove);

module.exports = router;
  