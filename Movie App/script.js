const form = document.getElementById("form");
const searchBar = document.getElementById("search");
const main = document.getElementById("main");

const API = "https://api.themoviedb.org/3/discover/movie";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?8e64af0ec88ee556b3e4c2390f4fa1a5=&query=";
const IMG_PATH = "https://image.tmdb.org/t/p/w500/";

const config = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTY0YWYwZWM4OGVlNTU2YjNlNGMyMzkwZjRmYTFhNSIsInN1YiI6IjY0ZjFjYTRiY2FhNTA4MDBlOTUyM2U4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bvKYCGnCBFzDj35Q_6e75aso7_knDT6xBZ5GOSRuzSA",
  },
};

function apiUrl(url) {
  fetch(url, config)
    .then((response) => response.json())
    .then((data) => showMovieHtml(data.results))
    .catch((error) => console.log(error.message));
}

function imgapi(id) {
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}


apiUrl(API);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let searchVal = searchBar.value;

  if (searchVal && searchVal !== "") {
    apiUrl(API_SEARCH + searchVal);
    searchBar.value = " ";
  } else {
    window.location.reload();
    alert("Please enter a valid movie name");
  }
});

function showMovieHtml(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview,id } = movie;

    console.log(movie);

    const movieContainer = document.createElement("div");

    movieContainer.classList.add("movie-container");

    movieContainer.innerHTML = `
    <div class="movie-img">
          <img src="${IMG_PATH + poster_path}"/>
        </div>
        <div class="movie-detail">
          <span class="movie-name">${title}</span>
          <span class="movie-score">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>overview</h3>
          <p>${overview}</p>
        </div>
    `;
    main.appendChild(movieContainer);
  });
}
