const express = require("express");
const router = express.Router();
const stripe = require("../controllers/stripe")
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const upload = require('../handler/multer')

router.get("/list_of_stripe/:userId",verifySchool,stripe.read);
router.post("/add_stripe/:userId",verifySchool,upload.single('stripe_image'),stripe.create);
router.put("/update_stripe/:userId/:stripeId",verifySchool,upload.single('stripe_image'),stripe.update);
router.get("/stripe_info/:userId/:stripeId",verifySchool,stripe.stripe_detail);
router.delete("/delete_stripe/:userId/:stripeId",verifySchool,stripe.remove);

module.exports = router;
  