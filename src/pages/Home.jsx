import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/movies").then((resp) => {
      setMovies(resp.data.results);
      console.log(resp.data.results);
    });
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    axios
      .get("http://localhost:3000/api/movies", {
        params: {
          search,
        },
      })
      .then((resp) => {
        setMovies(resp.data.results);
      });
  }

  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="text-center p-5">
          <h1 className="mb-4">I Nostri Film</h1>
          <form className="d-flex mb-5" role="search" onSubmit={handleSearch}>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Scrivi qui per trovare il film"
            />
            <button className="btn btn-primary" type="submit">
              Cerca
            </button>
            </form>
            {movies.length === 0 ? (
              <p>Nessun film trovato per la tua ricerca</p>
            ):(
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
            {movies.map((movie) => (
              <div className="column" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </>
  );
}
