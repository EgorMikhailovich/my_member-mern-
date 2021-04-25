const express = require('express');
const router = express.Router();
const { isAdmin } = require("../../../controllers/auth")
const { addLocation,listLocation,updateLocation,removeLocation } = require("../../../controllers/admin/settings/location")

router.get("/list_location/:adminId",isAdmin,listLocation)
router.post("/create_location/:adminId",isAdmin,addLocation)
router.put("/update_location/:adminId/:locationId",isAdmin,updateLocation)
router.delete("/remove_location/:adminId/:locationId",isAdmin,removeLocation)

module.exports = router