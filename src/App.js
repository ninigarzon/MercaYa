import './App.css';
import Header from './Components/Header';
import Home from "./View/HomeIn";

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { PublicRoute, PrivateRoute } from 'react-private-public-route';

/* CONTEXT */
import State from "./context/state";

function App() {
  return (
    <div className="App">
      <State>
        <Header />
        <Router>
          <Switch>
            <PublicRoute
              exact
              path='/'
              component={Home}
            />
          </Switch>
        </Router>
      </State>
    </div>
  );
}

export default App;
