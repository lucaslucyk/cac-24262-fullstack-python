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
            <button data-id="${movieId}" class="btn btn-danger btn-sm">Eliminar</button>
            <button class="btn btn-warning btn-sm">Editar</button>
        </td>
    `;
  tableBody.appendChild(row);
}

moviesForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const movieName = moviesForm["movieName"].value;
  const movieDescription = moviesForm["movieDescription"].value;
  const releaseDate = moviesForm["releaseDate"].value;

  const response = await fetch("/api/movies", {
    method: "POST",
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
  addMovieRow(
    data.name,
    data.description,
    data.release_date,
    data.rating,
    data.language,
    data.author,
    data.genres,
    data.characters
  );
});

window.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("/api/movies");
  const data = await response.json();
  for (movie of data) {
    addMovieRow(
      movie.name,
      movie.description,
      movie.release_date,
      movie.rating,
      movie.language,
      movie.author,
      movie.genres,
      movie.characters
    );
  }
});
