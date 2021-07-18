import { gql } from '@apollo/client';

export const createUserGql = gql`
  mutation createUser($data: UserInputType!) {
    createUser(data: $data) {
      name
      id
      phone
      role
    }
  }
`;

export interface UserInputType {
  name: string;
  email: string;
  password: string;
  birthDate: string;
  role: 'user' | 'admin';
  phone: string;
}
