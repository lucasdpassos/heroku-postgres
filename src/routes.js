const express = require('express')
const router = express.Router()
const TicketController = require('./controllers/TicketControler')

  

router.get('/ping', TicketController.ping)
router.get('/tickets', TicketController.all)
router.get('/ticket/:id', TicketController.one)
router.post('/ticket', TicketController.new)
router.put('/ticket/:id', TicketController.edit)
router.delete('/ticket/:id', TicketController.delete)


module.exports = router