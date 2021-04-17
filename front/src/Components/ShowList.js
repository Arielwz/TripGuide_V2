import Show from "./Show";
import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Pagination } from "element-react";
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
    fetchTrips();
  }, [props.searchKey, page]);

  useEffect(() => {
    const fetchCount = async () => {
      const resRaw = await fetch("./countData");
      const _count = await resRaw.json();
      setCount(_count);
    };
    fetchCount();
  }, []);

  return (
    <div>
      <h1>Find your favorite trips!</h1>
      <label htmlFor="trip-select">Filter by tag:</label>
      {
        <select
          name="trips"
          id="trips-select"
          onChange={(e) => {
            setSelectedTrip(e.target.value);
          }}
        >
          <option value="all">All</option>
          {trips?.map((trip) => (
            <option key={trip} value={trip.tag}>
              {trip.tag}
            </option>
          ))}
        </select>
      }

      <Show trips={trips} selectedTripObj={selectedTripObj} />

      <div className="first">
        <div className="block">
          <Pagination
            layout="prev, pager, next"
            total={count.amount}
            pageSize={6}
            onCurrentChange={(e) => setPage(e)}
          />
        </div>
      </div>
    </div>
  );
};

ShowList.propTypes = {
  searchKey: PropTypes.string,
};

export default ShowList;
