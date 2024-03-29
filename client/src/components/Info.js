import React from "react";
import Passengers from "./Passengers"
import Contact from "./Contact";
import Payment from "./Payment";
import PickupDropOff from "./PickupDropOff";

export default function Info(props) {
  return (
    <div className="box-with-circular-ends">
      <div className="header">
        <h2 className="info-heading">
          Ride Details
        </h2>
      </div>
      <div className="form-container">
        <div className="driver">
          <Passengers class="driver-info" name={props.name} img="images/user.png" rating={props.rating}/>
          <Contact/>
        </div>
        {/* <Passengers class="passenger" name="Sara111111111111111111111111111111111" img="images/user.png" rating="4.5"/> */}
        <Passengers class="passenger" name="Sanskriti Negi" img="images/user.png" rating="4.5"/>
        {/* <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/>
        <Passengers class="passenger" name="Sara2" img="images/user.png" rating="4.5"/> */}

        <Payment amount="Rs. 60" method="Paytm wallet"/>

        {/* <PickupDropOff pickup="grand" dropoff="jay"/> */}
      </div>
      <br />
    </div>
  );
}
