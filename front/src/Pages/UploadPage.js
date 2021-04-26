import React, { useState } from "react";

export default function UploadPage(props) {
  const [tripInfo, setTripInfo] = useState({});
  const [errorText, setErrorText] = useState("");
  return (
    <div className="upload">
      <br />
      <header className="col-md-12 col-sm-12">
        <h1 className="create-info" style={{ fontSize: "40px" }}>
          Create a new Trip
        </h1>
      </header>

      <body className="col-6">
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
              size="45"
              placeholder="The name of the place"
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
              size="45"
              placeholder="The address of the place"
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
            Tag:
            <input
              className="form-control"
              type="text"
              size="45"
              placeholder="e.g. trail, mountain, park, flower, etc"
              aria-label="input location"
              onChange={(ev) => {
                setTripInfo({
                  ...tripInfo,
                  tag: ev.target.value,
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
              placeholder="Description of the trip"
              aria-label="input tag"
              onChange={(ev) => {
                setTripInfo({
                  ...tripInfo,
                  content: ev.target.value,
                });
              }}
            ></textarea>
          </label>
          <label className="form-label" style={{ marginTop: "5px" }}>
            Photo:{" "}
            <input
              className="form-control"
              type="file"
              style={{ fontSize: "22px" }}
              id="image-upload"
              aria-label="choose photo"
              onChange={(ev) => {
                setTripInfo({
                  ...tripInfo,
                  image: ev.target.files && ev.target.files[0],
                });
              }}
            />
            <div
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                color: "#6E6F70",
                marginBottom: "10px",
              }}
            >
              (Supported photo format: .jpeg, .jpg, .bmp, .png, .gif, etc.)
            </div>
          </label>
          <label className="form-label">
            Photo Source:
            <input
              className="form-control"
              type="text"
              size="45"
              placeholder="The author or the source link of the photo"
              aria-label="input photo author"
              onChange={(ev) => {
                setTripInfo({
                  ...tripInfo,
                  credit: ev.target.value,
                });
              }}
            />
          </label>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "22px" }}
            aria-label="submit"
          >
            Create
          </button>
          <div style={{ fontSize: "18px", marginTop: "20px" }}>
            {" "}
            Notice: please click on the last page to see your newly created
            post.
          </div>
        </form>
      </body>
    </div>
  );
}
