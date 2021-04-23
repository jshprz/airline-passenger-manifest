const db = require('../config/database');

/* insertFlightData() to insert a single flight data.
  * flightData { Object }
*/
module.exports.insertFlightData = (flightData) => {
  return new Promise((resolve, reject) => {
    if (!flightData.aircraftId || !Number.isInteger(flightData.aircraftId)) reject('[insertFlightData]: `aircraftId` parameter must have a value & must be a type of number');
    if (!flightData.flightNumber || !Number.isInteger(flightData.flightNumber)) reject('[insertFlightData]: `flightNumber` parameter must have a value & must be a type of number');
    if (!flightData.destination || typeof flightData.destination !== 'string') reject('[insertFlightData]: `destination` parameter must have a value & must be a type of string');
    if (!flightData.terminal || typeof flightData.terminal !== 'string') reject('[insertFlightData]: `terminal` parameter must have a value & must be a type of string');
    if (!flightData.gate || typeof flightData.gate !== 'string') reject('[insertFlightData]: `gate` parameter must have a value & must be a type of string');
    
    const postData = {
      aircraft_id: flightData.aircraftId,
      flight_number: flightData.flightNumber,
      destination: flightData.destination,
      terminal: flightData.terminal,
      gate: flightData.gate
    }
    db.query('INSERT INTO `flights_tbl` SET ?', postData, (err) => {
      if (err) reject(err);
      resolve('Successfully created a flight.');
    });
  });
}

/* getFlightSeatConfiguration() to get the seat configuration by flight id.
  * flightId { Number }
*/
module.exports.getFlightSeatConfiguration = (flightId) => {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(flightId)) reject('`flightId` must be a type of number');
    
    const sql = ''+
      'SELECT SUM(CASE WHEN passengers_booking_tbl.seat_type = 1 THEN 1 ELSE 0 END) as first_class_seats_occupied,'+
      'SUM(CASE WHEN passengers_booking_tbl.seat_type = 2 THEN 1 ELSE 0 END) as business_seats_occupied,'+
      'SUM(CASE WHEN passengers_booking_tbl.seat_type = 3 THEN 1 ELSE 0 END) as premium_seats_occupied,'+
      'SUM(CASE WHEN passengers_booking_tbl.seat_type = 4 THEN 1 ELSE 0 END) as economy_seats_occupied,'+
      'flights_tbl.id, aircrafts_tbl.first_class_seat_quantity, aircrafts_tbl.business_seat_quantity, aircrafts_tbl.premium_seat_quantity, aircrafts_tbl.economy_seat_quantity '+
      'FROM passengers_booking_tbl '+ 
      'LEFT JOIN flights_tbl '+ 
      'ON passengers_booking_tbl.flight_id = flights_tbl.id '+
      'LEFT JOIN aircrafts_tbl '+
      'ON flights_tbl.aircraft_id = aircrafts_tbl.id '+
      'WHERE flights_tbl.id = '+ flightId +'';
    
    db.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }
    )
  });
}