const express = require('express');
const router = express.Router();
const { create,read,closeList,count_ticket,remove_ticket,updateTicket } = require('../controllers/support') 
const { requireSignin,isAuth,verifySchool } = require("../controllers/auth");
const upload = require('../handler/multer');

router.get('/supprot/viewticket/:userId',verifySchool,read)
router.get('/support/close_view_ticket/:userId',verifySchool,closeList)
router.get('/support/ticket_count/:userId',verifySchool,count_ticket)
router.post('/support/create_ticket/:userId',verifySchool,upload.single('ticket_image'),create)
router.put('/support/update_ticket/:userId/:ticketId',verifySchool,upload.single('ticket_image'),updateTicket)
router.delete('/support/remove_ticket/:userId/:ticketId',verifySchool,remove_ticket)

module.exports = router;
