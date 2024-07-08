const moviesForm = document.querySelector("#movies-form");

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
  const tableBody = document.querySelector("#movies-table tbody");

  const row = document.createElement("tr");
  row.id = `movie-${movieId}`;
  row.innerHTML = `
        <td>${name}</td>
        <td>${description}</td>
        <td>${release_date}</td>
        <td>${rating}</td>
        <td>${language}</td>
        <td>${author}</td>
        <td>${genres}</td>
        <td>${characters}</td>
        <td>
            <button class="btn btn-danger btn-sm delete-btn">Eliminar</button>
            <button class="btn btn-warning btn-sm edit-btn">Editar</button>
        </td>
    `;

  const deleteButton = row.querySelector(".delete-btn");
  deleteButton.addEventListener("click", async () => {
    const response = await fetch(`/api/movies/${movieId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    rmMovieRow(data.movie_id);
  });
  tableBody.appendChild(row);

  const editButton = row.querySelector(".edit-btn");
  editButton.addEventListener("click", async () => {
    moviesForm["movieId"].value = movieId;
    moviesForm["movieName"].value = name;
    moviesForm["movieDescription"].value = description;
    moviesForm["releaseDate"].valueAsDate = new Date(release_date);
  });
  tableBody.appendChild(row);
}

function rmMovieRow(movieId) {
  const row = document.querySelector(`#movie-${movieId}`);
  row.remove();
}

moviesForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const movieId = moviesForm["movieId"].value;
  const movieName = moviesForm["movieName"].value;
  const movieDescription = moviesForm["movieDescription"].value;
  const releaseDate = moviesForm["releaseDate"].value;

  const url = movieId !== "" ? `/api/movies/${movieId}` : "/api/movies";
  const method = movieId !== "" ? `PUT` : "POST";

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: movieName,
      description: movieDescription,
      release_date: releaseDate,
      author_id: 2,
      language: "English",
      rating: "8.5",
    }),
  });
  const data = await response.json();

  if (response.status >= 400) {
    alert(data.message)
    return
  }

  if (movieId !== "") {
    rmMovieRow(data.movie_id);
  }
  addMovieRow(
    data.movie_id,
    data.name,
    data.description,
    data.release_date,
    data.rating,
    data.language,
    data.author_id,
    data.genres,
    data.characters
  );

  moviesForm.reset();
});

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
