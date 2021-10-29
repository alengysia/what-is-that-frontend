import { useState } from "react";
import {Link} from "react-router-dom"

function Create(props) {

    const [newForm, setNewForm] = useState({
        instName: "",
        instType: "",
        instImage: "",
        instOrigin: "",
        instTradition: "",
        instAbout: "",
        instVid: "",
    });

    const instChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };



    const instSubmit =(event) => {
        event.preventDefault();
        props.createInstrument(newForm);
        setNewForm({
            instName: "",
            instType: "",
            instImage: "",
            instOrigin: "",
            instTradition: "",
            instAbout: "",
            instVid: "",
        });
    };



    return (
        <section>
            <form onSubmit={instSubmit}>
                <input 
                    type="text"
                    value={newForm.instName} 
                    name="instName"
                    placeholder="Instrument Name"
                    onChange={instChange} 
                    />
                <label htmlFor="instType">Type of Instrument</label>
                <select name="instType" onChange={instChange}>
                    <option value="String">String</option>
                    <option value="Woodwind">Woodwind</option>
                    <option value="Brass">Brass</option>
                    <option value="Keyboards">Keyboards</option>
                    <option value="Purcussion">Purcussion</option>
                    <option value="Contact">Contact</option>
                    <option value="Synth">Synth</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <input 
                    type="text"
                    value={newForm.instImage} 
                    name="instImage"
                    placeholder="Instrument image URL"
                    onChange={instChange} 
                    />
                <label htmlFor="instTradition">Check the box if the instrument is traditional. Leave blank if not.  </label>    
                <input 
                    type="checkbox"
                    value={newForm.instTradition}
                    name="instTradition"
                    onChange={instChange}
                    />
                <textarea 
                    value={newForm.instAbout}
                    name="instAbout" 
                    placeholder="Tell us about the instrument here"
                    onChange={instChange}
                    cols="30" 
                    rows="10">
                </textarea>
                <input 
                    type="text"
                    value={newForm.instVid} 
                    name="instVid"
                    placeholder="Video link URL"
                    onChange={instChange} 
                    />
                       
            </form>
        </section> 
    );
}

export default Create;