function fakeQuery(aircraftId, cb) {
  const aircraftDatas = [
    // First Airline Company (Qantas)
    {
    id: 1,
    aircraft_details_id: 1,
    airline_company_id:  1,
    first_class_seat_quantity:  0,
    business_seat_quantity:  13,
    premium_seat_quantity:  0,
    economy_seat_quantity:  162
    },
    {
      id:2,
      aircraft_details_id:2,
      airline_company_id:1,
      first_class_seat_quantity:14,
      business_seat_quantity:64,
      premium_seat_quantity:35,
      economy_seat_quantity:371
    },
    {
      id:3,
      aircraft_details_id:3,
      airline_company_id:1,
      first_class_seat_quantity:0,
      business_seat_quantity:0,
      premium_seat_quantity:0,
      economy_seat_quantity:38
    },
  
    // Second Airline Company (Singapore Airlines)
  
    {
      id:4,
      aircraft_details_id:1,
      airline_company_id:2,
      first_class_seat_quantity:0,
      business_seat_quantity:8,
      premium_seat_quantity:14,
      economy_seat_quantity:160
    },
    {
      id:5,
      aircraft_details_id:2,
      airline_company_id:2,
      first_class_seat_quantity:12,
      business_seat_quantity:80,
      premium_seat_quantity:40,
      economy_seat_quantity:360
    },
    {
      id:6,
      aircraft_details_id:3,
      airline_company_id:2,
      first_class_seat_quantity:0,
      business_seat_quantity:0,
      premium_seat_quantity:4,
      economy_seat_quantity:30
    },
  
    // Third Airline Company (Emirates)
  
    {
      id:7,
      aircraft_details_id:1,
      airline_company_id:3,
      first_class_seat_quantity:4,
      business_seat_quantity:8,
      premium_seat_quantity:6,
      economy_seat_quantity:150
    },
    {
      id:8,
      aircraft_details_id:2,
      airline_company_id:3,
      first_class_seat_quantity:16,
      business_seat_quantity:64,
      premium_seat_quantity:50,
      economy_seat_quantity:300
    },
    {
      id:9,
      aircraft_details_id:3,
      airline_company_id:3,
      first_class_seat_quantity:0,
      business_seat_quantity:0,
      premium_seat_quantity:0,
      economy_seat_quantity:40
    }
  ];
  const result = aircraftDatas.filter((aircraft) => {
    return aircraft.id === aircraftId;
  });

  cb(null, result);
}

module.exports.getAircraftInfo = (aircraftId) => {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(aircraftId)) reject('`aircraftId` must be a type of number');

    fakeQuery(aircraftId, (err, result) => {
      if (err) reject(err);
      resolve(result)
    });
  });
}