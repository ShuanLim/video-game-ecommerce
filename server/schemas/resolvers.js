const { AuthenticationError } = require('apollo-server-express');
const { User, Game, Genre, Platform, Cart } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const resolvers = {
    Query: {
        users: async() => {
          return User.find()
            .select('-__v -password');
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
    
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        genres: async () => {
            return await Genre.find();
        },
        platforms: async () => {
          return await Platform.find();
        },
        games: async (parent, { genre, platform, name }) => {
            const params = {};
      
            if (genre) {
              params.genre = genre;
            }

            if (platform) {
              params.platform = platform;
            }
      
            if (name) {
              params.name = {
                $regex: name
              };
            }
      
            return await Game.find(params).populate('genre').populate('platform');
        },
        game: async (parent, { _id }) => {
            return await Game.findById(_id).populate('genre').populate('platform');
        },
        // Add carts query
        carts: async () => {
          return await Cart.find().populate("game");
        },
        cart: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'carts.games',
                populate: 'platform', // Populate with platform data
                populate: 'genre'
              });
      
              return user.carts.id(_id);
            }
      
            throw new AuthenticationError('Not logged in');
        },
        // Add checkout query
        checkout: async (parent, args, context) => {
          const cart = new Cart({ games: args.games });
          const { games } = await cart.populate('games');
          const line_items = [];
          for (let i = 0; i < games.length; i++) {
            // Generate game id
            const game = await stripe.games.create({
              gameName: games[i].gameName,
              description: games[i].description
            });
            // Generate price id using the game id
            const price = await stripe.prices.create({
              game: game.id,
              unit_amount: games[i].price * 100,
              currency: 'usd',
            });
            // Add price id to the line items array
            line_items.push({
              price: price.id,
              quantity: 1
            });
          }
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'https://example.com/cancel'
          });
          return { session: session.id };
        }
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

            const correctPw = await user.isCorrectPassword(password);

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
      
            return await Game.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
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