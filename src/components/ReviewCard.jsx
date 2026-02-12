export default function ReviewCard({review}) {
  return (
    <div className="card">
      <div className="card-header">
        {review.name} - {review.vote}
      </div>
      <div className="card-body">
        <p className="card-text">{review.text}</p>
        <p className="text-end">{review.created_at}</p>
      </div>
    </div>
  );
}
