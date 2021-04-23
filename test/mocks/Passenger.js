function fakeQuery1(flightId, seatType, firstname, lastname, age, gender, cb) {
  const tempStorage = {};
  tempStorage.flightId = flightId;
  tempStorage.seatType = seatType;
  tempStorage.firstname = firstname;
  tempStorage.lastname = lastname;
  tempStorage.age = age;
  tempStorage.gender = gender;
  cb(null, tempStorage);
}
function fakeQuery2(cb) {
  const passengerDatas = [
    {
      id: 1,
      flight_id: 1,
      seat_type: 1,
      first_name: 'Joshua',
      last_name: 'Perez',
      age: 15,
      gender: 'male'
    },
    {
      id: 2,
      flight_id: 2,
      seat_type: 2,
      first_name: 'Adolf',
      last_name: 'Hitler',
      age: 55,
      gender: 'male'
    }
  ];
  cb(null, passengerDatas);
}
module.exports.insertPassengerData = (passengerData) => {
  return new Promise((resolve, reject) => {
    if (!passengerData.flightId || !Number.isInteger(passengerData.flightId)) reject('`flightId` must be a type of number');
    if (!passengerData.seatType || !Number.isInteger(passengerData.seatType)) reject('`seatType` must be a type of number');
    if (!passengerData.firstname || typeof passengerData.firstname !== 'string') reject('`firstname` must be a type of string');
    if (!passengerData.lastname || typeof passengerData.lastname !== 'string') reject('`lastname` must be a type of string');
    if (!passengerData.age || !Number.isInteger(passengerData.age)) reject('`age` must be a type of number');
    if (!passengerData.gender || typeof passengerData.gender !== 'string') reject('`gender` must be a type of string');
  
    fakeQuery1(
      passengerData.flightId,
      passengerData.seatType,
      passengerData.firstname,
      passengerData.lastname,
      passengerData.age,
      passengerData.gender,
      (err, result) => {
        if (err) reject(err);

        resolve(result);
      }
    )
  });
}

module.exports.getAllPassengers = () => {
  return new Promise((resolve, reject) => {
    fakeQuery2((err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}