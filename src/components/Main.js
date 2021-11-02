import { useEffect, useState, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Show from "../pages/Show";
import '../App.css';
import Landing from "../pages/Landing";
import Create from "../pages/Create";
import Header from "../components/Header"
import { auth } from "../services/firebase"



function Main(props) {
  const [instrument, setInstrument] = useState([]);

  const [user, setUser] = useState(null);

  const fetchData = useRef(null)

  
  
  
  
  const URL = "https://what-is-that-sound.herokuapp.com/instruments/";
  
  
  const getInstrument = async () => {
    if(!user) return;
    const token = await user.getIdToken();
    console.log(token)
    const response = await fetch(URL, {
      
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

  
  
  const createInstrument = async (inst) => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = {...inst, managedBy: user.uid}
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type' : 'Application/json',
        'Authorization' : 'Bearer ' + token
      },
      body: JSON.stringify(data),
    });
    getInstrument();
  };
  
  const updateInstrument = async (inst, id) => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = {...inst, uid: user.uid}
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'Application/json',
        'Authorization' : 'Bearer ' + token
      },
      body: JSON.stringify(inst)
    });
    getInstrument();
  };
  
  
  
  
  // useEffect(() => fetchData.current = createIn)

  useEffect(() => {
    const bounty = auth.onAuthStateChanged(user => setUser(user));
     getInstrument()
     return () => bounty(); //the quicker thicker picker upper
   }, [user]) 

  return (
    <main>
      <Header user={user} />
        <Switch>
            <Route exact path="/">
                <Home 
                user={user} 
                instrument={instrument}/>
            </Route>
            <Route 
              path="/instruments/:id"
              render={(rp) => (
                <Show
                  instruments={instrument}
                  {...rp}
              />
            )}
          />
          <Route path="/landing" render={() => (
            user ? <Landing user={user} instrument={instrument} /> : <Redirect to="/" />
          )} />
          <Route path="/create">
            <Create 
              user={user}
              instrument={instrument} 
              createInstrument={createInstrument} 
              updateInstrument={updateInstrument} />
          </Route>
        </Switch>
    </main>
  );
}

export default Main;