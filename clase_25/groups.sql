-- group by

select a.first_name, a.last_name, AVG(m.rating) as avg_rating
from authors a
join movies m on a.author_id = m.author_id
group by a.first_name, a.last_name;


-- having


select a.first_name, a.last_name, AVG(m.rating) as avg_rating
from authors a
join movies m on a.author_id = m.author_id
group by a.first_name, a.last_name
having AVG(m.rating) >= 8.0;



select m.name as movie_name,
	(select count(*) from movie_characters mc where mc.movie_id = m.movie_id) as characters_count
from movies m;


select name, rating
from movies
where rating > (select AVG(rating) from movies);


-- recuperamos las calificaciones promedio de las peliculas por autor
-- mostramos unicamente cuando el promedio de calif sea >7

select author_fist_name, author_last_name, avg_rating
	from (select a.first_name as author_fist_name, a.last_name as author_last_name, AVG(m.rating) as avg_rating
		from authors a
		join movies m on a.author_id = m.author_id
		group by a.first_name, a.last_name) as author_avg_rating
where avg_rating > 7;


-- TODO
-- obtener el nombre de cada pelicula y la calificacion promedio de todas las que fueron lanzadas el mismo año



-- eliminar un registro
DELETE from authors where first_name = 'John';

-- borra todos los registros de una tabla
truncate table authors;

-- borra la tabla
drop table authors;