import React from 'react';
import { CreateUserForm } from '../component/CreateUserForm';
import { Header } from '../component/Header';

export const CreateUserPage: React.FC = () => {
  return (
    <>
      <Header title={'Criar usuário'} />
      <CreateUserForm />
    </>
  );
};
