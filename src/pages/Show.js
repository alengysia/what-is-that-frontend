import { useEffect, useState } from "react";
import React from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../App.css';



function Show({match, instruments}) {
    const id = match.params.id;
    const instrument = instruments.find((p) => p._id === id);


    const [editForm, setEditForm] = useState(instrument);

    
 

    return (
        <div className='show'>
            <div className='show-title'>
                <h1>{instrument?.instName}</h1>
                <h2 className='inst-type'>The {instrument?.instName} is a {instrument?.instType} instrument</h2>
            </div>
            <div className='show-mid'>
                    <img src={instrument?.instImage} alt={instrument?.instName} />
                <div className='show-about'>
                    <h2 className='inst-origin"'>The {instrument?.instName} originated in {instrument?.instOrigin}</h2>
                    <h3>{instrument?.instAbout}</h3>
                </div>
            </div>
            <div className='react-player'>
            <ReactPlayer
                 url={instrument?.instVid}
                 controls='true'
                 width='960px'
                 height='540px'
            />
                 
            </div>
        </div>
    );
}

export default Show;

