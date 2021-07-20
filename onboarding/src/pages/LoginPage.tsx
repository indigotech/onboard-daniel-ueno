import React from 'react';
import { H1 } from '../component/H1';
import { LoginForm } from '../component/LoginForm';

export const LoginPage: React.FC = () => {
  return (
    <div>
      <H1>Bem Vindo(a) à Taqtile!</H1>
      <LoginForm />
    </div>
  );
};
