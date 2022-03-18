import { PublicRoute, PrivateRoute } from "react-private-public-route";

import Header from "./Components/Header";

/* VIEWS */
import Home from "./View/HomeIn";
import Login from "./View/login/Login";
import RecoverPassword from "./View/recover-password/RecoverPassword";
import Register from "./View/Register/Register";
import ShoppingList from "./View/shopping-list/ShoppingList";
import CreateShoppingList from "./View/create-shopping-list/CreateShoppingList";
import CreateBranding from "./View/create-branding/CreateBranding";
import CreateProduct from "./View/create-product/CreateProduct";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* CONTEXT */
import State from "./context/state";

/* STYLES */
import "./App.css";

function App() {
  const { pathname } = window.location;

  return (
    <div className="App">
      <State>
        {(pathname !== "/login" && pathname !== "/recover-password") && (
          <Header />
        )}
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/recover-password" component={RecoverPassword} />
            <Route exact path="/Register" component={Register} />
            <PublicRoute exact path="/" component={Home} />
            <PrivateRoute
              isAuthenticated={true}
              exact
              path="/shopping-list"
              component={ShoppingList}
            />
            <PrivateRoute
              isAuthenticated={true}
              exact
              path="/create-shopping-list"
              component={CreateShoppingList}
            />
            <PrivateRoute
              isAuthenticated={true}
              exact
              path="/create-branding"
              component={CreateBranding}
            />
            <PrivateRoute
              isAuthenticated={true}
              exact
              path="/create-product"
              component={CreateProduct}
            />
          </Switch>
        </Router>
      </State>
    </div>
  );
}

export default App;
