const assert = require('chai').assert;
const mockAircraft = require('./mocks/Aircraft');

describe('test getAircraftInfo()', () => {
  it('should return matching aircraft record data or empty array', async () => {
    try {
      const aircraftId = 1;
      const getAircraftByIdResult = await mockAircraft.getAircraftInfo(aircraftId);
      assert.isArray(getAircraftByIdResult);
      if (getAircraftByIdResult.length > 0) {
        getAircraftByIdResult.map((aircraft) => {
          assert.isNumber(aircraft.id);
          assert.isNumber(aircraft.aircraft_details_id);
          assert.isNumber(aircraft.airline_company_id);
          assert.isNumber(aircraft.first_class_seat_quantity);
          assert.isNumber(aircraft.business_seat_quantity);
          assert.isNumber(aircraft.premium_seat_quantity);
          assert.isNumber(aircraft.economy_seat_quantity);

          assert.include([1, 2, 3], aircraft.aircraft_details_id);
          assert.include([1, 2, 3], aircraft.airline_company_id);
        });
      }
    } catch (err) {
      throw new Error(err);
    }
  });
});