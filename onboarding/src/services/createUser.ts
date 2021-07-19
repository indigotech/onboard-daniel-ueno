import { gql } from '@apollo/client';

export const createUser = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $phone: String!
    $birthDate: Date!
    $password: String
    $role: UserRole!
  ) {
    createUser(
      data: {
        email: $email
        password: $password
        phone: $phone
        birthDate: $birthDate
        password: $password
        role: $role
      }
    ) {
      id
      name
      email
      role
    }
  }
`;
