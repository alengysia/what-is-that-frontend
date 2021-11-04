import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Show from '../pages/Show';
import '../App.css';
import Landing from '../pages/Landing';
import Create from '../pages/Create';
import Header from '../components/Header';

import { auth } from '../services/firebase';



function Main(props) {
  const [instrument, setInstrument] = useState([]);

  const [user, setUser] = useState(null);

  

  
  
  
  
  const URL = 'https://what-is-that-sound.herokuapp.com/instruments/';
  
  
  const getInstrument = async () => {
    const response = await fetch(URL, {
      method: 'GET',
    });
    const data = await response.json();
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

  const deleteInstrument = async (id) => {
    console.log(id)
    if(!user) return;
    const token = await user.getIdToken();
    await fetch(URL + id, {
      method: "DELETE",
      headers: {
        'Authorization' : 'Bearer ' + token
      },
      body: id
    });
    getInstrument();
  };
  
  
  

  
  
 

  useEffect(() => {
    const bounty = auth.onAuthStateChanged(user => setUser(user));
     getInstrument()
     return () => bounty(); //the quicker thicker picker upper
   }, [user]) 

  return (
    <main>
      <Header user={user} />
        <Switch>
            <Route exact path='/'>
                <Home 
                user={user} 
                instrument={instrument}
                getInstrument={getInstrument} />
            </Route>
            <Route 
              path='/instruments/:id'
              render={(rp) => (
                <Show
                  createInstrument={createInstrument}
                  updateInstrument={updateInstrument}
                  user={user}
                  instruments={instrument}
                  {...rp}
              />
            )}
          />
          <Route path='/landing' render={(rp) => (
            user ? <Landing 
                      user={user} 
                      instrument={instrument} 
                      createInstrument={createInstrument}
                      updateInstrument={updateInstrument}
                      deleteInstrument={deleteInstrument}
                      {...rp}
                      /> : <Redirect to="/" />
          )} />
          <Route path='/create' render = {() => (
            user ? 
            <Create 
              user={user}
              instrument={instrument} 
              createInstrument={createInstrument} 
              updateInstrument={updateInstrument} /> : <Redirect to ='/' />
          )} />
          
        </Switch>
    </main>
  );
}

export default Main;