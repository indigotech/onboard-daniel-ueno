import { useQuery } from '@apollo/client';
import { singleUserQuery } from '../services/usersQueries';

export const useGetUserById = (id_params: string): { user?: User } => {
  const token = localStorage.getItem('token');
  const { data } = useQuery(singleUserQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      id: id_params,
    },
    onError: () => {
      alert('Usuário não Encontrado');
    },
  });
  if (!data) {
    return {};
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
