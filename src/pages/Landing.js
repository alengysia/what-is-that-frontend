import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Landing(props) {
    // console.log('this is landing props', props)
    // const id = props.match.params.id;
    // const instruments = props.instruments;
    // console.log(props.instruments)
    // const instUse = instruments.find((p) => p._id === id);
  
    
    const [instrument, setInstrument] = useState([]);
    
    const URL_LANDING = 'https://what-is-that-sound.herokuapp.com/landing/'
    
    
    const getInstrument2 = async () => {
        if(!props.user) return;
        const token = await props.user.getIdToken();
     
        const response = await fetch(URL_LANDING, {
            
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    
        const data = await response.json();
        setInstrument(data)
        
    };

    
    
    
    
    const removeInstrument = async (e,id) => {
    await props.deleteInstrument(id);
    getInstrument2();
  };
      

      


      
      

    useEffect(() => {
        getInstrument2()
    }, [])

    const loaded = () => {
        return instrument.map((inst) =>(
            <div>
                <div key={inst._id} className='instrument'>
                    <Link to={`/instruments/${inst._id}`}>
                        <img className='home-img' src={inst.instImage} alt={inst.instName} />
                    </Link>
                    
                        <h4>{inst.instName}</h4>
                </div>
            <button id="delete" onClick={(e) => removeInstrument(e, inst._id)}>
                DELETE
            </button>
        </div>
        ))
    };

    const loading = () =>{
        return <h1>Loading...</h1>;
    };


    return (
        <div>
            <div className='add-btn'>
                <Link to='/create'>Add a new instrument here</Link>
            </div>
            <div className='home'>
                {instrument ? loaded() : loading()}
            </div>
        </div>
    );
}

export default Landing;