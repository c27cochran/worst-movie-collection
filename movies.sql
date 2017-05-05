
DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

\c movies_db;

CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  genre VARCHAR,
  actors VARCHAR,
  rating VARCHAR,
  year VARCHAR
);

INSERT INTO movies (title, genre, actors, rating, year) VALUES ('Jack and Jill', 'Comedy', 'Adam Sandler and Adam Sandler', 'PG-13', '2011');
INSERT INTO movies (title, genre, actors, rating, year) VALUES ('She''s All That', 'Comedy', 'Paul Walker, Freddy Prinze Jr,', 'PG-13', '1999');

