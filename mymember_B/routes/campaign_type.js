const express = require("express");
const router = express.Router();
const campaign = require("../controllers/campaign_type")
const { requireSignin, isAuth } = require("../controllers/auth");
var bodyParser=require('body-parser')
const parser = bodyParser.urlencoded({
    extended: false
});

router.post("/add_campaign_type/:user_id",parser,requireSignin,campaign.Create);
router.get("/list_of_campaign_type/:user_id",parser,requireSignin,campaign.read);
router.put("/update_campaign_type/:user_id/:campId",parser,requireSignin,campaign.update);
router.get("/camp_info/:user_id/:campId",parser,requireSignin,campaign.campInfo)
router.delete("/delete_campaign_type/:user_id/:campId",parser,requireSignin,campaign.remove);

module.exports = router;
