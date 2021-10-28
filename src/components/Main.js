import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Show from "../pages/Show";
import Login from "../pages/Login";
import Landing from "../pages/Landing";
import Create from "../pages/Create";
import { auth } from "../services/firebase"


function Main(props) {
  const [instrument, setInstrument] = useState([]);

  const URL = "https://what-is-that-sound.herokuapp.com/instrument/";

  const getInstrument = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setInstrument(data)
    console.log(data)
 };


  useEffect(() => {
    getInstrument();
  }, []);



console.log("3",instrument)
  return (
    <main>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
    </main>
  );
}

export default Main;