import Show from "./Show";
import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import PaginationComponent from "./PaginationComponent";
import "element-theme-default";

const ShowList = function ShowList(props) {
  const [trips, setTrips] = useState([]);
  const [count, setCount] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedTrip, setSelectedTrip] = useState("");

  const selectedTripObj = useMemo(
    () => trips?.find((t) => t.tag === selectedTrip),
    [selectedTrip, trips]
  );

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch(
        `/getTrips?searchKey=${props.searchKey}&page=${page}`
      );
      const res = await response.json();
      if (res && res.success) {
        setTrips(res.trips);
      }
    };

    const fetchCount = async () => {
      const resRaw = await fetch(`./countRecords?searchKey=${props.searchKey}`);
      const r = await resRaw.json();
      if (r) {
        setCount(r.a);
      }
    };
    fetchTrips();
    fetchCount();
  }, [props.searchKey, page]);

  const tags = ["wine", "skiing", "flower", "trail"];
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          margin: "35px 0 20px 0",
        }}
      >
        Find Your Favorite Trips!
      </h1>

      <label htmlFor="trip-select">Filter by tag:</label>
      {
        <select
          name="trips"
          id="trips-select"
          aria-label="filter by tag"
          onChange={(e) => {
            setSelectedTrip(e.target.value);
          }}
        >
          <option value="all">All</option>
          {tags?.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      }

      <Show trips={trips} selectedTripObj={selectedTripObj} />

      <div className="first">
        <div className="block">
          <PaginationComponent
            total={count}
            page={page}
            onChangePage={setPage}
          ></PaginationComponent>
        </div>
      </div>
    </div>
  );
};

ShowList.propTypes = {
  searchKey: PropTypes.string,
};

export default ShowList;
