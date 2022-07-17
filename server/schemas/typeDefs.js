/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : typeDefs.js           */
/* Team     : Coders of Hyrule      */
/* Date     : 07/07/2022            */
/* Modified : 07/11/2022            */
/* -------------------------------- */
// Import GrapQL
const { gql } = require('apollo-server-express');
// Create database definition
const typeDefs = gql`
    type Genre {
        _id: ID
        genreName: String
    }

    type Platform {
        _id: ID
        platformName: String
    }

    type Game {
        _id: ID
        gameName: String
        description: String
        image: String
        price: Float
        quantity: Int
        platform: Platform
        genre: Genre
    }

    type Cart {
        _id: ID
        purchaseDate: String
        games: [Game]
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        carts: [Cart]
    }

    type Auth {
        token: ID
        user: User
    }

    type Checkout {
        session: ID
    }

    type Query {
        genres: [Genre]
        platforms: [Platform]
        games(platform: ID, genre: ID gameName: String): [Game]
        game(_id: ID!): Game
        user: User
        users: [User]
        carts: [Cart]
        cart(_id: ID!): Cart
        checkout(games: [ID]!): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCart(games: [ID]!): Cart
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateGame(_id: ID!, quantity: Int!): Game
    }
`;
// Export database definition
module.exports = typeDefs;