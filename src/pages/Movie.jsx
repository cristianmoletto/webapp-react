import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
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
  }, [id]);

  return (
    <>
      {movie && (
        <div className="container-fluid d-flex align-items-center justify-content-center">
          <div className="text-center p-5">
            <h1>{movie.title}</h1>
            <img src={movie.image} className="banner" alt="" />
            <h4>{movie.author}</h4>
            <p>{movie.abstract}</p>
          </div>
        </div>
      )}
    </>
  );
}
