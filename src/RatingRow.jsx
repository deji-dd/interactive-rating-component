import Rating from "./Rating";

function RatingRow(props) {
  return (
    <div className="row justify-content-between mx-0 my-4">
      <Rating
        ratingStyle={props.rating[0]}
        rating={props.rating}
        setRating={props.setRating}
        num={1}
        setSubmit={props.setSubmit}
      />
      <Rating
        ratingStyle={props.rating[1]}
        rating={props.rating}
        setRating={props.setRating}
        num={2}
        setSubmit={props.setSubmit}
      />
      <Rating
        ratingStyle={props.rating[2]}
        rating={props.rating}
        setRating={props.setRating}
        num={3}
        setSubmit={props.setSubmit}
      />
      <Rating
        ratingStyle={props.rating[3]}
        rating={props.rating}
        setRating={props.setRating}
        num={4}
        setSubmit={props.setSubmit}
      />
      <Rating
        ratingStyle={props.rating[4]}
        rating={props.rating}
        setRating={props.setRating}
        num={5}
        setSubmit={props.setSubmit}
      />
    </div>
  );
}

export default RatingRow;
