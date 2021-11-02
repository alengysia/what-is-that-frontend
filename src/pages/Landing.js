import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import '../App.css';

function Landing(props) {

    const [instrument, setInstrument] = useState([]);

    const URL_LANDING = "https://what-is-that-sound.herokuapp.com/landing/"


    const getInstrument2 = async () => {
        if(!props.user) return;
        const token = await props.user.getIdToken();
        console.log(token)
        const response = await fetch(URL_LANDING, {
          
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });
        console.log(response)
        const data = await response.json();
        console.log("this is data", data)
        setInstrument(data)
        
      };

    useEffect(() => {
        getInstrument2()
    }, [])

    const loaded = () => {
        return instrument.map((inst) =>(
            <div key={inst._id} className="instrument">
                <Link to={`/instruments/${inst._id}`}>
                    <img className="home-img" src={inst.instImage} alt={inst.instName} />
                </Link>
                    <h4>{inst.instName}</h4>
            </div>
        ))
    };

    const loading = () =>{
        return <h1>Loading...</h1>;
    };


    return (
        <div>
            {instrument ? loaded() : loading()}
            <Link to='/create'>Add a new instrument here</Link>
        </div>
    );
}

export default Landing;