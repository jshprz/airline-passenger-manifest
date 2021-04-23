const db = require('../config/database')

/* insertPassengerData() to insert a single passenger data.
  * passengerData { Object }
*/
module.exports.insertPassengerData = (passengerData) => {
  return new Promise((resolve, reject) => {
    if (!passengerData.flightId || !Number.isInteger(passengerData.flightId)) reject('[insertPassengerData]: `flightId` parameter must be a type of number')
    if (!passengerData.seatType || !Number.isInteger(passengerData.seatType)) reject('[insertPassengerData]: `seatType` parameter must be a type of number')
    if (!passengerData.firstname || typeof passengerData.firstname !== 'string') reject('[insertPassengerData]: `firstname` parameter must be a type of string')
    if (!passengerData.lastname || typeof passengerData.lastname !== 'string') reject('[insertPassengerData]: `lastname` parameter must be a type of string')
    if (!passengerData.age || !Number.isInteger(passengerData.age)) reject('[insertPassengerData]: `age` parameter must be a type of number')
    if (!passengerData.gender || typeof passengerData.gender !== 'string') reject('[insertPassengerData]: `gender` parameter must be a type of string')

    const postData = {
      flight_id: passengerData.flightId,
      seat_type: passengerData.seatType,
      first_name: passengerData.firstname,
      last_name: passengerData.lastname,
      age: passengerData.age,
      gender: passengerData.gender
    }

    db.query('INSERT INTO `passengers_booking_tbl` SET ?', postData, (err) => {
      if (err) reject(err)
      resolve('Successfully created a Passenger Data.')
    })
  })
}

// getAllPassengers() getting all the passengers data in the table.
module.exports.getAllPassengers = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM `passengers_booking_tbl`', (err, results) => {
      if (err) reject(err)

      resolve(results)
    })
  })
}
