const db = require('../config/database');

/* getAircraftInfo() to get the aircraft information by aircraft id.
  * aircraftId { Number }
*/
module.exports.getAircraftInfo = (aircraftId) => {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(aircraftId)) reject('`aircraftId` must be a type of number');

    const sql = 'SELECT *, aircraft_details_tbl.brand_name, aircraft_details_tbl.model, aircraft_details_tbl.engine_name,'+
      'airline_companies_tbl.company_name, airline_companies_tbl.headquarters '+
      'FROM aircrafts_tbl '+
      'LEFT JOIN aircraft_details_tbl '+
      'ON aircrafts_tbl.aircraft_details_id = aircraft_details_tbl.id '+
      'LEFT JOIN airline_companies_tbl '+
      'ON aircrafts_tbl.airline_company_id = airline_companies_tbl.id '+
      'WHERE aircrafts_tbl.id = '+ aircraftId +'';
    
    db.query(sql, (err, results) => {
      if (err) reject(err);

      resolve(results);
    });
  });
}