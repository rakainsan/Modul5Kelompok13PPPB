import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CardBig.css";

export default function CardBig(props) {
    return (
        <Link to={`/MovieDetail/${props.id}`} className="containerBig">
            <img src={props.img} alt={props.title} className="posterBig" />
            <div className="descriptionBig">
                <div>
                    <p id="title">{props.title}</p>
                    <p id="genre">{props.genre}</p>
                </div>
                <div className="stars">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar 
                            key={index} 
                            color={index < props.rating ? props.color : "#ccc"} 
                            size={props.size}
                        />
                    ))}
                </div>
            </div>
        </Link>
    );
}