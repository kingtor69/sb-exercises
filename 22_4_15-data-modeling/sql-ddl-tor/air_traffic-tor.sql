DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE passengers (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE airports (
    id VARCHAR(3) PRIMARY KEY,
    airport_city TEXT NOT NULL,
    airport_state_province TEXT NOT NULL,
    airport_country TEXT NOT NULL
);

CREATE TABLE airlines (
    id SERIAL PRIMARY KEY,
    airline_name TEXT NOT NULL,
    primary_hub VARCHAR(3) REFERENCES airports(id)
);

CREATE TABLE flights ( 
  id SERIAL PRIMARY KEY,
  departure_time TIME NOT NULL,
  arrival_time TIME NOT NULL,
  airline_id INT REFERENCES airlines(id),
  from_airport VARCHAR(3) REFERENCES airports(id),
  to_airport VARCHAR(3) REFERENCES airports(id),
  overnight BOOLEAN DEFAULT false
);

CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  pass_id INT REFERENCES passengers(id) NOT NULL,
  departure_date DATE NOT NULL,
  seat VARCHAR(3),
  airline_id INT REFERENCES airlines(id) NOT NULL,
  flight_id INT REFERENCES flights(id) NOT NULL
);

CREATE INDEX idx_airline_name ON airlines(airline_name);
CREATE INDEX idx_passenger_last_name ON passengers(last_name);

INSERT INTO passengers
  (first_name, last_name)
  VALUES
    ('Jennifer', 'Finch'),
    ('Thadeus', 'Gathercoal'),
    ('Sonja', 'Pauley'),
    ('Waneta', 'Skeleton'),
    ('Berkie', 'Wycliff'),
    ('Leathes', 'Alvin'),
    ('Squibbes', 'Cory');

INSERT INTO airports
  (id, airport_city, airport_state_province, airport_country)
  VALUES
    ('DCA', 'Washington', 'District of Columbia', 'United States of America'),
    ('SEA', 'Seattle-Tacoma', 'Washington', 'United States of America'),
    ('HND', 'Tokyo', 'n/a', 'Japan'),
    ('LHR', 'Longdon', 'England', 'United Kingdom'),
    ('LAX', 'Los Angeles', 'California', 'United States of America'),
    ('LAS', 'Las Vegas', 'Nevada', 'United States of America'),
    ('MEX', 'Mexico City', 'Mexico City', 'Mexico'),
    ('ORL', 'Paris', 'Ile-de-France', 'France'),
    ('ORD', 'Chicago', 'Illinois', 'United States of America'),
    ('CMN', 'Casablanca', 'Casablanca-Settat', 'Morocco'),
    ('DXB', 'Dubai', 'Dubai', 'United Arab Emirates'),
    ('PEK', 'Beijing', 'Hebei', 'China'),
    ('JFK', 'New York', 'New York', 'United States of America'),
    ('CLT', 'Charlotte', 'South Carolina', 'United States of America'),
    ('CID', 'Cedar Rapids', 'Iowa', 'United States of America'),
    ('MSY', 'New Orleans', 'Louisiana', 'United States of America'),
    ('GRU', 'Sao Paulo', 'Sao Paulo', 'Brazil'),
    ('SCL', 'Santiago', 'Santiago Province', 'Chile'),
    ('ATL', 'Atlanta', 'Georgia', 'United States of America'),
    ('BRU', 'Brussels', 'Brussels', 'Belgium'),
    ('DFW', 'Dallas-Fort Worth', 'Texas', 'United States of America');

INSERT INTO airlines
  (airline_name, primary_hub)
  VALUES
    ('United', 'ORD'),
    ('British Airways', 'LHR'),
    ('Delta', 'ATL'),
    ('TUI Fly Belgium', 'BRU'),
    ('Air China', 'PEK'),
    ('American Airlines', 'DFW'),
    ('Avianca Brasil', 'SCL');

INSERT INTO flights
  (from_airport, departure_time, to_airport, arrival_time)
  VALUES 
    ('DCA', '09:00:00', 'SEA', '12:00:00'),
    ('HND', '12:45:00', 'LHR', '16:15:00'),
    ('LAX', '07:00:00', 'LAS', '08:03:00'),
    ('SEA', '16:50:00', 'MEX', '21:00:00'),
    ('ORL', '18:30:00', 'CMN', '21:50:00'),
    ('DXB', '01:15:00', 'PEK', '12:55:00'),
    ('JFK', '06:00:00', 'CLT', '07:47:00'),
    ('CID', '14:42:00', 'ORD', '15:56:00'),
    ('CLT', '16:28:00', 'MSY', '19:18:00'),
    ('GRU', '19:30:00', 'SCL', '22:45:00');

 INSERT INTO tickets
  (pass_id, seat, flight_id, departure_date, airline_id)
  VALUES 
    (1, '33B', 1, '2018-04-08', 1),
    (2, '8A', 2, '2018-12-19', 2),
    (3, '12F', 3, '2018-01-02', 3),
    (1, '20A', 4, '2018-04-15', 3),
    (4, '23D', 5, '2018-08-01', 4),
    (2, '18C', 6, '2018-10-31', 5),
    (5, '9E', 7, '2019-02-06', 1),
    (6, '1A', 8, '2018-12-22', 6),
    (5, '32B', 9, '2019-02-06', 6),
    (7, '10D', 10, '2019-01-20', 7);

-- test
SELECT 
  passengers.first_name, passengers.last_name, airlines.airline_name, departure_date, flights.from_airport, flights.departure_time, flights.to_airport, flights.arrival_time, seat
  FROM tickets
  JOIN passengers
  ON tickets.pass_id = passengers.id
  JOIN airlines
  ON tickets.airline_id = airlines.id
  JOIN flights
  ON tickets.flight_id = flights.id;