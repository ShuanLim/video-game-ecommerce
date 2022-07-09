const { gql } = require('apollo-server-express');

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
        games(genre: ID, name: String): [Game]
        game(_id: ID!): Game
        user: User
        cart(_id: ID!): Cart
        checkout(games: [ID]!): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCart(games: [ID]!): Cart
        updateUser(fistName: String, lastName: String, email: String, password: String): User
        updateGame(_id: ID!, quantity: Int!): Game
    }
`;

module.exports = typeDefs;