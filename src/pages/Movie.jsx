import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
   getMovieData();
  }, [id]);

  function getMovieData(){
     axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => {
        setMovie(resp.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/");
        }
      });
  }

  return (
    <>
      {movie && (
      <div>
        <div className="container-fluid d-flex align-items-center justify-content-center">
          <div className="text-center p-5">
            <h1>{movie.title}</h1>
            <img src={movie.image} className="banner" alt="" />
            <h4>{movie.author}</h4>
            <p>{movie.abstract}</p>
          </div>
        </div>
        <section className="container">
            <div className="row justify-content-center g-3">
              {movie.reviews.length !== 0 ? (
                movie.reviews.map((review) => (
                  <div className="col-8" key={review.id}>
                    <ReviewCard review={review} key={review.id} />
                  </div>
                ))
              ) : (
                <div>Non è presente nessuna recensione</div>
              )}
            </div>
          </section>
          <section className="container py-4">
            <div className="row justify-content-center g-3">
              <div className="col-8">
                <div className="card">
                  <div className="card-body">
                    <h2>Aggiungi la tua recensione</h2>
                    <ReviewForm movieId={movie.id} updateMovie={getMovieData}/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
