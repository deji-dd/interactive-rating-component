import Top from "./Top";
import RatingRow from "./RatingRow";
import Bottom from "./Bottom";

function SubmittedFalse(props) {
  return (
    <div className="box card container-fluid rounded-4">
      <form className="card-body">
        <Top />
        <RatingRow
          rating={props.rating}
          setRating={props.setRating}
          setSubmit={props.setSubmit}
        />
        <Bottom
          style={props.style}
          setStyle={props.setStyle}
          submit={props.submit}
          setSubmitted={props.setSubmitted}
        />
      </form>
    </div>
  );
}

export default SubmittedFalse;
