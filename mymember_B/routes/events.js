const express = require("express");
const router = express.Router();
const events  = require("../controllers/events")
const { requireSignin, isAuth } = require("../controllers/auth");


router.post("/add_events/:user_id",requireSignin,events.Create);
router.get("/list_of_events/:user_id",requireSignin,events.read);
router.get("/event_info/:user_id/:eventId",requireSignin,events.Info)
router.put("/update_events/:user_id/:eventId",requireSignin,events.update);
router.delete("/delete_events/:user_id/:eventId",requireSignin,events.remove);

module.exports = router;
