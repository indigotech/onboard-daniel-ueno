import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Header } from '../component/Header';
import { useGetUsers } from '../hooks/useGetUsers';
import { nextPage, previousPage } from '../routes/coordinator';

export const UserListPage: React.FC = () => {
  const history = useHistory();
  const params: { offset: string | undefined } = useParams();
  let offset = 0;
  if (!isNaN(Number(params.offset))) {
    offset = Number(params.offset);
  }
  const data = useGetUsers(offset);
  const mappedUserlist = data?.users?.nodes?.map((user: UserType) => {
    const { id, name, email } = user;
    return <p key={id}>{`Nome de usuário: ${name} | e-mail: ${email}`}</p>;
  });

  return (
    <>
      <Header title={'Lista de Usuários'} />
      <div>
        {data?.users?.pageInfo?.hasPreviousPage && (
          <button onClick={() => previousPage(history, offset)}>Página Anterior</button>
        )}
        {data?.users?.pageInfo?.hasNextPage && (
          <button onClick={() => nextPage(history, offset)}>Próxima Página</button>
        )}
      </div>
      <div>{mappedUserlist}</div>
    </>
  );
};

interface UserType {
  id: number | string;
  name: string;
  phone: string;
  birthDate: Date;
  email: string;
  role: 'admin' | 'user';
}
