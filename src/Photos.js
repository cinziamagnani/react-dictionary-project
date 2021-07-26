import React from 'react';
import "./Photos.css";


export default function Photos(props) {
    if(props.photos) {
        return <div className="Photos row">
            {props.photos.map(function (photo, index) {
                return (
                    <div className="col-lg-4 picture" key={index}>
                        <a href={photo.src.original} target="_blank" rel="noreferrer">
                        <img src={photo.src.landscape} alt={`${props.keyword}`} className="img-fluid"/>
                        </a>
                    </div>
                )
            })}
        </div>
    } else {
        return null;
    }
}