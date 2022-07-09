const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Genre {
        _id: ID
        genreName: string
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
        user: User
        cart(_id: ID!): Cart
        checkout(games: [ID]!): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCart(games: [ID]!): Cart
    }
`;

module.exports = typeDefs;