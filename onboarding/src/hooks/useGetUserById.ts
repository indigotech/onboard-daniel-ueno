import { useQuery } from '@apollo/client';
import { singleUserQuery } from '../services/usersQueries';

export const useGetUserById = (idparams: string | undefined): { user: User } => {
  const token = localStorage.getItem('token');
  const { data } = useQuery(singleUserQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      id: idparams,
    },
  });
  if (!data) {
    const error = {
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        birthDate: '',
      },
    };
    return error;
  }
  return data;
};
export interface User {
  id: string | number;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  birthDate: string;
}
