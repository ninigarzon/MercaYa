import './App.css';
import Header from './Components/Header';
import Home from "./View/HomeIn";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header/> 
    <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
    </Router>
    </div>
  );
}

export default App;
