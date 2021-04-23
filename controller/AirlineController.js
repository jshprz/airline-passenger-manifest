const flight = require('../lib/Flight')
const passenger = require('../lib/Passenger')
const aircraft = require('../lib/Aircraft')
const genericFunctions = require('../lib/GenericFunctions')
const { validationResult } = require('express-validator')

module.exports.createFlight = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const checkMatchingAircraft = await genericFunctions.getATableRowById(req.body.aircraftId, 'aircrafts_tbl')
    // Check if the given aircraftId has match.
    if (checkMatchingAircraft.length > 0) {
      const insertFlightDataResult = await flight.insertFlightData(req.body)
      return res.status(200).json({ successMessage: insertFlightDataResult })
    }
    return res.status(500).json({ errorMessage: `There was no aircraft found based on the provided aircraftId: ${req.body.aircraftId}` })
  } catch (err) {
    return res.status(500).json({ errorMessage: err })
  }
}

module.exports.bookFlight = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const checkMatchingFlight = await genericFunctions.getATableRowById(req.body.flightId, 'flights_tbl')
    if (checkMatchingFlight.length > 0) {
      const insertPassengerDataResult = await passenger.insertPassengerData(req.body)
      return res.status(200).json({ successMessage: insertPassengerDataResult })
    }
    return res.status(500).json({ errorMessage: `There were no matching flight found: ${req.body.flightId}` })
  } catch (err) {
    return res.status(500).json({ errorMessage: err })
  }
}

module.exports.getSeatInformationOfFlight = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const getFlightSeatConfigurationResult = await flight.getFlightSeatConfiguration(req.query.flightId)
    const computedSeatConfiguration = await genericFunctions.computeSeatConfiguration(getFlightSeatConfigurationResult[0])
    res.status(200).json({ result: computedSeatConfiguration })
  } catch (err) {
    res.status(500).json({ errors: err })
  }
}

module.exports.getPassengerList = async (req, res) => {
  try {
    const getAllPassengersResult = await passenger.getAllPassengers()
    res.status(200).json({ result: getAllPassengersResult })
  } catch (err) {
    res.status(500).json({ errorMessage: err })
  }
}

module.exports.getAirCraftInformation = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const getAircraftInfoResult = await aircraft.getAircraftInfo(req.query.aircraftId)
    res.status(200).json({ result: getAircraftInfoResult })
  } catch (err) {
    res.status(500).json({ errorMessage: err })
  }
}
