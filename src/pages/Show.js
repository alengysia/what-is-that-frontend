import { useState } from "react";
import { ReactPlayer } from "react-player"



function Show(props) {
 console.log(props)
    const id = props.match.params.id;
    const instruments = props.instrument;
    console.log(props.instrument)
    const instrument = instruments.find((i) => i._id === id);

    


    return (
        <div>
            <h1>{instrument.instName}</h1>
            <h2>{instrument.instType}</h2>
            <img src={instrument.Image} alt={instrument.instName} />
            <h2>{instrument.instOrigin}</h2>
            <h3>{instrument.instAbout}</h3>
            <ReactPlayer
                 url={instrument.instVid}
            />
        </div>
    );
}

export default Show;