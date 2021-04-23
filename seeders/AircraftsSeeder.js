const db = require('../config/database')

// Each array element will serves as row data in the mysql table.
const datas = [
  // First Airline Company (Qantas)
  [
    1, // id
    1, // aircraft_details_id
    1, // airline_company_id
    0, // first_class_seat_quantity
    13, // business_seat_quantity
    0, // premium_seat_quantity
    162 // economy_seat_quantity
  ],
  [
    2, // id
    2, // aircraft_details_id
    1, // airline_company_id
    14, // first_class_seat_quantity
    64, // business_seat_quantity
    35, // premium_seat_quantity
    371 // economy_seat_quantity
  ],
  [
    3, // id
    3, // aircraft_details_id
    1, // airline_company_id
    0, // first_class_seat_quantity
    0, // business_seat_quantity
    0, // premium_seat_quantity
    38 // economy_seat_quantity
  ],

  // Second Airline Company (Singapore Airlines)

  [
    4, // id
    1, // aircraft_details_id
    2, // airline_company_id
    0, // first_class_seat_quantity
    8, // business_seat_quantity
    14, // premium_seat_quantity
    160 // economy_seat_quantity
  ],
  [
    5, // id
    2, // aircraft_details_id
    2, // airline_company_id
    12, // first_class_seat_quantity
    80, // business_seat_quantity
    40, // premium_seat_quantity
    360 // economy_seat_quantity
  ],
  [
    6, // id
    3, // aircraft_details_id
    2, // airline_company_id
    0, // first_class_seat_quantity
    0, // business_seat_quantity
    4, // premium_seat_quantity
    30 // economy_seat_quantity
  ],

  // Third Airline Company (Emirates)

  [
    7, // id
    1, // aircraft_details_id
    3, // airline_company_id
    4, // first_class_seat_quantity
    8, // business_seat_quantity
    6, // premium_seat_quantity
    150 // economy_seat_quantity
  ],
  [
    8, // id
    2, // aircraft_details_id
    3, // airline_company_id
    16, // first_class_seat_quantity
    64, // business_seat_quantity
    50, // premium_seat_quantity
    300 // economy_seat_quantity
  ],
  [
    9, // id
    3, // aircraft_details_id
    3, // airline_company_id
    0, // first_class_seat_quantity
    0, // business_seat_quantity
    0, // premium_seat_quantity
    40 // economy_seat_quantity
  ]
];

(function createAircrafts () {
  const sql = 'INSERT INTO `aircrafts_tbl` (id, aircraft_details_id, airline_company_id, first_class_seat_quantity, business_seat_quantity, premium_seat_quantity, economy_seat_quantity) VALUES ?'
  db.query(sql, [datas], (err) => {
    if (err) throw err
    console.log('Aircrafts Seed Data Successfully Created!')
  })
  db.end()
})()
