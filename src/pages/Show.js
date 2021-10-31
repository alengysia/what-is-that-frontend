// import { useEffect, useState } from "react";
import React from "react"
import ReactPlayer from "react-player"
import '../App.css';



function Show({match, instruments}) {
    const id = match.params.id;
    const instrument = instruments.find((p) => p._id === id);

    

    return (
        <div className="show">
            <div className="show-title">
                <h1>{instrument?.instName}</h1>
                <h2 className="inst-type">The {instrument?.instName} is a {instrument?.instType} instrument</h2>
            </div>
            <div className="show-mid">
                    <img src={instrument?.instImage} alt={instrument?.instName} />
                <div className="show-about">
                    <h2 className="inst-origin">The {instrument?.instName} originated in {instrument?.instOrigin}</h2>
                    <h3>{instrument?.instAbout}</h3>
                </div>
            </div>

            <ReactPlayer
                 url={instrument?.instVid}
            />
        </div>
    );
}

export default Show;

