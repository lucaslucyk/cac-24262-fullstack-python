select * FROM authors;
select first_name, last_name from characters;

select * from movies
	where release_date > '2023-01-01';

select * from movies
	where release_date < '2023-01-01';

select * from movies
	where release_date != '2024-01-01';

select * from movies
	where release_date = '2024-01-01';

select * from movies
	where name like '%li%';


select name, rating,
	case 
		when rating >= 9 then 'Excelente!'
		when rating >= 7.5 then 'Buena'
		else 'Pobre'
	end as rating_category

	from movies;


select * from movies where extract(year from release_date) = 2024;



select * from authors;
select distinct last_name from authors;

select first_name from authors
union
select first_name from characters;

-- aggregations
-- COUNT, SUM, AVG, MAX, MIN

select COUNT(*) as total_movies from movies;