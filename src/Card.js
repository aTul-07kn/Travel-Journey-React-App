import React from "react"
import {MdLocationOn} from 'react-icons/md'
export default function Card(props){
    return(
        <div className="card">
            <div id="card-img">
                <img src={props.obj.image} alt="tourism" />
            </div>
            <div className="card-details">
                <div className="location">
                    <MdLocationOn className="loc-icon"/>
                    <span className="loc-name">{props.obj.location}</span>
                    <span className="loc-link"><a href={props.obj.link} target="_blank">View on google maps</a></span>
                </div>
                <h1 className="place-name">{props.obj.name}</h1>
                <div className="loc-date">{props.obj.date}</div>
                <p className="loc-info">{props.obj.info}</p>
            </div>
        </div>
    )
}