import thankYou from "./thankYou.svg";

function SubmittedTrue(props) {
  return (
    <div className="box card container-fluid rounded-4">
      <div className="card-body">
        <div className="thank-you mx-auto my-2">
          <img width="100%" src={thankYou} alt="thank you"></img>
        </div>
        <div className="rounded-pill selection mt-4 mb-3 mx-auto">
          <p className="py-1 my-0">You selected {props.submit} out of 5</p>
        </div>
        <div className="mx-auto header-thank-you">
          <h3>Thank You!</h3>
        </div>
        <div className="p-thank-you">
          <p className="p">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubmittedTrue;
