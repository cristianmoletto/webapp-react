import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
  return (
    <>
      <Link to={`/${movie.id}`} style={{"textDecoration":"none"}}>
        <div className="card">
          <img src={movie.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h4 className="card-title" >{movie.title}</h4>
            <p className="card-text">{movie.abstract}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
