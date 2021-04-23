function fakeQuery (id, table, cb) {
  const tables = [
    'flights_tbl',
    'aircrafts_tbl'
  ]
  const aircraftDatas = [
    // First Airline Company (Qantas)
    {
      id: 1,
      aircraft_details_id: 1,
      airline_company_id: 1,
      first_class_seat_quantity: 0,
      business_seat_quantity: 13,
      premium_seat_quantity: 0,
      economy_seat_quantity: 162
    },
    {
      id: 2,
      aircraft_details_id: 2,
      airline_company_id: 1,
      first_class_seat_quantity: 14,
      business_seat_quantity: 64,
      premium_seat_quantity: 35,
      economy_seat_quantity: 371
    },
    {
      id: 3,
      aircraft_details_id: 3,
      airline_company_id: 1,
      first_class_seat_quantity: 0,
      business_seat_quantity: 0,
      premium_seat_quantity: 0,
      economy_seat_quantity: 38
    },

    // Second Airline Company (Singapore Airlines)

    {
      id: 4,
      aircraft_details_id: 1,
      airline_company_id: 2,
      first_class_seat_quantity: 0,
      business_seat_quantity: 8,
      premium_seat_quantity: 14,
      economy_seat_quantity: 160
    },
    {
      id: 5,
      aircraft_details_id: 2,
      airline_company_id: 2,
      first_class_seat_quantity: 12,
      business_seat_quantity: 80,
      premium_seat_quantity: 40,
      economy_seat_quantity: 360
    },
    {
      id: 6,
      aircraft_details_id: 3,
      airline_company_id: 2,
      first_class_seat_quantity: 0,
      business_seat_quantity: 0,
      premium_seat_quantity: 4,
      economy_seat_quantity: 30
    },

    // Third Airline Company (Emirates)

    {
      id: 7,
      aircraft_details_id: 1,
      airline_company_id: 3,
      first_class_seat_quantity: 4,
      business_seat_quantity: 8,
      premium_seat_quantity: 6,
      economy_seat_quantity: 150
    },
    {
      id: 8,
      aircraft_details_id: 2,
      airline_company_id: 3,
      first_class_seat_quantity: 16,
      business_seat_quantity: 64,
      premium_seat_quantity: 50,
      economy_seat_quantity: 300
    },
    {
      id: 9,
      aircraft_details_id: 3,
      airline_company_id: 3,
      first_class_seat_quantity: 0,
      business_seat_quantity: 0,
      premium_seat_quantity: 0,
      economy_seat_quantity: 40
    }
  ]
  const flightDatas = [
    {
      id: 1,
      aircraft_id: 1,
      flight_number: 737,
      destination: 'Montevideo, Uruguay',
      terminal: '1A',
      gate: '3B'
    },
    {
      id: 2,
      aircraft_id: 2,
      flight_number: 886,
      destination: 'Rio de janeiro, Brazil',
      terminal: '2A',
      gate: '4B'
    }
  ]
  if (tables.includes(table)) { // Lookup a matching table.
    if (table === 'aircrafts_tbl') {
      const result = aircraftDatas.filter((aircraft) => {
        return aircraft.id === id
      })
      cb(null, result)
    }
    if (table === 'flights_tbl') {
      const result = flightDatas.filter((flight) => {
        return flight.id === id
      })
      cb(null, result)
    }
  } else {
    cb('input `table` doesn not exists.')
  }
}
module.exports.getATableRowById = (id, table) => {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(id)) reject('`id` must be a type of number')
    if (typeof table !== 'string') reject('`table` must be a type of string')

    fakeQuery(id, table, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

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
