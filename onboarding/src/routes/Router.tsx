import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <LoginPage />
          </Route>
          <Route exact path={"/blank"}>
            <div>outra pagina</div>
          </Route>
         <Route>
             <div>pagina de erro</div>
         </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  export default Router;