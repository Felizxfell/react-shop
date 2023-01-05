import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import Registrer from "../pages/Registrer";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.scss";
import MyAccount from "../pages/MyAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import SendEmail from "../pages/SendEmail ";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/recovery-password"
              component={RecoveryPassword}
            />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/registrer" component={Registrer} />
            <Route exact path="/my-account" component={MyAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/order" component={Orders} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
