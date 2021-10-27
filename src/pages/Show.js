// import { useState } from "react";
import React from "react"
import ReactPlayer from "react-player"



function Show(props) {
 console.log("2",props)
    const id = props.match.params.id;
    const instruments = props.instrument;
    console.log("this is show page", props.instrument)
    const instrument = instruments.find((p) => p._id === id);

    
    return (
        <div>
            <h1>{instrument.instName}</h1>
            <h2>{instrument.instType}</h2>
            <img src={instrument.instImage} alt={instrument.instName} />
            <h2>{instrument.instOrigin}</h2>
            <h3>{instrument.instAbout}</h3>
            <ReactPlayer
                 url={instrument.instVid}
            />
        </div>
    );
}

export default Show;