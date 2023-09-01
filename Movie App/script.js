const form = document.getElementById("form");
const searchBar = document.getElementById("search");

const API = "https://api.themoviedb.org/3/discover/movie";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?8e64af0ec88ee556b3e4c2390f4fa1a5=&query=";

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
    .then((data) => console.log(data.results))
    .catch((error) => console.log(error.message));
}

apiUrl(API)

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let searchVal = searchBar.value;

  if(searchVal && searchVal !==''){
    apiUrl(API_SEARCH + searchVal)
    searchBar.value = " "
  }else{
    window.location.reload()
   alert('Please enter a valid movie name')
  }



});
