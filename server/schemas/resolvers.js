/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : resolvers.js          */
/* Team     : Coders of Hyrule      */
/* Date     : 07/07/2022            */
/* Modified : 07/11/2022            */
/* -------------------------------- */
// Import apollo server
const { AuthenticationError } = require('apollo-server-express');
// Import models
const { User, Game, Genre, Platform, Cart } = require('../models');
// Import token method
const { signToken } = require('../utils/auth');
// Import stripe
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
// Define resolvers
const resolvers = {
  // Queries
  Query: {
    // Query to get all users
    users: async() => {
      return User.find()
        .populate({
          path: 'carts.games',
          populate: 'genre platform'})
    },
    // Query to get an specific user
    user: async (parent, args, context) => {
      if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
          .populate({
            path: 'carts.games',
            populate: 'genre platform'});
            userData.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    // Query to get all genres
    genres: async () => {
      return await Genre.find();
    },
    // Query to get all platforms
    platforms: async () => {
      return await Platform.find();
    },
    // Query to get all games
    games: async (parent, { genre, platform, gameName }) => {
      const params = {};
      if (genre) {
        params.genre = genre;
      }
      if (platform) {
        params.platform = platform;
      }
      if (gameName) {
        params.gameName = {
          $regex: gameName
        };
      }
      return await Game.find(params).populate('genre').populate('platform');
    },
    // Query to get a specific game
    game: async (parent, { _id }) => {
      return await Game.findById(_id).populate('genre').populate('platform');
    },
    // Query to get all orders
    carts: async () => {
      return await Cart.find().populate("game");
    },
    // Query to get a specific order
    cart: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'carts.games',
          populate: 'platform' // Populate with platform data
        });
        return user.carts.id(_id);
      }
      throw new AuthenticationError('Not logged in');
    },
    // Add checkout query
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const cart = new Cart({ games: args.games });
      const line_items = [];
      const { games } = await cart.populate('games');
      for (let i = 0; i < games.length; i++) {
        // Generate game id
        const game = await stripe.games.create({
          gameName: games[i].gameName,
          description: games[i].description,
          images: [`${url}/images/${games[i].image}`]
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
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });
      return { session: session.id };
    }
  },
  // Actions
  Mutation: {
    // Insert a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // Validate login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if(!user) {
        throw new AuthenticationError('Email invalid in our database');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
          throw new AuthenticationError('Password incorrect');
      }
      const token = signToken(user);
      return { token, user };
    },
    // Update user credentials
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true }).populate({path: 'carts.games',populate: 'genre platform'});
      }
      throw new AuthenticationError('Not logged in');
    },
    // Update game stock
    updateGame: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;
      return await Game.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    // Insert games to cart
    addCart: async (parent, { games }, context) => {
      if (context.user) {
        const cart = new Cart({ games });
        await User.findByIdAndUpdate(context.user._id, { $push: { carts: cart } });
        return cart;
      }
      throw new AuthenticationError('Not logged in');
    },
  }
};
// Export resolvers
module.exports = resolvers;