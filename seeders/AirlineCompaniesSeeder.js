const db = require('../config/database');

// Each array element will serves as row data in the mysql table.
const datas = [
  [
    1, // id
    'Qantas', // company_name
    'Australia' // headquarters
  ],
  [
    2, // id
    'Singapore Airlines', // company_name
    'Singapore' // headquarters
  ],
  [
    3, // id
    'Emirates', // company_name
    'UAE' // headquarters
  ]
];

(function createAirlineCompanies() {
  const sql = 'INSERT INTO `airline_companies_tbl` (id, company_name, headquarters) VALUES ?';
  db.query(sql, [datas], (err) => {
    if (err) throw err;
    console.log('Airline Companies Seed Data Successfully Created!');  
  });
  db.end();
})();