import { Link } from "react-router-dom";
export default function MovieCard({movie}) {
  return (
    <div className="card">
      <img src={movie.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <p className="card-text">{movie.abstract}</p>
        <Link to={`/${movie.id}`}>Vedi dettagli</Link>
      </div>
    </div>
  );
}
