// import { useState } from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';




function Home(props) {

    



    console.log("this is instruments",  props.instrument)
    const loaded = () => {
        return props.instrument.map((inst) =>(
            <StyledHeader>
                <div key={inst._id} className="instrument">
                    <div className="inst-card">
                        <Link to={`/instruments/${inst._id}`}>
                        <img src={inst.instImage} alt={inst.instName} />
                        </Link>
                    </div>
                </div>
            </StyledHeader>
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