import { useState } from "react";
import {Link} from "react-router-dom"
import '../App.css';

function Landing(props) {
    return (
        <div>
            <h1>This is the Landing page</h1>
            <Link to='/create'>Add a new instrument here</Link>
        </div>
    );
}

export default Landing;