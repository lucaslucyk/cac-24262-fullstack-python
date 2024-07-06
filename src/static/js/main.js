function addMovieRow(
  movieId,
  name,
  description,
  release_date,
  rating,
  language,
  author,
  genres,
  characters
) {
  // const tableBody = document.querySelector("#movies-table tbody");
  const movieDate = new Date(release_date);
  const moviesList = document.querySelector("#top-rated-list");
  const article = document.createElement("article");
  article.id = `movie-${movieId}`;
  article.className = "movie-item-v2";
  article.innerHTML = `
    <a href="#">
      <img src="/static/images/${name}.jpg" class="movie-item-img-2" alt="">
      <div class="movie-detail-v2">
          <p class="movie-item-detail-title-v2">${name}</p>
          <p class="movie-item-detail-subtitle-v2">${movieDate.getFullYear()} - ${rating}</p>
      </div>
    </a>
  `
  moviesList.appendChild(article);
}

// function rmMovieRow(movieId) {
//   const row = document.querySelector(`#movie-${movieId}`);
//   row.remove();
// }

// moviesForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const movieId = moviesForm["movieId"].value;
//   const movieName = moviesForm["movieName"].value;
//   const movieDescription = moviesForm["movieDescription"].value;
//   const releaseDate = moviesForm["releaseDate"].value;

//   const url = movieId !== "" ? `/api/movies/${movieId}` : "/api/movies";
//   const method = movieId !== "" ? `PUT` : "POST";

//   const response = await fetch(url, {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: movieName,
//       description: movieDescription,
//       release_date: releaseDate,
//       author_id: 2,
//       language: "English",
//       rating: "8.5",
//     }),
//   });
//   const data = await response.json();

//   if (movieId !== "") {
//     rmMovieRow(data.movie_id);
//   }
//   addMovieRow(
//     data.movie_id,
//     data.name,
//     data.description,
//     data.release_date,
//     data.rating,
//     data.language,
//     data.author_id,
//     data.genres,
//     data.characters
//   );

//   moviesForm.reset();
// });

window.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("/api/movies");
  const data = await response.json();
  for (movie of data) {
    addMovieRow(
      movie.movie_id,
      movie.name,
      movie.description,
      movie.release_date,
      movie.rating,
      movie.language,
      movie.author_id,
      movie.genres,
      movie.characters
    );
  }
});
