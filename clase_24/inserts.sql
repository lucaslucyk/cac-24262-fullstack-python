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