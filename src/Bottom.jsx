function Bottom(props) {
  return (
    <div>
      <button
        className="rounded-pill btn"
        style={props.style[0]}
        value={props.submit}
        onMouseEnter={() => {
          props.setStyle([
            {
              backgroundColor: "white",
            },
            {
              color: "hsl(25, 97%, 53%)",
            },
          ]);
        }}
        onMouseLeave={() => {
          props.setStyle([
            {
              backgroundColor: "hsl(25, 97%, 53%)",
            },
            {
              color: "white",
            },
          ]);
        }}
        onClick={(e) => {
          if (props.submit == null) {
            e.preventDefault();
          } else {
            e.target.value = props.submit;
            props.setSubmitted(true);
          }
        }}
      >
        <p style={props.style[1]} className="my-0 submit">
          SUBMIT
        </p>
      </button>
    </div>
  );
}

export default Bottom;
