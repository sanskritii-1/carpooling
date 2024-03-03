import React from "react";

export default function Contact(){
    return (
        <div className="contact">
            <span><img className="call" src="images/call.png"/></span>
            <span className="msg">
                <img className="message" src="images/message.png"/>
                <input className="text"/>
            </span>
        </div>
        
        )
}