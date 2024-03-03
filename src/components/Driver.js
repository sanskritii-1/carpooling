import React from "react";

export default function Driver(props){
    return (
        <div className="driver">
            <img src={props.img} className="profile"></img>
            <p>{props.name}</p>
            <p>{props.rating}</p>
            <p className="call"><img src=""/></p>
            <p className="message"><img src=""/></p>
        </div>
    )
}