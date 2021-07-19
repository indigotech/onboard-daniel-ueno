import { ApolloError, useMutation } from '@apollo/client';
import { History } from 'history';
import { goToUserList } from '../routes/coordinator';
import { createUserGql } from '../services/createUser';

export const useCreateUsers = (history: History): { createUser: any; loading: boolean } => {
  const token = localStorage.getItem('token');
  const [createUser, { loading }] = useMutation(createUserGql, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    onError: (error: ApolloError) => {
      alert(error.message);
    },
    onCompleted: () => {
      goToUserList(history);
    },
  });
  return { createUser, loading };
};
