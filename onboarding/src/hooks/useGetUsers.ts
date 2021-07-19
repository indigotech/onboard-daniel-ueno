import { useQuery } from '@apollo/client';
import { userlistQuery } from '../services/usersQueries';

export const useGetUsers = (offset: number): any => {
  const token = localStorage.getItem('token');
  const limit = 10;
  const { data } = useQuery(userlistQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      offset: offset,
      limit: limit,
    },
  });
  return data;
};
