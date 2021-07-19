import { gql } from '@apollo/client';

export const userlistQuery = gql`
  query getUsers($offset: Int, $limit: Int) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        phone
        birthDate
        email
        role
      }
      pageInfo {
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
export const singleUserQuery = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      name
      phone
      role
      phone
      birthDate
    }
  }
`;
