import React from 'react';
import '../styles/header.css';
import { useHistory } from 'react-router-dom';
import { goToCreateUserPage } from '../routes/coordinator';

export const Header: React.FC<{ title: string }> = (props) => {
  const history = useHistory();
  return (
    <header>
      <h1>{props.title}</h1>
      {props.title === 'Lista de Usuários' ? (
        <button className='button' onClick={() => goToCreateUserPage(history)}>
          Adicionar Usuário
        </button>
      ) : (
        <button className='button' onClick={() => history.goBack()}>
          Voltar para Lista de Usuário
        </button>
      )}
    </header>
  );
};
