CREATE TABLE movies (
	movie_id SERIAL PRIMARY KEY,

	name VARCHAR(100) NOT NULL,
	description TEXT,
	release_date DATE,
	rating DECIMAL(2, 1),
	language VARCHAR(50),

	author_id INTEGER,
	FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE authors (
	author_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	birth_date DATE
);

create table if not exists characters (
	character_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	birth_date DATE
);

create table if not exists genres (
	genre_id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);


create table if not exists movie_genres (
	movie_id INTEGER,
	genre_id INTEGER,
	PRIMARY KEY (movie_id, genre_id),

	FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
	FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);

create table if not exists movie_characters (
	movie_id INTEGER,
	character_id INTEGER,
	PRIMARY KEY (movie_id, character_id),

	FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
	FOREIGN KEY (character_id) REFERENCES characters(character_id)
);