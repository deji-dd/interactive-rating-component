import styleRating from "./ratingStyle";

function Rating(props) {
  return (
    <div style={props.ratingStyle} className="rating rounded-circle px-0">
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          if (props.ratingStyle.clicked) {
            let temp = [...props.rating];
            temp[props.num - 1] = {
              backgroundColor: "rgb(39, 46, 56)",
              color: "hsl(217, 12%, 63%)",
              clicked: false,
            };
            props.setRating(temp);
            props.setSubmit();
          } else {
            let temp = [...styleRating];
            temp[props.num - 1] = {
              backgroundColor: "hsl(25, 97%, 53%)",
              color: "white",
              clicked: true,
            };
            props.setRating(temp);
            props.setSubmit(props.num);
          }
        }}
        onMouseEnter={() => {
          if (!props.ratingStyle.clicked) {
            let temp = [...props.rating];
            temp[props.num - 1] = {
              backgroundColor: "hsl(216, 12%, 54%)",
              color: "white",
              clicked: false,
            };
            props.setRating(temp);
          }
        }}
        onMouseLeave={() => {
          if (!props.ratingStyle.clicked) {
            let temp = [...props.rating];
            temp[props.num - 1] = {
              backgroundColor: "rgb(39, 46, 56)",
              color: "hsl(217, 12%, 63%)",
              clicked: false,
            };
            props.setRating(temp);
          }
        }}
      >
        <p style={props.ratingStyle} className="rating-num my-0">
          {props.num}
        </p>
      </button>
    </div>
  );
}

export default Rating;
