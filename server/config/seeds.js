const db = require('./connection');
const { User, Game, Genre, Platform, Cart } = require('../models');

db.once('open', async () => {
    await Genre.deleteMany();

    const genres = await Genre.insertMany([
        { genreName: 'Action'},
        { genreName: 'Shooter' },
        { genreName: 'Puzzle'},
        { genreName: 'Sports' }
    ]);

    console.log('genres seeded');

    await Platform.deleteMany();

    const platforms = await Platform.insertMany([
        { platformName: 'Nintendo' },
        { platformName: 'XBox' },
        { platformName: 'PC'},
        { platformName: 'PlayStation'}
    ]);

    console.log('platforms seeded');

    await Game.deleteMany();
    const games = await Game.insertMany([
        {
            gameName: 'Mario Brothers',
            description: "It's-a me, Mario!",
            image: 'mariobro.png',
            price: '20',
            quantity: '10',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Call of Duty',
            description: "Duty calls",
            image: 'cod.png',
            price: '40',
            quantity: '15',
            platform: platforms[1]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Portal',
            description: "Insert cube joke",
            image: 'tempest.png',
            price: '30',
            quantity: '5',
            platform: platforms[2]._id,
            genre: genres[2]._id
        },
        {
            gameName: 'FIFA 22',
            description: "Same as FIFA 21",
            image: 'zelda.png',
            price: '60',
            quantity: '20',
            platform: platforms[3]._id,
            genre: genres[3]._id
        }
    ]);

    console.log('games seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email:'pamela@testmail.com',
        password: 'password12345',
        carts: [
            {
                games: [games[0]._id, games[2]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@fake.com',
        password: 'password12345'
    });

    console.log('users seeded');
    await Cart.deleteMany();
    console.log('carts clean');
    process.exit();
});