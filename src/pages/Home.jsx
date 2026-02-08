import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

export default function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/movies").then((resp) => {
      setMovies(resp.data.results);
      console.log(resp.data.results)
    });
  }, []);


  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
      >   
      <div className="text-center p-5">
        <h1 className="mb-4">Lista dei film</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
          {movies.map((movie) => (
            <div className="column" key={movie.id}>
             <MovieCard movie={movie}/>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
