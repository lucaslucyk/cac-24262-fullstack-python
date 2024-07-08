CREATE TABLE authors (
	author_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	birth_date DATE
);

CREATE TABLE movies (
	movie_id SERIAL PRIMARY KEY,

	name VARCHAR(100) UNIQUE NOT NULL,
	description TEXT,
	release_date DATE,
	rating DECIMAL(2, 1),
	language VARCHAR(50),

	author_id INTEGER,
	FOREIGN KEY (author_id) REFERENCES authors(author_id)
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

--- inserts

INSERT INTO authors (first_name, last_name, birth_date)
VALUES
('John', 'Doe', '1970-01-01'),
('Jane', 'Doe', '1987-01-01'),
('Lucas', 'Nose', '2001-01-01');


INSERT INTO characters (first_name, last_name, birth_date)
VALUES
('John', 'Snow', '1970-01-01'),
('Harry', 'Potter', '1987-01-01');

insert into genres (name)
values
('Action'),
('Drama'),
('Fantasy');

insert into movies (name, description, release_date, rating, language, author_id)
values
('Peli 1', 'lorem 10', '2024-01-01', 8.5, 'English', 1),
('Peli 2', 'lorem 20', '1980-01-01', 6.5, 'English', 2);

insert into movie_genres (movie_id, genre_id)
values
(1, 1),
(1, 3),
(2, 3);


insert into movie_characters (movie_id, character_id)
values
(1, 1),
(1, 2),
(2, 1);