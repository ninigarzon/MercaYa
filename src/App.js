import './App.css';
import Header from './Components/Header';
import Home from "./View/HomeIn";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/* CONTEXT */
import State from "./context/state";

function App() {
  return (
    <div className="App">
      <State>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </State>
    </div>
  );
}

export default App;
