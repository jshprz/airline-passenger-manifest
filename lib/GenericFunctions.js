const db = require('../config/database')

/* getATableRowById() a generic function to get the table row by id.
  * id - id of the table { Number }
  * table - table name { String }
*/
module.exports.getATableRowById = (id, table) => {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(id)) reject('[getATableRowById]: `id` parameter must be a type of number')
    if (typeof table !== 'string') reject('[getATableRowById]: `table` parameter must be a type of string')

    db.query('SELECT * FROM `' + table + '` WHERE `id` = ?', [id], (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
}

/* computeSeatConfiguration() a function to compute default seats, available seats, and occupied seats.
  * seatConfigurationData { Object }
*/
module.exports.computeSeatConfiguration = (seatConfigurationData) => {
  return new Promise((resolve, reject) => {
    if (!seatConfigurationData) reject('`seatConfigurationData` undefined value')
    if (!Number.isInteger(seatConfigurationData.first_class_seats_occupied)) reject('`first_class_seats_occupied` must be a type of number')
    if (!Number.isInteger(seatConfigurationData.business_seats_occupied)) reject('`business_seats_occupied` must be a type of number')
    if (!Number.isInteger(seatConfigurationData.premium_seats_occupied)) reject('`premium_seats_occupied` must be a type of number')
    if (!Number.isInteger(seatConfigurationData.economy_seats_occupied)) reject('`economy_seats_occupied` must be a type of number')

    if (!Number.isInteger(seatConfigurationData.first_class_seat_quantity)) reject('`first_class_seat_quantity` must be a type of number')
    if (!Number.isInteger(seatConfigurationData.business_seat_quantity)) reject('`business_seat_quantity` must be a type of number')
    if (!Number.isInteger(seatConfigurationData.premium_seat_quantity)) reject('`premium_seat_quantity` must be a type of number')
    if (!Number.isInteger(seatConfigurationData.economy_seat_quantity)) reject('`economy_seat_quantity` must be a type of number')

    const computedSeatConfiguration = {
      seats: {
        firstClass: seatConfigurationData.first_class_seat_quantity,
        business: seatConfigurationData.business_seat_quantity,
        premium: seatConfigurationData.premium_seat_quantity,
        economy: seatConfigurationData.economy_seat_quantity
      },
      available: {
        firstClass: seatConfigurationData.first_class_seat_quantity - seatConfigurationData.first_class_seats_occupied,
        business: seatConfigurationData.business_seat_quantity - seatConfigurationData.business_seats_occupied,
        premium: seatConfigurationData.premium_seat_quantity - seatConfigurationData.premium_seats_occupied,
        economy: seatConfigurationData.economy_seat_quantity - seatConfigurationData.economy_seats_occupied
      },
      occupied: {
        firstClass: seatConfigurationData.first_class_seats_occupied,
        business: seatConfigurationData.business_seats_occupied,
        premium: seatConfigurationData.premium_seats_occupied,
        economy: seatConfigurationData.economy_seats_occupied
      }
    }

    resolve(computedSeatConfiguration)
  })
}
