import { useState } from "react";
import "./App.css";
import styleRating from "./ratingStyle";
import SubmittedFalse from "./SubmittedFalse";
import SubmittedTrue from "./SubmittedTrue";

function App() {
  let [style, setStyle] = useState([
    {
      backgroundColor: "hsl(25, 97%, 53%)",
    },
    { color: "white" },
  ]);
  let [rating, setRating] = useState([...styleRating]);
  let [submit, setSubmit] = useState();
  let [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <SubmittedTrue submit={submit} />;
  } else {
    return (
      <SubmittedFalse
        rating={rating}
        setRating={setRating}
        setSubmit={setSubmit}
        style={style}
        setStyle={setStyle}
        submit={submit}
        setSubmitted={setSubmitted}
      />
    );
  }
}

export default App;
