import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CreateUserPage } from '../pages/CreateUserPage';
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
        <Route exact path={'/user-list/:offset'}>
          <UserListPage />
        </Route>
        <Route exact path={'/create-user'}>
          <CreateUserPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
