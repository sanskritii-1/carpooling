import React from "react";

export default function Sidebar(props){
    return (
        <div className="side-bar" style={{display:(props.show)?"block":"none"}}>
        {/* // <div className="side-bar" style={{display:"block"}}> */}
            <h1>OPTIONS</h1>
            <div className="item">
                <img src="images/book_ride.png" className="item-img"></img>
                <p className="content">Book Ride</p>
            </div>
            <div className="item">
                <img src="images/history.png" className="item-img"></img>
                <p className="content">Past Rides</p>
            </div>
        </div>
    )
}