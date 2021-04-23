const { check } = require('express-validator');

module.exports.createFlight = [
  check('aircraftId').isNumeric().withMessage('`aircraftId` value must be a number'),
  check('aircraftId').customSanitizer(value => {
    return parseInt(value);
  }),

  check('flightNumber').isNumeric().withMessage('`flightNumber` value must be a number'),
  check('flightNumber').customSanitizer(value => {
    return parseInt(value);
  }),

  check('destination').isAlpha().withMessage('`destination` value must be an alpha string'),
  check('terminal').isAlphanumeric().withMessage('`terminal` value must be an alpha numeric'),
  check('gate').isAlphanumeric().withMessage('`gate` value must be an alpha numeric'),
];

module.exports.bookFlight = [
  check('flightId').isNumeric().withMessage('`flightId` value must be a number'),
  check('flightId').customSanitizer(value => {
    return parseInt(value);
  }),

  check('seatType').isNumeric().withMessage('`seatType` value must be a number'),
  check('seatType').customSanitizer(value => {
    return parseInt(value);
  }),
  check('firstname').isAlpha().withMessage('`firstname` value must be an alpha string'),
  check('lastname').isAlpha().withMessage('`lastname` value must be an alpha string'),
  check('age').isNumeric().withMessage('`age` value must be a number'),
  check('age').customSanitizer(value => {
    return parseInt(value);
  }),
  check('gender').isAlpha().withMessage('`gender` value must be an alpha string'),
];

module.exports.getSeatInformationOfFlight = [
  check('flightId').isNumeric().withMessage('`flightId` value must be a number'),
  check('flightId').customSanitizer(value => {
    return parseInt(value);
  })
];

module.exports.getAirCraftInformation = [
  check('aircraftId').isNumeric().withMessage('`aircraftId` value must be a number'),
  check('aircraftId').customSanitizer(value => {
    return parseInt(value);
  })
];