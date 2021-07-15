import { gql} from "@apollo/client";

export const loginGql = gql`
  mutation login( $email: String! $password: String!) {
    login(data: {email: $email, password:$password}){
        token
          user{
          id
          name
          email
          role
        }
      }
    }
`;

