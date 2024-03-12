import React from "react";

export default function Passengers(props){
    return (
        <div className={props.class}>
            <img src={props.img} className="profile"></img>
            <span className="rider-name">{props.name}</span>
            <span>{props.rating}⭐</span>
        </div>
    )
}