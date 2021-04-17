import PropTypes from "prop-types";

const arr = [];

function add(t) {
  arr.push(t);
  localStorage.setItem("saveTrip", JSON.stringify(arr));
  JSON.parse(localStorage.getItem("saveTrip"));
}

function Trip({ trip }) {
  return (
    <div className="container">
      <div className="card" id="card-info">
        <img className="card-img-top" src={trip.img} alt="trip" />
        <p className="card-title">{trip.name}</p>
        <p>Location:{trip.location}</p>
        <p>{trip.content}</p>
        <p>Tags:{trip.tag}</p>
        <p className="card-text" id="credit-info">
          Image by {trip.credit}
        </p>
      </div>
      <button className="btn btn-primary" onClick={() => add(trip)}>
        save
      </button>
    </div>
  );
}

Trip.propTypes = {
  trip: PropTypes.object,
};

export default Trip;
