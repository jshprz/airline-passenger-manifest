const assert = require('chai').assert;
const mockFlight = require('./mocks/Flight');

describe('test Flight.js', () => {
  it('should return valid flight data', async () => {
    const flightData = {
      aircraftId: 1,
      flightNumber: 737,
      destination: 'Aspren, Colorado',
      terminal: '1A',
      gate: '3C'
    }
    try {
      const insertFlightDataResult = await mockFlight.insertFlightData(flightData);
      assert.isNumber(insertFlightDataResult.aircraftId);
      assert.isNumber(insertFlightDataResult.flightNumber);
      assert.isString(insertFlightDataResult.destination);
      assert.isString(insertFlightDataResult.terminal);
      assert.isString(insertFlightDataResult.gate);
      assert.operator(insertFlightDataResult.destination.length, '>', 0);
      assert.operator(insertFlightDataResult.terminal.length, '>', 0);
      assert.operator(insertFlightDataResult.gate.length, '>', 0);
      assert.operator(insertFlightDataResult.destination.length, '<=', 50);
      assert.operator(insertFlightDataResult.terminal.length, '<=', 20);
      assert.operator(insertFlightDataResult.gate.length, '<=', 20);
    } catch (err) {
      throw new Error(err);
    }
  });

  it('should return matching flight data or empty array', async () => {
    const flightId = 1;
    try {
      const getFlightSeatConfigurationResult = await mockFlight.getFlightSeatConfiguration(flightId);
      assert.isArray(getFlightSeatConfigurationResult);
      if (getFlightSeatConfigurationResult.length > 0) {
        getFlightSeatConfigurationResult.map(row => {
          assert.isNumber(row.id);
          assert.isNumber(row.aircraft_id);
          assert.isNumber(row.flight_number);
          assert.isString(row.destination);
          assert.isString(row.terminal);
          assert.isString(row.gate);
        });
      }
    } catch (err) {
      throw new Error(err);
    }
  });
});