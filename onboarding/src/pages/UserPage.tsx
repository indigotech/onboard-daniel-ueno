import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../component/Header';
import { useGetUserById } from '../hooks/useGetUserById';

export const UserPage: React.FC = () => {
  const params: { id: string | undefined } = useParams();
  const data = useGetUserById(params.id);
  const { email, name, phone, role, birthDate } = data?.user;

  return (
    <>
      <Header title={'Página do Usuário'} />
      {!email && <h1>Usuário Não Encontrado</h1>}
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{birthDate}</p>
      <p>{role}</p>
    </>
  );
};
