import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { LoginPage } from '../pages/LoginPage';
import { UserListPage } from '../pages/UserListPage';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <LoginPage />
        </Route>
        <Route exact path={'/userlist'}>
          <UserListPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
