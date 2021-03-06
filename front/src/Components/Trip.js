import PropTypes from "prop-types";

const arr = [];

function add(t) {
  arr.push(t);
  localStorage.setItem("saveTrip", JSON.stringify(unique(arr)));
  JSON.parse(localStorage.getItem("saveTrip"));
}

function unique(array) {
  return [...new Set(array)];
}

function Trip({ trip }) {
  return (
    <div className="container">
      <div className="card">
        <img className="card-img-top" src={trip.img} alt="trip" />
        <p className="card-title">{trip.name}</p>
        <p className="card-content">Location: {trip.location}</p>
        <p className="card-content">{trip.content}</p>
        <p className="card-content">Tags:{trip.tag}</p>
        <p className="card-text">Image by {trip.credit}</p>
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
