import React from "react";
import PropTypes from "prop-types";
import Trip from "./Trip";

function Show(props) {
	return props.trips ? (
		<div className="container">
			<div className="row">
				<div className="col-6 col-sm" id="card-display">
					{props.selectedTripObj ? (
						<Trip trip={props.selectedTripObj} key={props.trip} />
					) : (
						props.trips.map((t) => (
							<div className="card-deck">
								<div className="card-body">
									<Trip key={t.id} trip={t} />
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	) : null;
}

Show.propTypes = {
	props: PropTypes.array,
};

export default Show;
