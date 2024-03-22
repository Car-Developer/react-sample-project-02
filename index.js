const element = (
  <div className="background-container">
    <h1 className="heading">Congratulations!</h1>
    <div className="card-container">
      <img
        className="candidate-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="candidate image"
      />
      <h1 className="name">Vinod</h1>
      <p className="college-name">
        Studied Pragati Engineering college surampalem
      </p>
      <img
        className="candidate-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="property-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
