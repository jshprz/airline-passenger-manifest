# airline-passenger-manifest

Airline passenger manifest, simple Node.JS microservice for Airline Passengers.

7 Steps To setup up Airline Passenger Manifest locally.

- 1.) Install Node.JS on your machine - https://nodejs.org/en/download/
- 2.) Clone this repository on your machine.
- 3.) Import the MYSQL DB file located in the root directory of this repository to the installed MYSQL on your machine.
- 4.) Create .env file in the root directory of this project then copy and paste the variables from env.example  that contains these following variables:
  - DB_HOST=<Host of your local DB client>
  - DB_PORT=<Port of your local DB client>
  - DB_USER=<Username of your local DB client>
  - DB_PASS=<Password of your local DB leave this empty of your DB client does not have password>
  - DB_NAME=<Database name of your local DB client>
- 5.) npm install
- 6.) npm run seed (To create the basic information of the Aircraft, Carrier, and configurations in the Database) PS: Running this command twice will cause an error because of duplication. Make sure your database is fresh and empty upon running this command.
- 7.) node app.js (To run the application - Note: The default hostname for this is "localhost" and the port is 3000)

## Running the test with mocha.
npm test

## Guide for testing this application.
  Endpoints:

    - http://localhost:3000/api/createFlight POST (For creating a flight.)
      Valid Payload Keys:
        - aircraftId <number>
        - flightNumber <number>
        - destination <string>
        - terminal <string>
        - gate <string>

    - http://localhost:3000/api/bookFlight POST (For checking in a passenger to a flight.)
        Valid Payload Keys:
        - flightId <number>
        - seatType <number> (Note: first class seat = 1, business seat = 2, premium seat = 3, economy seat = 4)
        - firstname <string>
        - lastname <string>
        - age <number>
        - gender <string>
    
    - http://localhost:3000/api/getSeatInformationOfFlight GET (For getting computed seat configuration.)
      Valid Payload Keys:
      - flightId <number>
    
    - http://localhost:3000/api/getPassengerList GET (For getting all passengers in the record.)
      Valid Payload Keys: No need for payload

    - http://localhost:3000/api/getAirCraftInformation GET (For getting aircraft information by its id.)
      Valid Payload Keys:
      - aircraftId <number>