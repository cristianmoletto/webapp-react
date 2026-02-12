import axios from "axios";
import { useState } from "react";

const initialReviewData = {
  name: "",
  vote: 1,
  text: "",
};

export default function ReviewForm({ movieId, updateMovie }) {
  const [reviewData, setReviewData] = useState(initialReviewData);

  function updateReviewData(event) {
    const value = event.target.value;
    const key = event.target.name;

    setReviewData({
      ...reviewData,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`http://localhost:3000/api/movies/${movieId}/reviews`, reviewData)
      .then((resp) => {
        updateMovie();
        setReviewData(initialReviewData);
      });
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={reviewData.name}
          onChange={updateReviewData}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="vote" className="form-label">
          Vote
        </label>
        <input type="number" 
        className="form-control" 
        id="vote" 
        name="vote"
        value={reviewData.vote}
        onChange={updateReviewData} 
        />
      </div>
      <div className="mb-2">
        <label htmlFor="text" className="form-label">
          Testo
        </label>
        <textarea 
        className="form-control" 
        id="text" 
        name="text"
        value={reviewData.text}
        onChange={updateReviewData}
        >
        </textarea>
      </div>
      <div className="mb-2">
        <button className="btn btn-primary" type="submit">
          Invia
        </button>
      </div>
    </form>
  );
}
