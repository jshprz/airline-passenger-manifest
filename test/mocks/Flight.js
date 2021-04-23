function fakeQuery1 (aircraftId, flightNumber, destination, terminal, gate, cb) {
  const tempStorage = {}
  tempStorage.aircraftId = aircraftId
  tempStorage.flightNumber = flightNumber
  tempStorage.destination = destination
  tempStorage.terminal = terminal
  tempStorage.gate = gate
  cb(null, tempStorage)
}
function fakeQuery2 (flightId, cb) {
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
  const result = flightDatas.filter((flight) => {
    return flight.id === flightId
  })
  cb(null, result)
}
module.exports.insertFlightData = (flightData) => {
  return new Promise((resolve, reject) => {
    if (!flightData.aircraftId || !Number.isInteger(flightData.aircraftId)) reject('`aircraftId` must have a value & must be a type of number')
    if (!flightData.flightNumber || !Number.isInteger(flightData.flightNumber)) reject('`flightNumber` must have a value & must be a type of number')
    if (!flightData.destination || typeof flightData.destination !== 'string') reject('`destination` must have a value & must be a type of string')
    if (!flightData.terminal || typeof flightData.terminal !== 'string') reject('`terminal` must have a value & must be a type of string')
    if (!flightData.gate || typeof flightData.gate !== 'string') reject('`gate` must have a value & must be a type of string')

    fakeQuery1(
      flightData.aircraftId,
      flightData.flightNumber,
      flightData.destination,
      flightData.terminal,
      flightData.gate,
      (err, result) => {
        if (err) reject(err)

        resolve(result)
      })
  })
}

module.exports.getFlightSeatConfiguration = (flightId) => {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(flightId)) reject('`flightId` must be a type of number')

    fakeQuery2(flightId, (err, result) => {
      if (err) reject(err)

      resolve(result)
    })
  })
}
