import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Show from "../pages/Show";

import Landing from "../pages/Landing";
import Create from "../pages/Create";
import Header from "../components/Header"
import { auth } from "../services/firebase"



function Main(props) {
  const [instrument, setInstrument] = useState([]);

  const [user, setUser] = useState(null);



  useEffect(() => {
   const bounty = auth.onAuthStateChanged(user => setUser(user));
    return () => bounty(); //the quicker thicker picker upper
  }, [])
   console.log("This is:", user)



  const URL = "https://what-is-that-sound.herokuapp.com/instruments/";

  const getInstrument = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setInstrument(data)
    console.log(data)
 };


 const createInstrument = async (inst) => {
   await fetch(URL, {
     method: "POST",
     headers: {
       "Content-Type" : "Application/json",
     },
     body: JSON.stringify(inst),
   });
   getInstrument();
 };

 const updateInstrument = async (inst, id) => {
   await fetch(URL + id, {
     method: "PUT",
     headers: {
       "Content-Type" : "Application/json",
     },
     body: JSON.stringify(inst)
   });
   getInstrument();
 };


  useEffect(() => {
    getInstrument();
  }, []);



console.log("3",instrument)
  return (
    <main>
      <Header user={user} />
        <Switch>
            <Route exact path="/">
                <Home instrument={instrument} />
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
            user ? <Landing /> : <Redirect to="/" />
          )} />
          <Route path="/create">
            <Create 
              instrument={instrument} 
              createInstrument={createInstrument} 
              updateInstrument={updateInstrument} />
          </Route>
        </Switch>
    </main>
  );
}

export default Main;