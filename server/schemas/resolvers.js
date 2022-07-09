const { AuthenticationError } = require('apollo-server-express');
const { User, Game, Genre, Platform, Cart } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
    
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        genres: async () => {
            return await Genre.find();
        },
        games: async (parent, { genre, name }) => {
            const params = {};
      
            if (genre) {
              params.genre = genre;
            }
      
            if (name) {
              params.name = {
                $regex: name
              };
            }
      
            return await Game.find(params).populate('genre');
        },
        game: async (parent, { _id }) => {
            return await Game.findById(_id).populate('genre');
        },
        cart: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'carts.games',
                populate: 'genre'
              });
      
              return user.carts.id(_id);
            }
      
            throw new AuthenticationError('Not logged in');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPW = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
        },
        updateGame: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },
        addCart: async (parent, { games }, context) => {
            console.log(context);
            if (context.user) {
              const cart = new Cart({ games });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { carts: cart } });
      
              return cart;
            }
      
            throw new AuthenticationError('Not logged in');
        },
    }
};

module.exports = resolvers;