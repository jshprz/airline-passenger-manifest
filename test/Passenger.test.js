const assert = require('chai').assert
const mockPassenger = require('./mocks/Passenger')

describe('test Passenger.js', () => {
  it('should insert passenger data', async () => {
    const passengerData = {
      flightId: 1,
      seatType: 1,
      firstname: 'u',
      lastname: 'u',
      age: 1,
      gender: 'ss'
    }
    try {
      const insertPassengerDataResult = await mockPassenger.insertPassengerData(passengerData)
      assert.isNumber(insertPassengerDataResult.flightId)
      assert.isNumber(insertPassengerDataResult.seatType)
      assert.isString(insertPassengerDataResult.firstname)
      assert.isString(insertPassengerDataResult.lastname)
      assert.isNumber(insertPassengerDataResult.age)
      assert.isString(insertPassengerDataResult.gender)

      assert.operator(insertPassengerDataResult.firstname.length, '<=', 20)
      assert.operator(insertPassengerDataResult.lastname.length, '<=', 20)
      assert.operator(insertPassengerDataResult.gender.length, '<=', 10)
    } catch (err) {
      throw new Error(err)
    }
  })

  it('should return passenger list', async () => {
    try {
      const getAllPassengersResult = await mockPassenger.getAllPassengers()
      assert.isArray(getAllPassengersResult)
      if (getAllPassengersResult > 0) {
        getAllPassengersResult.map(passenger => {
          assert.isNumber(passenger.id)
          assert.isNumber(passenger.flight_id)
          assert.isNumber(passenger.seat_type)
          assert.isString(passenger.first_name)
          assert.isString(passenger.last_name)
          assert.isNumber(passenger.age)
          assert.isString(passenger.gender)
        })
      }
    } catch (err) {
      throw new Error(err)
    }
  })
})
