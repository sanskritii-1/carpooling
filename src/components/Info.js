import React from "react";
import Passengers from "./Passengers"
import Contact from "./Contact";

export default function Info() {
  return (
    <div className="box-with-circular-ends">
      <div className="header">
        <h2>
          Ride Details
        </h2>
      </div>
      <div className="form-container">
        <div className="driver">
          <Passengers class="driver-info" name="Driver" img="images/user.png" rating="4.5"/>
          <Contact/>
        </div>
        <Passengers class="passenger" name="Sara111111111111111111111111111111111" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sanskriti Negi" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/>
      </div>
      <br />
    </div>
  );
}
