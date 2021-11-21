import React from 'react';
import { Link } from "react-router-dom";
import gebbi from "./pictures/profiles/gebbi.webp"

function maxWords(str) {
    var symbols = str.length;
    var previewText = str;
    if (symbols > 100) {
        var previewText = previewText.slice(0, 100);
        previewText = previewText.concat("...");
    }
    return previewText;
}

export default function Card(props) {
    return (
        <div className="containerCard ">
            <div className="card">
                <Link style={{textDecoration:"none"}} to={`${props.teamClass}/${props.titel}`}>
                    <div className="card__header">
                        <img src={props.imgUrl} alt="card__image" className="card__image" />
                    </div>
                    <div className="card__body">
                        <span className="tag tag-blue">{props.teamClass}</span>
                        <h4>{props.titel}</h4>
                        <p>{maxWords(props.text)}</p>
                    </div>
                    <div className="card__footer">
                        <div className="user">
                            <img src={gebbi} alt="user__image" className="user__image" />
                            <div className="user__info">
                                <h5>{props.author}</h5>
                                <small>{props.time}</small>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
