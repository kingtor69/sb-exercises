-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    last_or_only_name TEXT NOT NULL,
    first_name TEXT
);

CREATE TABLE producers (
    id SERIAL PRIMARY KEY,
    last_or_only_name TEXT NOT NULL,
    first_name TEXT
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  song_title TEXT NOT NULL,
  duration_in_seconds INTEGER CHECK (duration_in_seconds > 0),
  release_date DATE NOT NULL
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    album_name TEXT NOT NULL,
    release_date DATE,
    num_tracks INT CHECK (num_tracks > 0) DEFAULT 13
);

CREATE TABLE albums_songs (
    id SERIAL PRIMARY KEY,
    album_id INT REFERENCES albums(id),
    song_id INT REFERENCES songs(id),
    track_num INT CHECK (track_num > 0) DEFAULT 1
);

CREATE TABLE performances (
    id SERIAL PRIMARY KEY,
    song_id INT REFERENCES songs(id) NOT NULL,
    artist_id INT REFERENCES artists(id) NOT NULL,
    album_id INT REFERENCES albums(id),
    producer_id INT REFERENCES artists(id)
);

CREATE TABLE songs_performers (
    id SERIAL PRIMARY KEY,
    song_id INT REFERENCES songs(id) NOT NULL,
    performance_id INT REFERENCES performances(id) NOT NULL
);

INSERT INTO songs
        (song_title, duration_in_seconds, release_date)
    VALUES
        ('MMMBop', 238, '04-15-1997'),
        ('Bohemian Rhapsody', 355, '10-31-1975'),
        ('One Sweet Day', 282, '11-14-1995'),
        ('Shallow', 216, '09-27-2018');

INSERT INTO artists
        (last_or_only_name, first_name)
    VALUES 
        ('Hanson', NULL),
        ('Queen', NULL),
        ('Cary', 'Mariah'),
        ('Boyz II Men', NULL),
        ('Gaga', 'Lady'),
        ('Cooper', 'Bradley');

INSERT INTO producers
        (last_or_only_name, first_name)
    VALUES
        ('Dust Brothers', NULL),
        ('Lironi', 'Stephen'),
        ('Baker', 'Roy Thomas'),
        ('Afanasieff', 'Walter'),
        ('Rice', 'Benjamin');

INSERT INTO albums  
        (album_name)
    VALUES
        ('Middle of Nowhere'),
        ('A Night at the Opera'),
        ('Daydream'),
        ('A Star Is Born');

INSERT INTO performances
        (song_id, artist_id, album_id, producer_id)
    VALUES
        (1, 1, 1, 1),
        (1, 1, 1, 2),
        (2, 2, 2, 3),
        (3, 3, 3, 4),
        (3, 4, 3, 4),
        (4, 5, 4, 5),
        (4, 6, 4, 5);

SELECT 
        artists.last_or_only_name, artists.first_name, producers.last_or_only_name, producers.first_name, songs.song_title, songs.release_date, albums.album_name, songs.duration_in_seconds
    FROM performances
    JOIN songs
    ON performances.song_id = songs.id
    JOIN artists
    ON performances.artist_id = artists.id
    JOIN albums
    ON performances.album_id = albums.id
    JOIN producers
    ON performances.producer_id = producers.id
    GROUP BY artists.last_or_only_name, artists.first_name, producers.last_or_only_name, producers.first_name, songs.song_title, songs.release_date, albums.album_name, songs.duration_in_seconds;