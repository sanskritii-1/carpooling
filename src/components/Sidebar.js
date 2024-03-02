import React from "react";

export default function Info() {
  return (
    <div className="box-with-circular-ends">
      <div className="header">
        <h2>
          <strong>Where can we Pickup?</strong>
        </h2>
      </div>
      <div className="form-container">
        <div className="pickup-location">
          <input
            type="text"
            placeholder="Add a pickup location"
            // value={pickupLocation}
            // onChange={(e) => setPickupLocation(e.target.value)}
          />
        </div>
        <br />

        <div className="drop-location">
          <input
            type="text"
            placeholder="Enter Your Destination"
            // value={dropLocation}
            // onChange={(e) => setDropLocation(e.target.value)}
          />
        </div>
        <br />

        {/* <button onClick={findRide}>Ride Now</button> */}
      </div>
      <br />
    </div>
  );
}
