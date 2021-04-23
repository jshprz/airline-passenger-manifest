const assert = require('chai').assert;
const mockGenericFunctions = require('./mocks/GenericFunctions');

describe('test GenericFunctions.js', () => {
  it('should return matching record data or empty array', async () => {
    try {
      const id = 5;
      const table = 'flights_tbl';
      const getATableRowByIdResult = await mockGenericFunctions.getATableRowById(id, table);
      assert.isArray(getATableRowByIdResult);
      if (getATableRowByIdResult.length > 0) {
        getATableRowByIdResult.map((row) => {
          if (table === 'aircrafts_tbl') {
            assert.isNumber(row.id);
            assert.isNumber(row.aircraft_details_id);
            assert.isNumber(row.airline_company_id);
            assert.isNumber(row.first_class_seat_quantity);
            assert.isNumber(row.business_seat_quantity);
            assert.isNumber(row.premium_seat_quantity);
            assert.isNumber(row.economy_seat_quantity);

            assert.include([1, 2, 3], row.aircraft_details_id);
            assert.include([1, 2, 3], row.airline_company_id);
          }
          if (table === 'flights_tbl') {
            assert.isNumber(row.id);
            assert.isNumber(row.aircraft_id);
            assert.isNumber(row.flight_number);
            assert.isString(row.destination);
            assert.isString(row.terminal);
            assert.isString(row.gate);
          }
        });
      }
    } catch (err) {
      throw new Error(err);
    }
  });

  it('should return computed seat configuration information', async () => {
    try {
      const seatConfigurationData = [
        {
            "first_class_seats_occupied": 1,
            "business_seats_occupied": 1,
            "premium_seats_occupied": 0,
            "economy_seats_occupied": 0,
            "id": 3,
            "first_class_seat_quantity": 14,
            "business_seat_quantity": 64,
            "premium_seat_quantity": 35,
            "economy_seat_quantity": 371
        }
      ];
      
      const computedSeatConfiguration = await mockGenericFunctions.computeSeatConfiguration(seatConfigurationData[0]);
      
      assert.isObject(computedSeatConfiguration);
      assert.isObject(computedSeatConfiguration.seats);
      assert.isObject(computedSeatConfiguration.available);
      assert.isObject(computedSeatConfiguration.occupied);

      assert.strictEqual(computedSeatConfiguration.seats.firstClass, Math.abs(computedSeatConfiguration.seats.firstClass));
      assert.strictEqual(computedSeatConfiguration.seats.business, Math.abs(computedSeatConfiguration.seats.business));
      assert.strictEqual(computedSeatConfiguration.seats.premium, Math.abs(computedSeatConfiguration.seats.premium));
      assert.strictEqual(computedSeatConfiguration.seats.economy, Math.abs(computedSeatConfiguration.seats.economy));

      assert.strictEqual(computedSeatConfiguration.available.firstClass, Math.abs(computedSeatConfiguration.available.firstClass));
      assert.strictEqual(computedSeatConfiguration.available.business, Math.abs(computedSeatConfiguration.available.business));
      assert.strictEqual(computedSeatConfiguration.available.premium, Math.abs(computedSeatConfiguration.available.premium));
      assert.strictEqual(computedSeatConfiguration.available.economy, Math.abs(computedSeatConfiguration.available.economy));

      assert.strictEqual(computedSeatConfiguration.occupied.firstClass, Math.abs(computedSeatConfiguration.occupied.firstClass));
      assert.strictEqual(computedSeatConfiguration.occupied.business, Math.abs(computedSeatConfiguration.occupied.business));
      assert.strictEqual(computedSeatConfiguration.occupied.premium, Math.abs(computedSeatConfiguration.occupied.premium));
      assert.strictEqual(computedSeatConfiguration.occupied.economy, Math.abs(computedSeatConfiguration.occupied.economy));
    
    } catch (err) {
      throw new Error(err);
    }
  });
});