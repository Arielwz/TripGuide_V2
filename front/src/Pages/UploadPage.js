import React, { useState } from "react";

export default function UploadPage(props) {
  const [tripInfo, setTripInfo] = useState({});
  const [errorText, setErrorText] = useState("");
  return (
    <div className="col-4">
      <br />
      <header><h1 className="create-info" style={{fontSize: "40px"}}>Create a new Trip</h1></header>
      {!!errorText && (
        <div
          id="error"
          className="alert-danger"
          role="alert"
          style={{ marginBottom: "4px" }}
        >
          {errorText}
        </div>
      )}
      <main>
        <form
          id="formCreate"
          onSubmit={async (ev) => {
            ev.preventDefault();
            const formData = new FormData();
            Object.entries(tripInfo).forEach(([key, value]) => {
              formData.append(key, value);
            });
            const response = await fetch("/createTrip", {
              method: "POST",
              credentials: "same-origin",
              body: formData,
            });
            const res = await response.json();
            if (res && res.success) {
              props.history.push("/");
            } else {
              setErrorText(res.message || "Upload failed!");
            }
          }}
        >
          <label className="form-label">
            Title:{" "}
            <input
              className="form-control"
              type="text"
              aria-label="input title"
              onChange={(ev) => {
                setTripInfo({
                  ...tripInfo,
                  name: ev.target.value,
                });
              }}
            />
          </label>
          <br />
          <label className="form-label">
            Location:
            <input
              className="form-control"
              type="text"
              aria-label="input location"
              onChange={(ev) => {
                setTripInfo({
                  ...tripInfo,
                  location: ev.target.value,
                });
              }}
            />
          </label>
          <label className="form-label">
            Description:
            <br></br>
            <textarea
              rows="5"
              cols="50"
              aria-label="input description"
              onChange={(ev) => {
                setTripInfo({
                  ...tripInfo,
                  content: ev.target.value,
                });
              }}
            ></textarea>
          </label>
          <label className="form-label">
            Photo:{" "}
            <input
              className="form-control"
              type="file"
              id="image-upload"
              aria-label="choose photo"
              onChange={(ev) => {
                setTripInfo({
                  ...tripInfo,
                  image: ev.target.files && ev.target.files[0],
                });
              }}
            />
          </label>
          <br />
          <button type="submit" className="btn btn-primary" aria-label="submit">
            Create
          </button>
        </form>
      </main>
    </div>
  );
}
