
import { Link } from 'react-router-dom';
import '../App.css';





function Home(props) {

    
    
    
    

    
    const loaded = () => {
        
        return props.instrument.map((inst) =>(
            <div key={inst._id} className='instrument'>
                <Link to={`/instruments/${inst._id}`}>
                    <img className='home-img' src={inst.instImage} alt={inst.instName} />
                </Link>
                    <h4>{inst.instName}</h4>
            </div>
        ))
        
    };

    const loading = () =>{
        return <h1>Loading...</h1>;
    };


    



    return (
        <section className='home'>
            
            {props.instrument ? loaded() : loading()}
            
        </section>
    );
}

export default Home;