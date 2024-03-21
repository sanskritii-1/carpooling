import React from "react";

export default function PickupDropOff(props){
    return (
        <div className="destination">
            <div className="pickup">
                <img src=""/>
                <p>{props.pickup}</p>
            </div>
            <div className="dropoff">
                <img src=""/>
                <p>{props.dropoff}</p>
            </div>
        </div>
    )
}