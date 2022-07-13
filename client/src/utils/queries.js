/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : queries.js            */
/* Team     : Coders of Hyrule      */
/* Date     : 07/12/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import apollo client
import { gql } from '@apollo/client';
// Export query games
export const QUERY_GAMES = gql`
  query getGames($genre:ID, $platform: ID) {
    games(genre: $genre, platform: $platform) {
      _id
      gameName
      description
      price
      quantity
      image
      platform {
        _id
      }
      genre {
        _id
      }
    }
  }
`;
// Export query all games
export const QUERY_ALL_GAMES = gql`
  {
    games {
      _id
      gameName
      description
      price
      quantity
      platform {
        platformName
      }
      genre {
        _id
      }
    }
  }
`;
// Export query platforms
export const QUERY_PLATFORMS = gql`
  {
    platforms {
      _id
      platformName
    }
  }
`;
// Export query user
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      carts {
        _id
        purchaseDate
        games {
          _id
          gameName
          description
          price
          quantity
          image
        }
      }
    }
  }
`;