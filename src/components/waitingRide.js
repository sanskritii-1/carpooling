import React from "react";

export default function Waiting(){
    return <div className="box-with-circular waiting-box">
        <div className="header">
            <h2 className="info-heading">
            Ride Details
            </h2>
        </div>
        <p className="waiting">Contacting Drivers....</p>
    </div>
}