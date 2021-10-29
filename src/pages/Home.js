// import { useState } from "react";
import { Link } from "react-router-dom"





function Home(props) {





    console.log("this is instruments",  props.instrument)
    const loaded = () => {
        return props.instrument.map((inst) =>(
            <div key={inst._id} className="instrument">
                <Link to={`/instruments/${inst._id}`}>
              <img src={inst.instImage} alt={inst.instName} />
              </Link>
            </div>
        ))
    };

    const loading = () =>{
        return <h1>Loading...</h1>;
    };



    return (
        <section>
            
            {props.instrument ? loaded() : loading()}
        </section>
    );
}

export default Home;