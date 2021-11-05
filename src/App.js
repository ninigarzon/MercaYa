import './App.css';
import Header from './Components/Header';
import Home from "./View/HomeIn";
import Login from './View/Login/Login';
import RecuperarC1 from './View/RecuperarC/RecuperarC1';
import RecuperarC2 from './View/RecuperarC/RecuperarC2';
import RecuperarC3 from './View/RecuperarC/RecuperarC3';
import Register from './View/Register/Register';

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
            <Route exact path="/Login" component={Login} />
            <Route exact path="/RecuperarC1" component={RecuperarC1} />
            <Route exact path="/RecuperarC2" component={RecuperarC2} />
            <Route exact path="/RecuperarC3" component={RecuperarC3} />
            <Route exact path="/Register" component={Register} />
          </Switch>
    </Router>
    </div>
  );
}

export default App;
