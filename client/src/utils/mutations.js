/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : mutations.js          */
/* Team     : Coders of Hyrule      */
/* Date     : 07/12/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import apollo client
import { gql } from '@apollo/client';
// Export login
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
// Export method to add order
export const ADD_ORDER = gql`
  mutation addOrder($games: [ID]!) {
    addOrder(games: $games) {
      purchaseDate
      games {
        _id
        name
        description
        price
        quantity
        platform {
          platformName
        }
        genre {
          genreName
        }
      }
    }
  }
`;
// Export method to add user
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
