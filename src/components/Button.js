import React, {useState} from "react";
import Sidebar from "./Sidebar";

export default function Button(){
    const [showSideBar, setShowSideBar] = useState(false)

    function toggleSideBar(){
        setShowSideBar(!showSideBar);
    }

    return (
        <div className="side">
            <button onClick={toggleSideBar}>
                <img className="side-button" src="images/sidebar_button.png" />
            </button>
            <Sidebar show={showSideBar}/>
        </div>
    )
}