-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE moons (
    id SERIAL PRIMARY KEY,
    moon_name TEXT,
    home_planet INT NOT NULL
);

CREATE TABLE planets (
  id SERIAL PRIMARY KEY,
  planet_name TEXT NOT NULL,
  orbital_period_in_earth_years FLOAT,
  home_star INT NOT NULL
);

CREATE TABLE stars (
    id SERIAL PRIMARY KEY,
    star_name TEXT NOT NULL,
    home_galaxy INT DEFAULT 1
);

CREATE TABLE galaxies (
    id SERIAL PRIMARY KEY,
    galaxy_name TEXT NOT NULL
);

-- syntax:
-- ALTER TABLE "users" ADD CONSTRAINT "fk_users_home_region" FOREIGN KEY("home_region")
-- REFERENCES "regions" ("id");


ALTER TABLE "moons" ADD CONSTRAINT "fk_moons_home_planet" FOREIGN KEY("planets")
REFERENCES "planets" ("id");

ALTER TABLE "planets" ADD CONSTRAINT "fk_planets_home_star" FOREIGN KEY("stars")
REFERENCES "stars" ("id");

ALTER TABLE "stars" ADD CONSTRAINT "fk_stars_home_galaxy" FOREIGN KEY("galaxies")
REFERENCES "galaxies" ("id");


INSERT INTO galaxies (galaxy_name)
    VALUES ('Milky Way');

INSERT INTO stars (star_name)
    VALUES 
        ('Sol'),
        ('Proxima Centauri'),
        ('Gliese 876');

INSERT INTO planets (planet_name, orbital_period_in_earth_years, home_star)
    VALUES
        ('Earth', 1.00, 1),
        ('Mars', 1.88, 1),
        ('Venus', .062, 1),
        ('Neptune', 164.8, 1),
        ('Proxima Centauri b', 0.03, 2),
        ('Gliese 876 b', 0.23, 3);

INSERT INTO moons (moon_name, home_planet)
    VALUES
        ('Luna', 1),
        ('Phobos', 2),
        ('Deimos', 2),
        ('Naiad', 4),
        ('Thalassa', 4),
        ('Despina', 4),
        ('Galatea', 4),
        ('Larissa', 4),
        ('S/2004 N 1', 4),
        ('Proteus', 4),
        ('Triton', 4),
        ('Nereid', 4),
        ('Halimede', 4),
        ('Sao', 4),
        ('Laomedeia', 4),
        ('Psamathe', 4),
        ('Neso', 4);

-- test:
SELECT stars.star_name, planets.planet_name, moon_name
    FROM moons
    JOIN planets
    ON moons.home_planet = planets.id
    JOIN stars
    ON planets.home_star = stars.id;