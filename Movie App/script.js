 const form = document.getElementById("form")

 form.addEventListener("submit" , (event)=>{
   event.preventDefault()
 })

const config = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTY0YWYwZWM4OGVlNTU2YjNlNGMyMzkwZjRmYTFhNSIsInN1YiI6IjY0ZjFjYTRiY2FhNTA4MDBlOTUyM2U4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bvKYCGnCBFzDj35Q_6e75aso7_knDT6xBZ5GOSRuzSA",
  },
};

fetch('https://api.themoviedb.org/3/discover/movie',config)
.then(response => response.json())
.then(data => console.log(data.results))
.catch(error => console.log(error.message))