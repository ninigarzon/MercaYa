import './App.css';
import Header from './Components/Header';

/* VIEWS */
import Home from "./View/HomeIn";
import ShoppingList from "./View/shopping-list/ShoppingList";
import CreateShoppingList from "./View/create-shopping-list/CreateShoppingList";

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
            <PrivateRoute
              isAuthenticated={true}
              exact
              path='/shopping-list'
              component={ShoppingList}
            />
            <PrivateRoute
              isAuthenticated={true}
              exact
              path='/create-shopping-list'
              component={CreateShoppingList}
            />
          </Switch>
        </Router>
      </State>
    </div>
  );
}

export default App;
