import React from "react"
import {IoEarthOutline} from "react-icons/io5"
export default function NavBar(){
    return(
        <div className="nav-bar">
            <IoEarthOutline className="icon" />
            <span className="nav-text">My Travel <span className="jj">Journey</span></span>
        </div>
    )
}

