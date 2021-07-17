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
      count
      pageInfo {
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
