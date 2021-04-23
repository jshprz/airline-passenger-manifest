const db = require('../config/database')

// Each array element will serves as row data in the mysql table.
const datas = [
  [
    1, // id
    'Boeing', // brand_name
    '737-800', // model
    'Engine X' // engine_name
  ],
  [
    2, // id
    'Airbus', // brand_name
    'A380', // model
    'Engine Y' // engine_name
  ],
  [
    3, // id
    'Dash', // brand_name
    '8', // model
    'Engine Z' // engine_name
  ]
];

(function createAircraftDetails () {
  const sql = 'INSERT INTO `aircraft_details_tbl` (id, brand_name, model, engine_name) VALUES ?'
  db.query(sql, [datas], (err) => {
    if (err) throw err
    console.log('Aircraft Details Seed Data Successfully Created!')
    db.end()
  })
})()
