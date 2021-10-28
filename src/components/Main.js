import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Show from "../pages/Show";


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
        </Switch>
    </main>
  );
}

export default Main;