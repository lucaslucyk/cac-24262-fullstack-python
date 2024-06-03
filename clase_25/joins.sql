insert into movies (name, description, release_date, rating, language, author_id)
values ('Otra peli', 'Lorem ipsum', '2023-05-11', 9.5, 'English', NULL);


-- left join
-- selecciona todos los autores y sus películas, incluyendo los autores que no tienen peliculas relacionadas
select a.first_name as author_first_name, a.last_name as author_last_name, m.name as movie_name
from authors a
left join movies m ON a.author_id = m.author_id;


-- selecciona todos los géneros y las pelícuilas que posean dicho género.
-- incluye géneros sin películas
select g.name as genre_name, m.name as movie_name
from genres g
left join movie_genres mg on g.genre_id = mg.genre_id
left join movies m on mg.movie_id = m.movie_id;

-- recupera todas las peliculas y su autor
-- incluye peliculas que no tienen autor
select a.first_name as author_first_name, a.last_name as author_last_name, m.name as movie_name
from authors a
right join movies m ON a.author_id = m.author_id;


select g.name as genre_name, m.name as movie_name
from genres g
right join movie_genres mg on g.genre_id = mg.genre_id
right join movies m on mg.movie_id = m.movie_id;


-- INNER JOIN

select m.name as movie_name, a.first_name as author_first_name, a.last_name as author_last_name
from movies m
join authors a ON m.author_id = a.author_id;


-- FULL JOIN

select a.first_name as author_first_name, a.last_name as author_last_name, m.name as movie_name
from authors a
full join movies m ON a.author_id = m.author_id;


-- cross join

select  a.first_name as author_first_name, a.last_name as author_last_name, m.name as movie_name
from authors a
cross join movies m;