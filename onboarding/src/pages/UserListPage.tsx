import { useQuery } from '@apollo/client';
import React from 'react';
import { userlistQuery } from '../services/userlistQuery';

export const UserListPage: React.FC = () => {
  const token = localStorage.getItem('token');
  const { data } = useQuery(userlistQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      offset: 0,
      limit: 10,
    },
  });
  const mappedUserlist = data?.users?.nodes?.map((user: UserType) => {
    const { id, name, email } = user;
    return (
      <p key={id}>
        username: {name} | email: {email}
      </p>
    );
  });
  return (
    <>
      <div>UserListPage</div>
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
