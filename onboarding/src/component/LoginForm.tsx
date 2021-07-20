import { ApolloError, useMutation } from '@apollo/client';
import { History } from 'history';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToUserList } from '../routes/coordinator';
import { loginGql } from '../services/loginRequest';
import { Button } from './Button';
import { Input } from './Input';
import { Label } from './Label';
export const LoginForm: React.FC = () => {
  const history: History = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading: mutationLoading }] = useMutation(loginGql, {
    onError: (error: ApolloError) => {
      alert(error.message);
    },
    onCompleted: (data) => {
      localStorage.setItem('token', data.login.token);
      setEmail('');
      setPassword('');
      goToUserList(history);
    },
  });

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const signIn = (event: React.FormEvent) => {
    event.preventDefault();
    login({ variables: { email: email, password: password } });
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <Label htmlFor={'email'}>email</Label>
        <br />
        <Input
          id={'email'}
          type={'email'}
          name={'email'}
          value={email}
          onChange={handleEmail}
          placeholder='E-mail'
          required
          pattern='([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$)'
          title={'O e-mail deve ser do tipo texto@texto.texto'}
        />
        <br />
        <Label htmlFor={'password'}>password</Label>
        <br />
        <Input
          id={'password'}
          type={'password'}
          name={'password'}
          value={password}
          onChange={handlePassword}
          placeholder='password'
          required
          pattern='(^(?=.*\d)(?=.*[a-zA-Z]).{8,}$)'
          title={'Sua senha deve ter no mínimo 8 caracteres, 1 letra e 1 dígito'}
        />
        <br />
        <Button disabled={mutationLoading}>{mutationLoading ? 'Carregando' : 'Entrar'}</Button>
      </form>
    </div>
  );
};
