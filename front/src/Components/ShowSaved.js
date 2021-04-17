import Trip from "./Trip";
import PropTypes from "prop-types";

export default function ShowSaved() {
  let arr1 = JSON.parse(localStorage.getItem("saveTrip"));

  return arr1 ? (
    <div>
      {arr1.map((trip) => (
        <Trip trip={trip} />
      ))}
    </div>
  ) : (
    "Empty save."
  );
}

ShowSaved.propTypes = {
  trip: PropTypes.object,
};
