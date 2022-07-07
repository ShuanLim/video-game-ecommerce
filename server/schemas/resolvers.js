const { AuthenticationError } = require('apollo-server-express');
const { User, Game, Genre, Platform, Cart } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        
    }
}