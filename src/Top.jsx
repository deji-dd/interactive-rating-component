import StarIcon from "@mui/icons-material/Star";

function Top() {
  return (
    <div>
      <div className="img rounded-circle">
        <StarIcon className="img-inner" />
      </div>
      <div className="mt-3">
        <h3>How did we do?</h3>
      </div>
      <div className="mt-1">
        <p className="p">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
    </div>
  );
}

export default Top;
