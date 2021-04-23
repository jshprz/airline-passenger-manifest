const express = require('express')
const router = express.Router()
const middleware = require('./middleware')
const AirlineController = require('../controller/AirlineController')

router.post('/createFlight', middleware.createFlight, AirlineController.createFlight)
router.post('/bookFlight', middleware.bookFlight, AirlineController.bookFlight)

router.get('/getSeatInformationOfFlight', middleware.getSeatInformationOfFlight, AirlineController.getSeatInformationOfFlight)
router.get('/getPassengerList', AirlineController.getPassengerList)
router.get('/getAirCraftInformation', middleware.getAirCraftInformation, AirlineController.getAirCraftInformation)

module.exports = router
